<?php

namespace App\Providers;

use App\Observers\StudyClassObserver;
use App\Observers\StudySetObserver;
use App\Observers\UserObserver;
use App\StudyClass;
use App\StudySet;
use App\User;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        StudySet::observe(StudySetObserver::class);
        StudyClass::observe(StudyClassObserver::class);
    }
}
