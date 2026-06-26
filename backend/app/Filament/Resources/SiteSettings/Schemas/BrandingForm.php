<?php

namespace App\Filament\Resources\SiteSettings\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Hidden;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section as SchemaSection;
use Filament\Schemas\Schema;

class BrandingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Hidden::make('key')
                    ->default('global')
                    ->dehydrated(),
                SchemaSection::make('Site Identity')
                    ->description('Logo and icon shown in the site header, footer, browser tab, and social previews.')
                    ->components([
                        TextInput::make('value.siteName')
                            ->label('Site Name')
                            ->required()
                            ->maxLength(255)
                            ->helperText('Displayed beside the logo when no logo image is uploaded.'),
                        FileUpload::make('value.logoIcon')
                            ->label('Icon Beside Logo')
                            ->image()
                            ->disk('public')
                            ->directory('branding')
                            ->helperText('Small mark shown to the left of the logo in the navigation.'),
                        FileUpload::make('value.logo')
                            ->label('Site Logo')
                            ->image()
                            ->disk('public')
                            ->directory('branding')
                            ->helperText('Main logo image for site identity (header, footer, SEO).'),
                        FileUpload::make('value.favicon')
                            ->label('Favicon')
                            ->image()
                            ->disk('public')
                            ->directory('branding')
                            ->helperText('Browser tab icon. Falls back to the site logo when empty.'),
                    ]),
                SchemaSection::make('Contact Details')
                    ->components([
                        TextInput::make('value.contactEmail')
                            ->label('Contact Email')
                            ->email()
                            ->maxLength(255),
                        TextInput::make('value.phone')
                            ->label('Phone')
                            ->tel()
                            ->maxLength(255),
                    ]),
            ]);
    }
}
