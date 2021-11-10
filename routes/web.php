<?php

use Illuminate\Support\Facades\Route;
// PostControllerクラスを使えるようにする
use app\Http\Controllers\PostController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// ルートを追加する※Laravel8の場合
// Route::get('/hello', "PostController");

// ADRのサンプルで作成
Route::get('/api/posts', \App\Http\Actions\PostJsonAction::class);
Route::get('/api/teams', \App\Http\Actions\TeamJsonAction::class);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any','.*');

// Route::get('/post', 'PostController@index');

// Route::resource('posts', 'PostController');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
