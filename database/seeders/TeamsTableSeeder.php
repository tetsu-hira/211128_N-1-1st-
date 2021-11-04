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
    DB::table('teams')->insert([
      [
        'name' => 'エンジョイ'
      ],
      [
        'name' => 'ジンリッキー'
      ],
      [
        'name' => '4C'
      ],
      [
        'name' => 'ぴあーず。'
      ],
      [
        'name' => 'スコッチ'
      ],
      [
        'name' => 'アンダースタンス'
      ],
    ]);
  }
}
