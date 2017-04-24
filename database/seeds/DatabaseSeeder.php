<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        factory(App\User::class)->make ([
            'name' =>'Kevin',
            'lastname'=>'Youkhana',
            'email' => 'kyoukhana@gmail.com',
            'lang' => 'en',
            'role_id'=>'1',
            'password' => bcrypt('EmuKrg2012')])->save();


       // $this->call(UsersTableSeeder::class);
    }
}
