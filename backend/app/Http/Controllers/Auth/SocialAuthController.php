<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    /**
     * @var array<int, string>
     */
    private const ALLOWED_PROVIDERS = ['google', 'github'];

    public function redirect(string $provider): RedirectResponse
    {
        abort_unless(in_array($provider, self::ALLOWED_PROVIDERS, true), 404);

        return Socialite::driver($provider)->stateless()->redirect();
    }

    public function callback(string $provider): RedirectResponse
    {
        abort_unless(in_array($provider, self::ALLOWED_PROVIDERS, true), 404);

        try {
            $socialUser = Socialite::driver($provider)->stateless()->user();
        } catch (\Throwable) {
            return redirect($this->frontendUrl('/login?social=error'));
        }

        $email = $socialUser->getEmail() ?: sprintf('%s_%s@%s.local', $provider, $socialUser->getId(), $provider);

        $user = User::query()->updateOrCreate(
            ['email' => $email],
            [
                'name' => $socialUser->getName() ?: $socialUser->getNickname() ?: 'Atech User',
                'provider' => $provider,
                'provider_id' => $socialUser->getId(),
                'avatar' => $socialUser->getAvatar(),
                'password' => Str::password(32),
            ]
        );

        $params = http_build_query([
            'social' => 'success',
            'provider' => $provider,
            'name' => $user->name,
            'email' => $user->email,
            'avatar' => $user->avatar,
        ]);

        return redirect($this->frontendUrl("/login?{$params}"));
    }

    private function frontendUrl(string $path): string
    {
        return rtrim((string) config('app.frontend_url', 'http://127.0.0.1:5173'), '/') . $path;
    }
}
