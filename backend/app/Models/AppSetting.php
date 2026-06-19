<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppSetting extends Model
{
    protected $fillable = [
        'ai_provider',
        'openai_api_key',
        'gemini_api_key',
        'deepseek_api_key',
        'mail_mailer',
        'mail_host',
        'mail_port',
        'mail_username',
        'mail_password',
        'mail_encryption',
        'mail_from_address',
        'mail_from_name',
        'contact_receiver_email',
        'contact_whatsapp_number',
    ];
}
