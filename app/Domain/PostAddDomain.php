<?php
declare(strict_types=1);

namespace App\Domain;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostAddDomain
{
  public function get(Request $request): JsonResponse
  {
    /*
      * 必要な処理あれこれ
    */
    $request->request->all();
    logger($request);
    $id = $request->input('id');
    $name = $request->input('name');
    \DB::table('posts')->insert([
      'id' => $id,
      'name' => $name,
      'pre_point' => 0,
      'pre_score' => 0,
      'mid_point' => 0,
      'mid_score' => 0,
      'las_point' => 0,
      'las_score' => 0,
    ]);
    $post = \DB::table('posts')->get();

    return redirect('/');
  }
}