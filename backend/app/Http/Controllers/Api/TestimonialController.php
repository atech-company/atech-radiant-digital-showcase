<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TestimonialResource;
use App\Models\Testimonial;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index(): JsonResponse
    {
        $testimonials = Testimonial::query()
            ->where('is_approved', true)
            ->latest()
            ->get();

        return response()->json([
            'testimonials' => TestimonialResource::collection($testimonials),
        ]);
    }

    public function store(Request $request): JsonResponse
    {
        $payload = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['nullable', 'email', 'max:255'],
            'role' => ['nullable', 'string', 'max:255'],
            'avatar' => ['nullable', 'url', 'max:2048'],
            'content' => ['required', 'string', 'max:3000'],
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
        ]);

        $testimonial = Testimonial::query()->create($payload);

        return response()->json([
            'message' => 'Feedback submitted and pending approval.',
            'testimonial' => new TestimonialResource($testimonial),
        ], 201);
    }

    public function mine(Request $request): JsonResponse
    {
        $email = (string) $request->query('email', '');

        if ($email === '') {
            return response()->json(['testimonials' => []]);
        }

        $testimonials = Testimonial::query()
            ->where('email', $email)
            ->latest()
            ->get();

        return response()->json([
            'testimonials' => TestimonialResource::collection($testimonials),
        ]);
    }
}
