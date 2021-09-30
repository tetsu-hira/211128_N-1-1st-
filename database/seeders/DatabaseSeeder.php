<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    AppPost::create([
      "name" => "無鉄砲",
      "pre_point" => 0,
      "pre_score" => 0,
      "mid_point" => 0,
      "mid_score" => 0,
      "sum_point" => 0,
      "sum_score" => 0
    ]);
    AppPost::create([
      "name" => "HSVC",
      "pre_point" => 0,
      "pre_score" => 0,
      "mid_point" => 0,
      "mid_score" => 0,
      "sum_point" => 0,
      "sum_score" => 0
    ]);
    AppPost::create([
      "name" => "もしピ",
      "pre_point" => 0,
      "pre_score" => 0,
      "mid_point" => 0,
      "mid_score" => 0,
      "sum_point" => 0,
      "sum_score" => 0
    ]);
    AppPost::create([
      "name" => "MAD",
      "pre_point" => 0,
      "pre_score" => 0,
      "mid_point" => 0,
      "mid_score" => 0,
      "sum_point" => 0,
      "sum_score" => 0
    ]);
    AppPost::create([
      "name" => "鬼気",
      "pre_point" => 0,
      "pre_score" => 0,
      "mid_point" => 0,
      "mid_score" => 0,
      "sum_point" => 0,
      "sum_score" => 0
    ]);
    $this->call(UsersTableSeeder::class);
  }
}
