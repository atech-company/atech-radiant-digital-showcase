<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Illuminate\Http\JsonResponse;

class ProjectController extends Controller
{
    public function index(): JsonResponse
    {
        $projects = Project::query()
            ->where('is_published', true)
            ->orderBy('position')
            ->get();

        return response()->json([
            'projects' => ProjectResource::collection($projects),
        ]);
    }

    public function showBySlug(string $slug): ProjectResource
    {
        $project = Project::query()
            ->where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return new ProjectResource($project);
    }
}
