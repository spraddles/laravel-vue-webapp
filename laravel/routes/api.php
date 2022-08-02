<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// authentication
Route::prefix('auth')->group(function() {

    // login
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');

    // logout
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');

    // reset password: request
    Route::post('/password-reset', [AuthController::class, 'passwordResetEmailRequest'])->name('auth.password.reset');

    // reset password: set
    // Route::get('/password-reset/{token}', [AuthController::class, 'passwordReset'])->name('auth.password.reset');

});

// user
Route::prefix('user')->group(function() {

    // me
    Route::post('/me', [UserController::class, 'get'])->name('user.me');

    // profile
    Route::patch('/update/{user}', [UserController::class, 'update'])->name('user.update');

});