<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\JsonResponse;

class SiteSettingController extends Controller
{
    public function index(): JsonResponse
    {
        $settings = SiteSetting::query()
            ->get()
            ->mapWithKeys(fn (SiteSetting $setting): array => [$setting->key => $setting->value ?? []]);

        return response()->json([
            'settings' => $settings,
        ]);
    }
}
