<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Project;
use App\Models\SiteSetting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatbotController extends Controller
{
    public function respond(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'message' => ['required', 'string', 'max:2000'],
        ]);

        $apiKey = (string) config('services.openai.key', '');
        if ($apiKey === '') {
            return response()->json([
                'reply' => 'Chat assistant is not configured yet. Please add OpenAI API key in admin settings.',
            ], 503);
        }

        $context = $this->buildWebsiteContext();
        $systemPrompt = <<<PROMPT
You are A TECH website assistant.
Primary goal: help users about A TECH services, process, pricing direction, FAQs, and contact flow.
You may answer general questions too, but prioritize website/business context first.
Keep responses concise, friendly, and practical.

Website context:
{$context}
PROMPT;

        $response = Http::timeout(30)
            ->withToken($apiKey)
            ->post('https://api.openai.com/v1/chat/completions', [
                'model' => 'gpt-4o-mini',
                'messages' => [
                    ['role' => 'system', 'content' => $systemPrompt],
                    ['role' => 'user', 'content' => $payload['message']],
                ],
                'temperature' => 0.6,
            ]);

        if (! $response->ok()) {
            return response()->json([
                'reply' => 'AI assistant is temporarily unavailable. Please try again shortly.',
            ], 502);
        }

        $reply = (string) data_get($response->json(), 'choices.0.message.content', '');

        return response()->json([
            'reply' => $reply !== '' ? $reply : 'Sorry, I could not generate a response right now.',
        ]);
    }

    private function buildWebsiteContext(): string
    {
        $settings = SiteSetting::query()->where('key', 'global')->first()?->value ?? [];
        $projects = Project::query()->where('is_published', true)->latest()->take(6)->get(['title', 'summary']);
        $pages = Page::query()->where('is_published', true)->get(['slug', 'title']);

        $projectLines = $projects->map(fn ($p): string => "- {$p->title}: " . mb_substr((string) $p->summary, 0, 120))->implode("\n");
        $pageLines = $pages->map(fn ($p): string => "- {$p->slug} ({$p->title})")->implode("\n");

        return implode("\n", [
            'Site Name: ' . (string) ($settings['siteName'] ?? 'A TECH'),
            'Contact Email: ' . (string) ($settings['contactEmail'] ?? 'N/A'),
            'Phone: ' . (string) ($settings['phone'] ?? 'N/A'),
            'Pages:',
            $pageLines,
            'Recent Projects:',
            $projectLines,
        ]);
    }
}
