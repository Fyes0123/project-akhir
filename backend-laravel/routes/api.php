<?php

use App\Http\Controllers\UserController;

Route::post('/register', [UserController::class, 'register']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/login', [UserController::class, 'login']);