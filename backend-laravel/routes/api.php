<?php

use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return response()->json([
        'message' => 'GET works'
    ]);
});

Route::post('/test', function () {
    return response()->json([
        'message' => 'POST works'
    ]);
});