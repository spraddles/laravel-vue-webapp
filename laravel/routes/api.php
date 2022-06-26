<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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
    Route::post('/login', [AuthController::class, 'login'])->name('login');

    // logout
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // reset password: request
    Route::post('/password-reset', [AuthController::class, 'passwordResetEmailRequest'])->name('password.reset');

    // reset password: set
    // Route::get('/password-reset/{token}', [AuthController::class, 'passwordReset'])->name('password.reset');

});
