<?php
declare(strict_types=1);

namespace App\Domain;

class SampleJsonDomain
{
  public function get()
  {
    /*
      * 必要な処理あれこれ
    */
    $post = \DB::table('posts')->get();

    return [
      $post
    ];
  }
}