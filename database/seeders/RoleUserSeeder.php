<?php

namespace Database\Seeders;

use App\Models\RoleUser;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 11; $i++){
            $role_id = $i == 1 ? 3 : 1;
            RoleUser::create([
                'role_id' => $role_id,
                'user_id' => $i
            ]);
        }
    }
}
