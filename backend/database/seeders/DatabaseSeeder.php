<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::query()->updateOrCreate([
            'email' => 'admin@atech.local',
        ], [
            'name' => 'Atech Admin',
            'password' => Hash::make('Atech@12345'),
            'is_admin' => true,
        ]);

        $this->call(CmsSeeder::class);
    }
}
