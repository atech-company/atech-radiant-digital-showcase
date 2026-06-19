<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class TestimonialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('email')
                    ->email()
                    ->maxLength(255),
                TextInput::make('role')
                    ->maxLength(255),
                TextInput::make('avatar')
                    ->label('Avatar URL')
                    ->url()
                    ->maxLength(2048),
                Textarea::make('content')
                    ->required(),
                TextInput::make('rating')
                    ->numeric()
                    ->minValue(1)
                    ->maxValue(5)
                    ->default(5)
                    ->required(),
                Toggle::make('is_approved')
                    ->default(false),
            ]);
    }
}
