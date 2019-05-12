<?php

use Illuminate\Database\Seeder;
use App\Enums\ClassPermission;
use App\Enums\ClassRole;

class TermsTableSeeder extends Seeder
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

        DB::table('terms')->insert([
            'term' => 'angry',
            'definition' => 'tức giận',
            'is_starred' => 0,
            'study_set_id' => 1,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('terms')->insert([
            'term' => 'happy',
            'definition' => 'hạnh phúc',
            'is_starred' => 0,
            'study_set_id' => 1,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('terms')->insert([
            'term' => 'funny',
            'definition' => 'buồn cười',
            'is_starred' => 0,
            'study_set_id' => 2,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('terms')->insert([
            'term' => 'depressed',
            'definition' => 'buồn rầu',
            'is_starred' => 0,
            'study_set_id' => 2,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('terms')->insert([
            'term' => 'strength',
            'definition' => 'điểm mạnh',
            'is_starred' => 0,
            'study_set_id' => 3,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);

        DB::table('terms')->insert([
            'term' => 'weakness',
            'definition' => 'điểm yếu',
            'is_starred' => 0,
            'study_set_id' => 3,
            'created_at' => $date->format('Y-m-d H:i:s'),
            'updated_at' => $date->format('Y-m-d H:i:s')
        ]);
    }
}
