<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTermsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('terms', function (Blueprint $table) {
            $table->bigIncrements('id'); // id: bigint(20)
            $table->string('term'); // term: varchar(255)
            $table->string('definition'); // definition: varchar(255)
            $table->boolean('is_starred'); // is_starred: tinyint(1)
            $table->unsignedBigInteger('study_set_id'); // study_set_id: bigint(20)
            $table->timestamps(); // created_at & updated_at: nullable timestamp

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
        Schema::dropIfExists('terms');
    }
}
