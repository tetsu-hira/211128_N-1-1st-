<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;    // 追記
use Illuminate\Support\Facades\Hash;  // Hash使うなら追記

class PostsTableSeeder extends Seeder
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
          'name' => '焼きおにぎり'
        ],
        [
          'name' => 'SAGA'
        ],
        [
          'name' => '凱旋'
        ],
        [
          'name' => 'SUGAR'
        ],
        [
          'name' => 'Tiara'
        ],
        [
          'name' => 'スリンキー'
        ],
        [
          'name' => 'がんがん'
        ],
        [
          'name' => 'HSVC'
        ],
        [
          'name' => '笑夢'
        ],
      ]);
    }
}
