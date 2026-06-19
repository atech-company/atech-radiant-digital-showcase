<?php

namespace App\Filament\Resources\Users\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class UserForm
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
                    ->required()
                    ->unique(ignoreRecord: true)
                    ->maxLength(255),
                TextInput::make('password')
                    ->password()
                    ->revealable()
                    ->dehydrated(fn (?string $state): bool => filled($state))
                    ->required(fn (string $operation): bool => $operation === 'create')
                    ->maxLength(255)
                    ->helperText('Leave blank when editing to keep the current password.'),
                Toggle::make('is_admin')
                    ->label('Admin access')
                    ->helperText('Admins can sign in to this CMS panel.')
                    ->default(false),
                TextInput::make('avatar')
                    ->label('Avatar URL')
                    ->url()
                    ->maxLength(2048),
                TextInput::make('provider')
                    ->label('OAuth provider')
                    ->disabled()
                    ->dehydrated(false),
                TextInput::make('provider_id')
                    ->label('OAuth provider ID')
                    ->disabled()
                    ->dehydrated(false),
            ]);
    }
}
