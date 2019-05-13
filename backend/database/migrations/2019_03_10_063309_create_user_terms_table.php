<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTermsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_terms', function (Blueprint $table) {
            $table->primary(['user_id', 'term_id']);
            $table->unsignedBigInteger('user_id'); // user_id: bigint(20)
            $table->unsignedBigInteger('term_id'); // term_id: bigint(20)
            $table->integer('correct')->default(0); // correct: int(11)
            $table->integer('missed')->default(0); // missed: int(11)

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('term_id')->references('id')->on('terms')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_terms');
    }
}
