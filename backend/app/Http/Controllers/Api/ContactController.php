<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:100'],
            'company' => ['nullable', 'string', 'max:255'],
            'service' => ['nullable', 'string', 'max:255'],
            'budget' => ['nullable', 'string', 'max:255'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        ContactMessage::query()->create($payload);

        $ownerEmail = (string) config('services.contact.receiver_email', env('MAIL_FROM_ADDRESS', ''));
        $whatsAppNumber = preg_replace('/\D+/', '', (string) config('services.contact.whatsapp_number', '76349746'));

        if ($ownerEmail !== '') {
            $subject = sprintf('New Contact Message from %s', $payload['name']);
            $body = implode("\n", [
                'New contact request received:',
                '',
                'Name: ' . $payload['name'],
                'Email: ' . $payload['email'],
                'Phone: ' . ($payload['phone'] ?? '-'),
                'Company: ' . ($payload['company'] ?? '-'),
                'Service: ' . ($payload['service'] ?? '-'),
                'Budget: ' . ($payload['budget'] ?? '-'),
                '',
                'Message:',
                $payload['message'],
            ]);

            Mail::raw($body, function ($message) use ($ownerEmail, $payload, $subject): void {
                $message->to($ownerEmail)
                    ->replyTo($payload['email'], $payload['name'])
                    ->subject($subject);
            });
        }

        $waText = rawurlencode(implode("\n", [
            'New Contact Request',
            'Name: ' . $payload['name'],
            'Email: ' . $payload['email'],
            'Phone: ' . ($payload['phone'] ?? '-'),
            'Company: ' . ($payload['company'] ?? '-'),
            'Service: ' . ($payload['service'] ?? '-'),
            'Budget: ' . ($payload['budget'] ?? '-'),
            'Message: ' . $payload['message'],
        ]));

        return response()->json([
            'message' => 'Contact message sent successfully.',
            'whatsapp_url' => "https://wa.me/{$whatsAppNumber}?text={$waText}",
        ]);
    }
}
