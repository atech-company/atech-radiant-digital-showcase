<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'summary',
        'cover',
        'gallery',
        'tags',
        'body',
        'position',
        'is_published',
    ];

    protected function casts(): array
    {
        return [
            'tags' => 'array',
            'gallery' => 'array',
            'is_published' => 'boolean',
        ];
    }
}
