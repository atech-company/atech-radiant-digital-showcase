<?php

namespace App\Filament\Resources\AppSettings\Tables;

use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class AppSettingsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('ai_provider')
                    ->label('AI Provider'),
                TextColumn::make('mail_host')
                    ->label('SMTP Host'),
                TextColumn::make('mail_from_address')
                    ->label('From Email'),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->recordActions([
                EditAction::make(),
            ]);
    }
}
