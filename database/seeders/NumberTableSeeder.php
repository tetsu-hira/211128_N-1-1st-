<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;    // 追記
use Illuminate\Support\Facades\Hash;  // Hash使うなら追記

class NumberTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('numbers')->insert([
        [
          'number' => '1'
        ],
        [
          'number' => '2'
        ],
        [
          'number' => '3'
        ],
      ]);
    }
}
