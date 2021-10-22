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
        'name' => 'MAD'
      ],
      [
        'name' => '鬼気'
      ],
      [
        'name' => 'なはっはー。'
      ],
      [
        'name' => 'SAGA'
      ],
      [
        'name' => '岩娘'
      ],
      [
        'name' => '碔鬼'
      ],
      [
        'name' => 'ZetZ'
      ],
      [
        'name' => 'TARUTO'
      ],
      [
        'name' => 'スリンキー'
      ],
      [
        'name' => 'エンジョイ'
      ],
      [
        'name' => 'Tiara'
      ],
      [
        'name' => 'ELDORADO'
      ],
      [
        'name' => 'SUGAR'
      ],
      [
        'name' => '翔舞'
      ],
      [
        'name' => 'ぴあーず。'
      ],
      [
        'name' => 'GOLDEN EGGS'
      ],
      [
        'name' => '無鉄砲'
      ],
    ]);
  }
}
