<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudyClassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study_classes', function (Blueprint $table) {
            $table->bigIncrements('id'); // id: bigint(20)
            $table->string('name'); // name: varchar(255)
            $table->string('description'); // description: varchar(255)
            $table->string('permission', 10); // permission: varchar(10)
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
        Schema::dropIfExists('study_classes');
    }
}
