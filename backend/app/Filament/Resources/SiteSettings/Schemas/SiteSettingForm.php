<?php

namespace App\Filament\Resources\SiteSettings\Schemas;

use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SiteSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('key')
                    ->required()
                    ->maxLength(255),
                KeyValue::make('value')
                    ->addable()
                    ->deletable()
                    ->reorderable(),
            ]);
    }
}
