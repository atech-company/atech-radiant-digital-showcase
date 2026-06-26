<?php

namespace App\Support;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class MediaUrl
{
    public static function toPublicUrl(?string $value, ?Request $request = null): ?string
    {
        if (! is_string($value) || $value === '') {
            return null;
        }

        if (str_starts_with($value, 'http://') || str_starts_with($value, 'https://')) {
            return self::normalizeExistingUrl($value);
        }

        $normalized = ltrim($value, '/');

        if (Str::startsWith($normalized, 'public/')) {
            $normalized = Str::after($normalized, 'public/');
        }

        if (Str::startsWith($normalized, 'storage/')) {
            $normalized = Str::after($normalized, 'storage/');
        }

        $baseUrl = rtrim((string) config('app.url'), '/');

        return $baseUrl . '/api/v1/media/' . ltrim($normalized, '/');
    }

    private static function normalizeExistingUrl(string $value): string
    {
        $storagePath = '/storage/';
        $storagePos = strpos($value, $storagePath);

        if ($storagePos === false) {
            return $value;
        }

        $relativePath = ltrim(substr($value, $storagePos + strlen($storagePath)), '/');
        $baseUrl = rtrim((string) config('app.url'), '/');

        return $baseUrl . '/api/v1/media/' . $relativePath;
    }

    /**
     * @param  array<string, mixed>  $value
     * @return array<string, mixed>
     */
    public static function transformBranding(array $value, ?Request $request = null): array
    {
        foreach (['logoIcon', 'logo', 'favicon'] as $field) {
            if (! array_key_exists($field, $value)) {
                continue;
            }

            $raw = $value[$field];

            if (is_array($raw)) {
                $raw = $raw[0] ?? null;
            }

            $value[$field] = self::toPublicUrl(is_string($raw) ? $raw : null, $request);
        }

        return $value;
    }
}
