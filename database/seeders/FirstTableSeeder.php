<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;    // 追記
use Illuminate\Support\Facades\Hash;  // Hash使うなら追記

class FirstTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('firsts')->insert([
      [
        'game_id' => 'a1',
        'court' => 'A',
        'number_A' => 1,
        'number_B' => 2,
      ],
      [
        'game_id' => 'a2',
        'court' => 'A',
        'number_A' => 2,
        'number_B' => 3,
      ],
      [
        'game_id' => 'a3',
        'court' => 'A',
        'number_A' => 1,
        'number_B' => 3,
      ],
      [
        'game_id' => 'b1',
        'court' => 'B',
        'number_A' => 1,
        'number_B' => 2,
      ],
      [
        'game_id' => 'b2',
        'court' => 'B',
        'number_A' => 2,
        'number_B' => 3,
      ],
      [
        'game_id' => 'b3',
        'court' => 'B',
        'number_A' => 1,
        'number_B' => 3,
      ],
      [
        'game_id' => 'c1',
        'court' => 'C',
        'number_A' => 1,
        'number_B' => 2,
      ],
      [
        'game_id' => 'c2',
        'court' => 'C',
        'number_A' => 2,
        'number_B' => 3,
      ],
      [
        'game_id' => 'c3',
        'court' => 'C',
        'number_A' => 1,
        'number_B' => 3,
      ],
      [
        'game_id' => 'd1',
        'court' => 'D',
        'number_A' => 1,
        'number_B' => 2,
      ],
      [
        'game_id' => 'd2',
        'court' => 'D',
        'number_A' => 2,
        'number_B' => 3,
      ],
      [
        'game_id' => 'd3',
        'court' => 'D',
        'number_A' => 1,
        'number_B' => 3,
      ],
      [
        'game_id' => 'e1',
        'court' => 'E',
        'number_A' => 1,
        'number_B' => 2,
      ],
      [
        'game_id' => 'e2',
        'court' => 'E',
        'number_A' => 2,
        'number_B' => 3,
      ],
      [
        'game_id' => 'e3',
        'court' => 'E',
        'number_A' => 1,
        'number_B' => 3,
      ],
      [
        'game_id' => 'f1',
        'court' => 'F',
        'number_A' => 1,
        'number_B' => 2,
      ],
      [
        'game_id' => 'f2',
        'court' => 'F',
        'number_A' => 2,
        'number_B' => 3,
      ],
      [
        'game_id' => 'f3',
        'court' => 'F',
        'number_A' => 1,
        'number_B' => 3,
      ],
    ]);
  }
}
