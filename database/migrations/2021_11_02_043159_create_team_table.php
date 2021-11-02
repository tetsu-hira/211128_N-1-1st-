<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
          $table->increments('id');
          $table->string('name');
          $table->integer('pre_point');
          $table->integer('pre_score');
          $table->string('court')->nullable();
          $table->integer('number')->nullable();
          $table->integer('mid_point');
          $table->integer('mid_score');
          $table->string('mid_court')->nullable();
          $table->integer('mid_number')->nullable();
          $table->integer('las_point');
          $table->integer('las_score');
          $table->string('las_court')->nullable();
          $table->integer('las_number')->nullable();
          $table->integer('sum_point');
          $table->integer('sum_score');
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teams');
    }
}
