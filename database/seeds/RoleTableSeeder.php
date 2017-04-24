<?php

use Illuminate\Database\Seeder;
use App\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'id'            => 1,
            'name'          => 'Administrator',
            'description'   => 'Full access to everything on the site GOD level'
        ]);
        Role::create([
            'id'            => 2,
            'name'          => 'Practitioner',
            'description'   => 'Ability to create new clients and or edit and update any existing ones.'
        ]);
        Role::create([
            'id'            => 3,
            'name'          => 'Client',
            'description'   => 'Ablity to only manage his or her account'
        ]);

        Role::create([
            'id'            => 4,
            'name'          => 'Disable Account',
            'description'   => 'This is used to disable a accout'
        ]);
    }
}
