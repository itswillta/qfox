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
        $date = new DateTime();

        DB::table('users')->insert([
            'name' => 'John Doe',
            'username' => 'user1997',
            'profile_picture_url' => '',
            'language' => 'en',
            'password' => bcrypt('secret'),
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);
    }
}
