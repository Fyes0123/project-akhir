<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
{
    try {

        $validated = $request->validate([
             'fullName' => 'required|string|max:255',
             'email' => 'required|email|unique:users,email',
             'password' => 'required|string|min:8',
             'phone' => 'required|string|max:20',
             'business' => 'nullable|string|max:255',
             'description' => 'nullable|string',
             'address' => 'required|string',
        ]);

        $user = User::create([
            'full_name' => $validated['fullName'],
            'email' => $validated['email'],
            'password' => $validated['password'],
            'phone_number' => $validated['phone'],
            'role' => 'borrower',
            'business_name' => $validated['business'],
            'business_type' => $validated['description'] ?? null,
            'address' => $validated['address'],
        ]);

        return response()->json([
            'message' => 'Register berhasil',
            'user' => $user
        ], 201);

    } catch (\Exception $e) {

        return response()->json([
            'error' => $e->getMessage(),
            'file' => $e->getFile(),
            'line' => $e->getLine()
        ], 500);

    }
}

public function show($id)
{
    $user = User::find($id);

    if (!$user) {
        return response()->json([
            'message' => 'User not found'
        ], 404);
    }

    return response()->json($user);
}
}
