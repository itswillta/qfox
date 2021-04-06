<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserClassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_classes', function (Blueprint $table) {
            $table->primary(['user_id', 'class_id']);
            $table->unsignedBigInteger('user_id'); // user_id: bigint(20)
            $table->unsignedBigInteger('class_id'); // class_id: bigint(20)
            $table->string('role'); // role: varchar(255)

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('class_id')->references('id')->on('study_classes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_classes');
    }
}
