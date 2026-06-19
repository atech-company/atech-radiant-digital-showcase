<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $sections = $this->sections
            ->where('is_published', true)
            ->sortBy('position')
            ->values();

        return [
            'slug' => $this->slug,
            'title' => $this->title,
            'seoTitle' => $this->seo_title,
            'seoDescription' => $this->seo_description,
            'sections' => $sections->map(
                fn ($section): array => [
                    'key' => $section->key,
                    'name' => $section->name,
                    'position' => $section->position,
                    'payload' => $section->payload ?? [],
                ]
            ),
        ];
    }
}
