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
        'game_id' => 'a4',
        'court' => 'A',
        'number_A' => 1,
        'number_B' => 5,
      ],
      [
        'game_id' => 'a5',
        'court' => 'A',
        'number_A' => 3,
        'number_B' => 5,
      ],
      [
        'game_id' => 'a6',
        'court' => 'A',
        'number_A' => 1,
        'number_B' => 7,
      ],
      [
        'game_id' => 'a7',
        'court' => 'A',
        'number_A' => 1,
        'number_B' => 8,
      ],
      [
        'game_id' => 'a8',
        'court' => 'A',
        'number_A' => 5,
        'number_B' => 8,
      ],
      [
        'game_id' => 'a9',
        'court' => 'A',
        'number_A' => 1,
        'number_B' => 9,
      ],
      [
        'game_id' => 'a10',
        'court' => 'A',
        'number_A' => 1,
        'number_B' => 4,
      ],
      [
        'game_id' => 'a11',
        'court' => 'A',
        'number_A' => 3,
        'number_B' => 8,
      ],
      [
        'game_id' => 'a12',
        'court' => 'A',
        'number_A' => 3,
        'number_B' => 7,
      ],
      [
        'game_id' => 'b1',
        'court' => 'B',
        'number_A' => 4,
        'number_B' => 5,
      ],
      [
        'game_id' => 'b2',
        'court' => 'B',
        'number_A' => 5,
        'number_B' => 6,
      ],
      [
        'game_id' => 'b3',
        'court' => 'B',
        'number_A' => 4,
        'number_B' => 6,
      ],
      [
        'game_id' => 'b4',
        'court' => 'B',
        'number_A' => 2,
        'number_B' => 7,
      ],
      [
        'game_id' => 'b5',
        'court' => 'B',
        'number_A' => 2,
        'number_B' => 8,
      ],
      [
        'game_id' => 'b6',
        'court' => 'B',
        'number_A' => 3,
        'number_B' => 6,
      ],
      [
        'game_id' => 'b7',
        'court' => 'B',
        'number_A' => 2,
        'number_B' => 5,
      ],
      [
        'game_id' => 'b8',
        'court' => 'B',
        'number_A' => 2,
        'number_B' => 6,
      ],
      [
        'game_id' => 'b9',
        'court' => 'B',
        'number_A' => 3,
        'number_B' => 4,
      ],
      [
        'game_id' => 'b10',
        'court' => 'B',
        'number_A' => 2,
        'number_B' => 9,
      ],
      [
        'game_id' => 'b11',
        'court' => 'B',
        'number_A' => 1,
        'number_B' => 6,
      ],
      [
        'game_id' => 'b12',
        'court' => 'B',
        'number_A' => 6,
        'number_B' => 8,
      ],
      [
        'game_id' => 'c1',
        'court' => 'C',
        'number_A' => 7,
        'number_B' => 8,
      ],
      [
        'game_id' => 'c2',
        'court' => 'C',
        'number_A' => 8,
        'number_B' => 9,
      ],
      [
        'game_id' => 'c3',
        'court' => 'C',
        'number_A' => 7,
        'number_B' => 9,
      ],
      [
        'game_id' => 'c4',
        'court' => 'C',
        'number_A' => 4,
        'number_B' => 8,
      ],
      [
        'game_id' => 'c5',
        'court' => 'C',
        'number_A' => 6,
        'number_B' => 9,
      ],
      [
        'game_id' => 'c6',
        'court' => 'C',
        'number_A' => 4,
        'number_B' => 9,
      ],
      [
        'game_id' => 'c7',
        'court' => 'C',
        'number_A' => 4,
        'number_B' => 7,
      ],
      [
        'game_id' => 'c8',
        'court' => 'C',
        'number_A' => 3,
        'number_B' => 9,
      ],
      [
        'game_id' => 'c9',
        'court' => 'C',
        'number_A' => 6,
        'number_B' => 7,
      ],
      [
        'game_id' => 'c10',
        'court' => 'C',
        'number_A' => 5,
        'number_B' => 7,
      ],
      [
        'game_id' => 'c11',
        'court' => 'C',
        'number_A' => 2,
        'number_B' => 4,
      ],
      [
        'game_id' => 'c12',
        'court' => 'C',
        'number_A' => 5,
        'number_B' => 9,
      ],
    ]);
  }
}
