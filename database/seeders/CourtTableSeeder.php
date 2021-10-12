<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;    // 追記
use Illuminate\Support\Facades\Hash;  // Hash使うなら追記

class CourtTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('courts')->insert([
        [
          'court' => 'A'
        ],
        [
          'court' => 'B'
        ],
        [
          'court' => 'C'
        ],
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
