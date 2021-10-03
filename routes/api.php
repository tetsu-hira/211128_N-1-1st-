<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// 追加機能
Route::group(['middleware' => 'api'], function(){
  Route::get('get', 'PostController@addTeam');
  Route::post('add', 'PostController@addTeam');
  Route::get('del', 'PostController@delTeam');
  Route::post('del', 'PostController@delTeam');
  // Route::get('changecourt', 'PostController@changecourt');
  Route::post('changecourt', 'PostController@changecourt');
  Route::post('changenumber', 'PostController@changenumber');
  Route::post('changemidcourt', 'PostController@changemidcourt');
  Route::post('changemidnumber', 'PostController@changemidnumber');
  Route::post('count', 'PostController@count');
});

Route::get('/post',function (Request $request) {
  $posts = App\Models\post::all();
  return response()->json(['posts'=> $posts]);
});
Route::get('/court',function (Request $request) {
  $courts = App\Models\court::all();
  return response()->json(['courts'=> $courts]);
});
Route::get('/number',function (Request $request) {
  $numbers = App\Models\number::all();
  return response()->json(['numbers'=> $numbers]);
});
Route::get('/game',function (Request $request) {
  $games = App\Models\game::all();
  return response()->json(['games'=> $games]);
});

