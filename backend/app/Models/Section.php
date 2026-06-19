<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = [
        'page_id',
        'key',
        'name',
        'position',
        'is_published',
        'payload',
    ];

    protected function casts(): array
    {
        return [
            'payload' => 'array',
            'is_published' => 'boolean',
        ];
    }

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }
}
