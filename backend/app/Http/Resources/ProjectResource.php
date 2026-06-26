<?php

namespace App\Http\Resources;

use App\Support\MediaUrl;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
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
            'cover' => MediaUrl::toPublicUrl($this->cover, $request),
            'gallery' => array_values(array_filter(array_map(
                fn (string $path): ?string => MediaUrl::toPublicUrl($path, $request),
                $gallery
            ))),
            'tags' => $this->tags ?? [],
            'body' => $this->body,
            'position' => $this->position,
        ];
    }
}
