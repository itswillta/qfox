<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserStudySetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_study_sets', function (Blueprint $table) {
            $table->primary(['user_id', 'study_set_id']);
            $table->unsignedBigInteger('user_id'); // user_id: bigint(20)
            $table->unsignedBigInteger('study_set_id'); // study_set_id: bigint(20)
            $table->string('role'); // role: varchar(255)
            $table->integer('match_seconds')->nullable(); // match_seconds: int(11)

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('study_set_id')->references('id')->on('study_sets');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_study_sets');
    }
}
