<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLiveSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('live_sessions', function (Blueprint $table) {
            $table->bigIncrements('id'); // id: bigint(20)
            $table->string('code', 8); // code: varchar(8)
            $table->string('name'); // name: varchar(255)
            $table->string('description'); // description: varchar(255)
            $table->unsignedBigInteger('user_id'); // user_id: bigint(20)
            $table->timestamps(); // created_at & updated_at: nullable timestamp

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('live_sessions');
    }
}
