<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id'); // id: bigint(20)
            $table->string('name'); // name: varchar(255)
            $table->string('username')->unique()->nullable(); // username: varchar(255)
            $table->string('password', 255)->nullable(); // password: varchar(255)
            $table->string('profile_picture_url'); // profile_picture_url: varchar(255)
            $table->string('language', 2); // language: varchar(2)
            $table->string('google_id', 64)->nullable(); // google_id: varchar(64)
            $table->string('facebook_id', 64)->nullable(); // facebook_id: varchar(64)
            $table->timestamps(); // created_at & updated_at: nullable timestamp
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
