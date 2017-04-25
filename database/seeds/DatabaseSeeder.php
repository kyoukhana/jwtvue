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
            'name' =>'vue',
            'lastname'=>'auth',
            'email' => 'vueauth@gmail.com',
            'lang' => 'en',
            'activated' => '1',
            'role'=>'admin',
            'password' => bcrypt('vue123')])->save();


       // $this->call(UsersTableSeeder::class);
    }
}
