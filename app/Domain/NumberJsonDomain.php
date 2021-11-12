<?php
declare(strict_types=1);

namespace App\Domain;

class NumberJsonDomain
{
  public function get()
  {
    /*
      * 必要な処理あれこれ
    */
    $number = \DB::table('numbers')->get();

    return [
      $number
    ];
  }
}