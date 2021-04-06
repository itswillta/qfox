<?php

use Illuminate\Database\Seeder;
use App\Enums\StudySetPermission;
use App\Enums\StudySetRole;

class StudySetsTableSeeder extends Seeder
{
    private $study_set_count = 1;

    /**
     * Insert a new study set to database
     *
     * @param $title
     * @param $view_permission
     * @param $edit_permission
     * @param $owner_id
     * @param array $learner_ids
     * @param string $dateModifier
     * @throws Exception
     */
    public function insertStudySet($title, $view_permission, $edit_permission, $owner_id, $learner_ids = [], $dateModifier = '')
    {
        $timezone = new DateTimeZone('Asia/Ho_Chi_Minh');
        $date = new DateTime('now', $timezone);

        if ($dateModifier) {
            $date->modify($dateModifier);
        }

        DB::table('study_sets')->insert([
            'title' => $title,
            'view_permission' => $view_permission,
            'edit_permission' => $edit_permission,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('user_study_sets')->insert([
            'user_id' => $owner_id,
            'study_set_id' => $this->study_set_count,
            'role' => StudySetRole::OWNER
        ]);

        foreach ($learner_ids as $learner_id) {
            DB::table('user_study_sets')->insert([
                'user_id' => $learner_id,
                'study_set_id' => $this->study_set_count,
                'role' => StudySetRole::LEARNER
            ]);
        }

        $this->study_set_count++;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        $this->insertStudySet('Basic English Vocabulary - Part 1', StudySetPermission::EVERYONE, StudySetPermission::JUST_ME, 1, [], '-3 months');
        $this->insertStudySet('Basic English Vocabulary - Part 2', StudySetPermission::LOGGED_IN_USERS, StudySetPermission::LOGGED_IN_USERS, 1, [], '-2 months');
        $this->insertStudySet('Basic English Vocabulary - Part 3', StudySetPermission::JUST_ME, StudySetPermission::JUST_ME, 1, [], 'first day of last month');
        $this->insertStudySet('Basic English Vocabulary - Part 4', StudySetPermission::EVERYONE, StudySetPermission::LOGGED_IN_USERS, 1, [], '-8 days');
        $this->insertStudySet('Basic English Vocabulary - Part 5', StudySetPermission::EVERYONE, StudySetPermission::LOGGED_IN_USERS, 1);

        $this->insertStudySet('User0 First Public Study Set Ever', StudySetPermission::EVERYONE, StudySetPermission::LOGGED_IN_USERS, 2, [1], '-2 years');
        $this->insertStudySet('User0 Public Study Set 0', StudySetPermission::EVERYONE, StudySetPermission::LOGGED_IN_USERS, 2, [1], '-1 year');
        $this->insertStudySet('User0 Public Study Set 1', StudySetPermission::EVERYONE, StudySetPermission::LOGGED_IN_USERS, 2, [1], '-2 months');
        $this->insertStudySet('User0 Private Study Set 1', StudySetPermission::LOGGED_IN_USERS, StudySetPermission::LOGGED_IN_USERS, 2, [1], '-1 day');
        $this->insertStudySet('User0 Private Study Set 2', StudySetPermission::LOGGED_IN_USERS, StudySetPermission::LOGGED_IN_USERS, 2, [1], '-2 days');

        $this->insertStudySet('User94 Public Study Set 0', StudySetPermission::EVERYONE, StudySetPermission::LOGGED_IN_USERS, 3, [1]);
    }
}
