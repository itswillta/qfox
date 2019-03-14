<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudySetClassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study_set_classes', function (Blueprint $table) {
            $table->primary(['study_set_id', 'class_id']);
            $table->unsignedBigInteger('study_set_id'); // study_set_id: bigint(20)
            $table->unsignedBigInteger('class_id'); // class_id: bigint(20)

            $table->foreign('study_set_id')->references('id')->on('study_sets');
            $table->foreign('class_id')->references('id')->on('study_classes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('study_set_classes');
    }
}
