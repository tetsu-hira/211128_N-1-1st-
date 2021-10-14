<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;    // 追記
use Illuminate\Support\Facades\Hash;  // Hash使うなら追記

class TeamsTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('posts')->insert([
      [
        'name' => 'HSVC'
      ],
      [
        'number' => 'MAD'
      ],
      [
        'number' => '鬼気'
      ],
      [
        'number' => 'なはっはー。'
      ],
      [
        'number' => 'SAGA'
      ],
      [
        'number' => '岩娘'
      ],
      [
        'number' => '碔鬼'
      ],
      [
        'number' => 'ZetZ'
      ],
      [
        'number' => 'TARUTO'
      ],
      [
        'number' => 'スリンキー'
      ],
      [
        'number' => 'エンジョイ'
      ],
      [
        'number' => 'Tiara'
      ],
      [
        'number' => 'ELDORADO'
      ],
      [
        'number' => 'SUGAR'
      ],
      [
        'number' => '翔舞'
      ],
      [
        'number' => 'ぴあーず。'
      ],
      [
        'number' => 'GOLDEN EGGS'
      ],
      [
        'number' => '無鉄砲'
      ],
    ]);
  }
}
