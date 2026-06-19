<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PageResource;
use App\Models\Page;
use Illuminate\Http\JsonResponse;

class PageController extends Controller
{
    public function showBySlug(string $slug): JsonResponse
    {
        $page = Page::query()
            ->where('slug', $slug)
            ->where('is_published', true)
            ->with('sections')
            ->firstOrFail();

        return response()->json(new PageResource($page));
    }
}
