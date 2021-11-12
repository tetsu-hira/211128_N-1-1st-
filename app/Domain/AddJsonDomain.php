<?php
declare(strict_types=1);

namespace App\Domain;

use illuminate\Http\Request;


class AddJsonDomain
{
  public function add(Request $request)
  {
    /*
      * 必要な処理あれこれ
    */
    logger("テスト");
    logger($request);
    // $id = $request->input('id');
    // $name = $request->input('name');
    // $add = \DB::table('posts')->insert(
    //   ['id' => $id, 'name' => $name]
    // );
    $add = \DB::table('posts')->get();

    return [
      $add
    ];
  }
}