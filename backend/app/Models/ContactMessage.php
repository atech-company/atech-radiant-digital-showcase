<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactMessage extends Model
{
    protected $fillable = [
        'name',
        'email',
        'phone',
        'company',
        'service',
        'budget',
        'message',
        'is_resolved',
    ];

    protected function casts(): array
    {
        return [
            'is_resolved' => 'boolean',
        ];
    }
}
