<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'John Doe',
            'username' => 'user1997',
            'profile_picture_url' => '',
            'language' => 'EN',
            'password' => bcrypt('secret'),
        ]);
    }
}
