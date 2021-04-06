<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        $date = new DateTime();

        DB::table('users')->insert([
            'name' => 'John Doe 1997',
            'username' => 'user1997',
            'profile_picture_url' => 'http://i63.tinypic.com/fymsnt.png',
            'language' => 'en',
            'password' => bcrypt('secret'),
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('users')->insert([
            'name' => 'Easter Egg 0',
            'username' => 'user0',
            'language' => 'en',
            'password' => bcrypt('secret'),
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('users')->insert([
            'name' => 'Green Monster 94',
            'username' => 'user94',
            'language' => 'en',
            'profile_picture_url' => 'https://freedesignfile.com/upload/2018/09/Cartoon-monster-face-background-vector-06.jpg',
            'password' => bcrypt('secret'),
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);
    }
}
