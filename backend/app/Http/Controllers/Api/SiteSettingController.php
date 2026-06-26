<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use App\Support\MediaUrl;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SiteSettingController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $settings = SiteSetting::query()
            ->get()
            ->mapWithKeys(function (SiteSetting $setting) use ($request): array {
                $value = $setting->value ?? [];

                if ($setting->key === 'global') {
                    $value = MediaUrl::transformBranding($value, $request);
                }

                return [$setting->key => $value];
            });

        return response()->json([
            'settings' => $settings,
        ]);
    }
}
