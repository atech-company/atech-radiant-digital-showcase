<?php

namespace App\Filament\Resources\AppSettings\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section as SchemaSection;
use Filament\Schemas\Schema;

class AppSettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                SchemaSection::make('AI Providers')
                    ->components([
                        Select::make('ai_provider')
                            ->options([
                                'openai' => 'OpenAI',
                                'gemini' => 'Gemini',
                                'deepseek' => 'DeepSeek',
                            ]),
                        TextInput::make('openai_api_key')
                            ->password()
                            ->revealable(),
                        TextInput::make('gemini_api_key')
                            ->password()
                            ->revealable(),
                        TextInput::make('deepseek_api_key')
                            ->password()
                            ->revealable(),
                    ]),
                SchemaSection::make('SMTP & Mail')
                    ->components([
                        TextInput::make('mail_mailer')
                            ->default('smtp'),
                        TextInput::make('mail_host'),
                        TextInput::make('mail_port')
                            ->numeric(),
                        TextInput::make('mail_username'),
                        TextInput::make('mail_password')
                            ->password()
                            ->revealable(),
                        TextInput::make('mail_encryption'),
                        TextInput::make('mail_from_address')
                            ->email(),
                        TextInput::make('mail_from_name'),
                    ]),
                SchemaSection::make('Contact Routing')
                    ->components([
                        TextInput::make('contact_receiver_email')
                            ->email(),
                        TextInput::make('contact_whatsapp_number'),
                    ]),
            ]);
    }
}
