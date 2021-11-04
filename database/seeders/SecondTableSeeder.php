<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;    // 追記
use Illuminate\Support\Facades\Hash;  // Hash使うなら追記

class SecondTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('seconds')->insert([
      [
        'game_id' => 'd1',
        'court' => 'D',
        'number_A' => 1,
        'number_B' => 2,
      ],
      [
        'game_id' => 'd2',
        'court' => 'D',
        'number_A' => 5,
        'number_B' => 6,
      ],
      [
        'game_id' => 'd3',
        'court' => 'D',
        'number_A' => 2,
        'number_B' => 5,
      ],
      [
        'game_id' => 'd4',
        'court' => 'D',
        'number_A' => 1,
        'number_B' => 4,
      ],
      [
        'game_id' => 'd5',
        'court' => 'D',
        'number_A' => 1,
        'number_B' => 5,
      ],
      [
        'game_id' => 'd6',
        'court' => 'D',
        'number_A' => 2,
        'number_B' => 6,
      ],
      [
        'game_id' => 'd7',
        'court' => 'D',
        'number_A' => 1,
        'number_B' => 6,
      ],
      [
        'game_id' => 'd8',
        'court' => 'D',
        'number_A' => 2,
        'number_B' => 4,
      ],
      [
        'game_id' => 'd9',
        'court' => 'D',
        'number_A' => 2,
        'number_B' => 5,
      ],
      [
        'game_id' => 'd10',
        'court' => 'D',
        'number_A' => 1,
        'number_B' => 5,
      ],
      [
        'game_id' => 'd11',
        'court' => 'D',
        'number_A' => 1,
        'number_B' => 2,
      ],
      [
        'game_id' => 'd12',
        'court' => 'D',
        'number_A' => 2,
        'number_B' => 4,
      ],
      [
        'game_id' => 'e1',
        'court' => 'E',
        'number_A' => 3,
        'number_B' => 4,
      ],
      [
        'game_id' => 'e2',
        'court' => 'E',
        'number_A' => 1,
        'number_B' => 3,
      ],
      [
        'game_id' => 'e3',
        'court' => 'E',
        'number_A' => 4,
        'number_B' => 6,
      ],
      [
        'game_id' => 'e4',
        'court' => 'E',
        'number_A' => 2,
        'number_B' => 3,
      ],
      [
        'game_id' => 'e5',
        'court' => 'E',
        'number_A' => 3,
        'number_B' => 6,
      ],
      [
        'game_id' => 'e6',
        'court' => 'E',
        'number_A' => 4,
        'number_B' => 5,
      ],
      [
        'game_id' => 'e7',
        'court' => 'E',
        'number_A' => 3,
        'number_B' => 5,
      ],
      [
        'game_id' => 'e8',
        'court' => 'E',
        'number_A' => 1,
        'number_B' => 3,
      ],
      [
        'game_id' => 'e9',
        'court' => 'E',
        'number_A' => 4,
        'number_B' => 6,
      ],
      [
        'game_id' => 'e10',
        'court' => 'E',
        'number_A' => 3,
        'number_B' => 6,
      ],
      [
        'game_id' => 'e11',
        'court' => 'E',
        'number_A' => 3,
        'number_B' => 4,
      ],
      [
        'game_id' => 'e12',
        'court' => 'E',
        'number_A' => 5,
        'number_B' => 6,
      ],
    ]);
  }
}
