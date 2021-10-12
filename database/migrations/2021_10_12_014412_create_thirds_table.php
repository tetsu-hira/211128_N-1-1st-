<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThirdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thirds', function (Blueprint $table) {
          $table->increments('id');
          $table->string('game_id');
          $table->string('court');
          $table->integer('number_A');
          $table->integer('number_B');
          $table->integer('result1')->default(0);
          $table->integer('result2')->default(0);
          $table->integer('result3')->default(0);
          $table->integer('result4')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thirds');
    }
}
