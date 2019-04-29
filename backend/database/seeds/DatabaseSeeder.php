<?php

use Illuminate\Database\Seeder;

use App\User;
use App\StudySet;
use App\StudyClass;
use Elasticsearch\Common\Exceptions\Missing404Exception;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(StudyClassesTableSeeder::class);
        $this->call(StudySetsTableSeeder::class);
        $this->call(TermsTableSeeder::class);

        $this->index();
    }

    /**
     * Add all records to Elasticsearch index
     */
    public function index()
    {
        try {
            User::deleteIndex();
            User::createIndex();
        } catch (Missing404Exception $exception) {
            User::createIndex();
        }

        User::putMapping($ignoreConflicts = true);
        User::addAllToIndex();
        StudyClass::putMapping($ignoreConflicts = true);
        StudyClass::addAllToIndex();
        StudySet::putMapping($ignoreConflicts = true);
        StudySet::addAllToIndex();
    }
}
