<?php

namespace App\Filament\Resources\ContactMessages\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class ContactMessageForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required()
                    ->maxLength(255),
                TextInput::make('email')
                    ->required()
                    ->email()
                    ->maxLength(255),
                TextInput::make('phone')
                    ->maxLength(100),
                TextInput::make('company')
                    ->maxLength(255),
                TextInput::make('service')
                    ->maxLength(255),
                TextInput::make('budget')
                    ->maxLength(255),
                Textarea::make('message')
                    ->required(),
                Toggle::make('is_resolved')
                    ->default(false),
            ]);
    }
}
