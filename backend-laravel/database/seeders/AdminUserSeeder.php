<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'full_name' => 'Admin',
                'password' => 'admin123',
                'phone_number' => '0800000001',
                'role' => 'admin',
                'business_name' => null,
                'business_type' => null,
                'address' => 'System Address',
            ]
        );

        User::updateOrCreate(
            ['email' => 'superadmin@example.com'],
            [
                'full_name' => 'Super Admin',
                'password' => 'superadmin123',
                'phone_number' => '0800000002',
                'role' => 'superadmin',
                'business_name' => null,
                'business_type' => null,
                'address' => 'System Address',
            ]
        );
    }
}
