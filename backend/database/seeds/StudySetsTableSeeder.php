<?php

use Illuminate\Database\Seeder;
use App\Enums\StudySetPermission;
use App\Enums\StudySetRole;

class StudySetsTableSeeder extends Seeder
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

        DB::table('study_sets')->insert([
            'title' => 'Basic English Vocabulary - Part 1',
            'view_permission' => StudySetPermission::EVERYONE,
            'edit_permission' => StudySetPermission::JUST_ME,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('user_study_sets')->insert([
            'user_id' => 1,
            'study_set_id' => 1,
            'role' => StudySetRole::OWNER
        ]);

        DB::table('study_sets')->insert([
            'title' => 'Basic English Vocabulary - Part 2',
            'view_permission' => StudySetPermission::LOGGED_IN_USERS,
            'edit_permission' => StudySetPermission::LOGGED_IN_USERS,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('user_study_sets')->insert([
            'user_id' => 1,
            'study_set_id' => 2,
            'role' => StudySetRole::OWNER
        ]);

        DB::table('study_sets')->insert([
            'title' => 'Basic English Vocabulary - Part 3',
            'view_permission' => StudySetPermission::JUST_ME,
            'edit_permission' => StudySetPermission::JUST_ME,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('user_study_sets')->insert([
            'user_id' => 1,
            'study_set_id' => 3,
            'role' => StudySetRole::OWNER
        ]);

        DB::table('study_sets')->insert([
            'title' => 'Draft Test Study Set',
            'view_permission' => StudySetPermission::EVERYONE,
            'edit_permission' => StudySetPermission::LOGGED_IN_USERS,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('user_study_sets')->insert([
            'user_id' => 1,
            'study_set_id' => 4,
            'role' => StudySetRole::OWNER
        ]);
    }
}
