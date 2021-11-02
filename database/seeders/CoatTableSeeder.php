<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;    // 追記
use Illuminate\Support\Facades\Hash;  // Hash使うなら追記

class CoatTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('coats')->insert([
        [
          'court' => 'D'
        ],
        [
          'court' => 'E'
        ],
        [
          'court' => 'F'
        ]
      ]);
    }
}
