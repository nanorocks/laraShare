<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(AppController::class)->middleware(['auth'])->group(function () {
    Route::get('/', 'home');
    Route::get('/home', 'home')->name('home');
    Route::get('/history', 'history')->name('history');
    Route::get('/analytics', 'analytics')->name('analytics');
    Route::get('/notifications', 'notifications')->name('notifications');
});
