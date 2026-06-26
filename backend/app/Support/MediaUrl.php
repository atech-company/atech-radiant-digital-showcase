<?php

namespace App\Support;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MediaUrl
{
    public static function toPublicUrl(?string $value, Request $request): ?string
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
     * @param  array<string, mixed>  $value
     * @return array<string, mixed>
     */
    public static function transformBranding(array $value, Request $request): array
    {
        foreach (['logoIcon', 'logo', 'favicon'] as $field) {
            if (array_key_exists($field, $value)) {
                $value[$field] = self::toPublicUrl(is_string($value[$field]) ? $value[$field] : null, $request);
            }
        }

        return $value;
    }
}
