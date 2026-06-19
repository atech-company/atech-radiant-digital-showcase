<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ProjectForm
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
                Textarea::make('summary')
                    ->required(),
                FileUpload::make('cover')
                    ->label('Cover Image')
                    ->image()
                    ->disk('public')
                    ->directory('projects/covers'),
                FileUpload::make('gallery')
                    ->label('Gallery Images')
                    ->image()
                    ->multiple()
                    ->reorderable()
                    ->disk('public')
                    ->directory('projects/gallery'),
                TagsInput::make('tags'),
                Textarea::make('body'),
                TextInput::make('position')
                    ->numeric()
                    ->default(0)
                    ->required(),
                Toggle::make('is_published')
                    ->default(true),
            ]);
    }
}
