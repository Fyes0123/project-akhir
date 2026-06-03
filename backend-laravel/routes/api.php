<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoanApplicationController;

Route::post('/register', [UserController::class, 'register']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/loan-application',[LoanApplicationController::class, 'store']);
Route::get('/loan-applications', [LoanApplicationController::class, 'index']);
Route::patch('/loan-applications/{id}', [LoanApplicationController::class, 'update']);