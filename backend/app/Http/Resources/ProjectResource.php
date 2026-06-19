<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ProjectResource extends JsonResource
{
    private function toPublicMediaUrl(?string $value, Request $request): ?string
    {
        if (! is_string($value) || $value === '') {
            return null;
        }

        if (str_starts_with($value, 'http://') || str_starts_with($value, 'https://')) {
            return $value;
        }

        $normalized = ltrim($value, '/');

        if (Str::startsWith($normalized, 'public/')) {
            $normalized = Str::after($normalized, 'public/');
        }

        if (Str::startsWith($normalized, 'storage/')) {
            $normalized = Str::after($normalized, 'storage/');
        }

        return rtrim($request->getSchemeAndHttpHost(), '/') . '/storage/' . ltrim($normalized, '/');
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $gallery = collect($this->gallery ?? [])
            ->filter(fn ($path): bool => is_string($path) && $path !== '')
            ->values()
            ->all();

        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'summary' => $this->summary,
            'publishedAt' => $this->created_at?->toIso8601String(),
            'cover' => $this->toPublicMediaUrl($this->cover, $request),
            'gallery' => array_values(array_filter(array_map(
                fn (string $path): ?string => $this->toPublicMediaUrl($path, $request),
                $gallery
            ))),
            'tags' => $this->tags ?? [],
            'body' => $this->body,
            'position' => $this->position,
        ];
    }
}
