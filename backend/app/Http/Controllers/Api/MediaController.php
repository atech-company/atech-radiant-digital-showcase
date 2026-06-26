<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class MediaController extends Controller
{
    public function show(Request $request, string $path): BinaryFileResponse
    {
        $normalized = str_replace(['..', '\\'], ['', '/'], $path);
        $fullPath = storage_path('app/public/' . ltrim($normalized, '/'));

        if (! is_file($fullPath)) {
            abort(404);
        }

        return response()->file($fullPath, [
            'Cache-Control' => 'public, max-age=31536000, immutable',
        ]);
    }
}
