<?php

namespace App\Filament\Resources\Sections\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class SectionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('page_id')
                    ->relationship('page', 'title')
                    ->required(),
                TextInput::make('key')
                    ->required()
                    ->maxLength(255),
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('position')
                    ->numeric()
                    ->default(0)
                    ->required(),
                Toggle::make('is_published')
                    ->default(true),
                Textarea::make('payload')
                    ->label('Payload (JSON)')
                    ->rows(16)
                    ->helperText('Enter valid JSON object. Example: {"heroTitle":"About","heroDescription":"..."}')
                    ->formatStateUsing(fn ($state): string => json_encode($state ?? new \stdClass(), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) ?: '{}')
                    ->dehydrateStateUsing(function ($state): array {
                        if (! is_string($state) || trim($state) === '') {
                            return [];
                        }

                        $decoded = json_decode($state, true);

                        return is_array($decoded) ? $decoded : [];
                    }),
            ]);
    }
}
