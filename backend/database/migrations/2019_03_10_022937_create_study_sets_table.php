<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudySetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('study_sets', function (Blueprint $table) {
            $table->bigIncrements('id'); // id: bigint(20)
            $table->string('title'); // title: varchar(255)
            $table->string('viewPermission', 25); // permission: varchar(25)
            $table->string('editPermission', 25); // permission: varchar(25)
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
        Schema::dropIfExists('study_sets');
    }
}
