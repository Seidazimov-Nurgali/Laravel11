<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::firstOrCreate([
            'name' => 'create product'
        ]);

        Permission::firstOrCreate([
            'name' => 'read product'
        ]);

        Permission::firstOrCreate([
            'name' => 'update product'
        ]);

        Permission::firstOrCreate([
            'name' => 'delete product'
        ]);

        $admin = Role::where('name', 'admin')->first();
        $admin->givePermissionTo([
            'create product',
            'read product',
            'update product',
            'delete product',
        ]);

        $manager = Role::where('name', 'manager')->first();
        $manager->givePermissionTo([
            'create product',
            'read product',
            'update product',
        ]);

        $user = Role::where('name', 'user')->first();
        $user->givePermissionTo([
            'read product',
        ]);

//        Role::create(['name' => 'User']);
//        Role::create(['name' => 'Manager']);
//        Role::create(['name' => 'Admin']);
    }
}
