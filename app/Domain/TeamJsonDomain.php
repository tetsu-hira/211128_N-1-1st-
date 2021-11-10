<?php
declare(strict_types=1);

namespace App\Domain;

class TeamJsonDomain
{
  public function get()
  {
    /*
      * 必要な処理あれこれ
    */
    $team = \DB::table('teams')->get();

    return [
      $team
    ];
  }
}