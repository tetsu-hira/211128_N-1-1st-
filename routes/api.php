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


Route::get('/post',function (Request $request) {
  $posts = App\Models\post::all();
  return response()->json(['posts'=> $posts]);
});
Route::get('/team',function (Request $request) {
  $teams = App\Models\team::all();
  return response()->json(['teams'=> $teams]);
});
Route::get('/court',function (Request $request) {
  $courts = App\Models\court::all();
  return response()->json(['courts'=> $courts]);
});
Route::get('/number',function (Request $request) {
  $numbers = App\Models\number::all();
  return response()->json(['numbers'=> $numbers]);
});
Route::get('/first',function (Request $request) {
  $firsts = App\Models\first::all();
  return response()->json(['firsts'=> $firsts]);
});
Route::get('/second',function (Request $request) {
  $seconds = App\Models\second::all();
  return response()->json(['seconds'=> $seconds]);
});
Route::get('/third',function (Request $request) {
  $thirds = App\Models\third::all();
  return response()->json(['thirds'=> $thirds]);
});


// 追加機能
Route::group(['middleware' => 'api'], function(){
  // Route::get('get', 'PostController@addTeam');
  Route::post('addTeam', 'PostController@addTeam');
  Route::get('delTeam', 'PostController@delTeam');
  Route::post('delTeam', 'PostController@delTeam');
  Route::post('addPost', 'PostController@addPost');
  Route::get('delPost', 'PostController@delPost');
  Route::post('delPost', 'PostController@delPost');
  // Route::get('changecourt', 'PostController@changecourt');
  Route::post('changecourt', 'PostController@changecourt');
  Route::post('changenumber', 'PostController@changenumber');
  Route::post('changemidcourt', 'PostController@changemidcourt');
  Route::post('changemidnumber', 'PostController@changemidnumber');
  Route::post('changelascourt', 'PostController@changelascourt');
  Route::post('changelasnumber', 'PostController@changelasnumber');
  Route::post('changecount', 'PostController@changecount');
  Route::post('changecount2', 'PostController@changecount2');
  Route::post('changecount3', 'PostController@changecount3');
  Route::get('getResult', 'PostController@getResult');
  Route::post('getResult', 'PostController@getResult');
});