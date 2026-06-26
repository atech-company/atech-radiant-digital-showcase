<?php

use App\Http\Controllers\Api\MediaController;
use App\Http\Controllers\Api\PageController;
use App\Http\Controllers\Api\ProjectController;
use App\Http\Controllers\Api\SiteSettingController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ChatbotController;
use App\Http\Controllers\Api\TestimonialController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (): void {
    Route::get('/media/{path}', [MediaController::class, 'show'])->where('path', '.*');
    Route::get('/pages/{slug}', [PageController::class, 'showBySlug']);
    Route::get('/projects', [ProjectController::class, 'index']);
    Route::get('/projects/{slug}', [ProjectController::class, 'showBySlug']);
    Route::get('/settings', [SiteSettingController::class, 'index']);
    Route::get('/testimonials', [TestimonialController::class, 'index']);
    Route::post('/testimonials', [TestimonialController::class, 'store']);
    Route::get('/testimonials/mine', [TestimonialController::class, 'mine']);
    Route::post('/contact', [ContactController::class, 'send']);
    Route::post('/chatbot', [ChatbotController::class, 'respond']);
});
