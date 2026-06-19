<?php

namespace App\Filament\Resources\Pages\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class PageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('slug')
                    ->required()
                    ->maxLength(255),
                TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                TextInput::make('seo_title')
                    ->maxLength(255),
                Textarea::make('seo_description'),
                Toggle::make('is_published')
                    ->default(true),
            ]);
    }
}
