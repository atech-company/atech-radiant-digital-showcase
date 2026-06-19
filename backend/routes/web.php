<?php

use App\Http\Controllers\Auth\SocialAuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('auth')->group(function (): void {
    Route::get('/{provider}/redirect', [SocialAuthController::class, 'redirect']);
    Route::get('/{provider}/callback', [SocialAuthController::class, 'callback']);
});
