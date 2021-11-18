<?php
declare(strict_types=1);

namespace App\Domain;

class FirstJsonDomain
{
  public function get()
  {
    /*
      * 必要な処理あれこれ
    */
    $first = \DB::table('firsts')->get();

    return [
      $first
    ];
  }
}