<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;    // 追記
use Illuminate\Support\Facades\Hash;  // Hash使うなら追記

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   *
   * @return void
   */
  public function run()
  {
    $this->call([
      CourtTableSeeder::class,
      FirstTableSeeder::class,
      NumberTableSeeder::class,
      SecondTableSeeder::class,
      ThirdTableSeeder::class,
    ]);
  }
}
