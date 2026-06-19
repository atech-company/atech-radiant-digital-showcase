<?php

namespace App\Providers;

use App\Models\AppSetting;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        try {
            $settings = AppSetting::query()->first();
        } catch (\Throwable) {
            $settings = null;
        }

        if (! $settings) {
            return;
        }

        config([
            'services.openai.key' => $settings->openai_api_key ?: env('OPENAI_API_KEY'),
            'services.gemini.key' => $settings->gemini_api_key ?: env('GEMINI_API_KEY'),
            'services.deepseek.key' => $settings->deepseek_api_key ?: env('DEEPSEEK_API_KEY'),
            'services.ai.provider' => $settings->ai_provider ?: env('AI_PROVIDER'),
        ]);

        if ($settings->mail_mailer || $settings->mail_host || $settings->mail_port) {
            config([
                'mail.default' => $settings->mail_mailer ?: env('MAIL_MAILER', 'smtp'),
                'mail.mailers.smtp.host' => $settings->mail_host ?: env('MAIL_HOST'),
                'mail.mailers.smtp.port' => $settings->mail_port ?: env('MAIL_PORT', 587),
                'mail.mailers.smtp.username' => $settings->mail_username ?: env('MAIL_USERNAME'),
                'mail.mailers.smtp.password' => $settings->mail_password ?: env('MAIL_PASSWORD'),
                'mail.mailers.smtp.scheme' => $settings->mail_encryption ?: env('MAIL_ENCRYPTION'),
                'mail.from.address' => $settings->mail_from_address ?: env('MAIL_FROM_ADDRESS'),
                'mail.from.name' => $settings->mail_from_name ?: env('MAIL_FROM_NAME'),
            ]);
        }

        config([
            'services.contact.receiver_email' => $settings->contact_receiver_email ?: env('CONTACT_RECEIVER_EMAIL'),
            'services.contact.whatsapp_number' => $settings->contact_whatsapp_number ?: env('CONTACT_WHATSAPP_NUMBER', '76349746'),
        ]);
    }
}
