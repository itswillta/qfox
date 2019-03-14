<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLiveSessionDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('live_session_details', function (Blueprint $table) {
            $table->primary(['session_id', 'user_id', 'term_id']);
            $table->unsignedBigInteger('session_id'); // session_id: bigint(20)
            $table->unsignedBigInteger('user_id'); // user_id: bigint(20)
            $table->unsignedBigInteger('term_id'); // term_id: bigint(20)
            $table->string('user_answer', 1); // user_answer: varchar(1)
            $table->integer('answer_time'); // answer_time: int(11)

            $table->foreign('session_id')->references('id')->on('live_sessions');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('term_id')->references('id')->on('terms');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('live_session_details');
    }
}
