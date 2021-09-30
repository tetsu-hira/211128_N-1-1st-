<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Teams extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('posts', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name');
      $table->string('court')->nullable();
      $table->integer('number')->nullable();
      $table->integer('pre_point');
      $table->integer('pre_score');
      $table->integer('mid_point');
      $table->integer('mid_score');
      $table->integer('sum_point');
      $table->integer('sum_score');
      $table->string('mid_court')->nullable();
      $table->integer('mid_number')->nullable();
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
    Schema::dropIfExists('posts');
  }
}
