<?php

use Illuminate\Database\Seeder;
use App\Enums\ClassPermission;
use App\Enums\ClassRole;

class StudyClassesTableSeeder extends Seeder
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

        DB::table('study_classes')->insert([
            'name' => 'My First Class',
            'description' => 'English learning class',
            'permission' => ClassPermission::ALLOW,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('user_classes')->insert([
            'user_id' => 1,
            'class_id' => 1,
            'role' => ClassRole::OWNER
        ]);
    }
}
