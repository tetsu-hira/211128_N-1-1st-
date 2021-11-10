<?php
declare(strict_types=1);

namespace App\Domain;

class PostJsonDomain
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