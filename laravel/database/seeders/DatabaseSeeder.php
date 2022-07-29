<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\UserMeta;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        User::factory(10)->has(UserMeta::factory())->create();

        User::factory(1)->has(UserMeta::factory())->create([
            'email' => 'test@test.com',
            'password' => bcrypt('test'),
            'email_verified_at' => '2021-08-08 00:35:32'
        ]);
            
    }
}