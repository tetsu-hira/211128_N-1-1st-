<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
      // $posts = DB::select('select * from posts');
      // $data = ['msg' => 'データ一覧', 'posts' => $posts];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
    // チーム登録機能
    public function addTeam(Request $request)
    {
      $add = new Post;
      $add->name = $request->name;
      $add->timestamps = false;
      $add->save();
      return redirect('/');
    }
    // チーム削除機能
    public function delTeam(Request $request)
    {
      $del = Post::findOrFail($request->id);
      $del->delete();
      $del->timestamps = false;
      // $add->save();
      return redirect('/');
    }
    // 予選リーグ用
    // コート変更機能
    public function changecourt(Request $request)
    {
        // header("Access-Control-Allow-Origin: *");  //CORS
        // header("Access-Control-Allow-Headers: Origin, X-Requested-With");
        $id = $request->input('id');
        $court = $request->input('court');
        $changecourt = new Post;
        $changecourt->timestamps =false;
        $changecourt->where('id', $id)->update(['court'=>$court]);
        $changecourt->save();
    }
    // 番号変更機能
    public function changenumber(Request $request)
    {
        // header("Access-Control-Allow-Origin: *");  //CORS
        // header("Access-Control-Allow-Headers: Origin, X-Requested-With");
        $id = $request->input('id');
        $number = $request->input('number');
        $changenumber = new Post;
        $changenumber->timestamps =false;
        $changenumber->where('id', $id)->update(['number'=>$number]);
        $changenumber->save();
    }
    // 中間リーグ用
    // コート変更機能
    public function changemidcourt(Request $request)
    {
        // header("Access-Control-Allow-Origin: *");  //CORS
        // header("Access-Control-Allow-Headers: Origin, X-Requested-With");
        $id = $request->input('id');
        $midcourt = $request->input('midcourt');
        $changemidcourt = new Post;
        $changemidcourt->timestamps =false;
        $changemidcourt->where('id', $id)->update(['mid_court'=>$midcourt]);
        $changemidcourt->save();
    }
    // 番号変更機能
    public function changemidnumber(Request $request)
    {
        // header("Access-Control-Allow-Origin: *");  //CORS
        // header("Access-Control-Allow-Headers: Origin, X-Requested-With");
        $id = $request->input('id');
        $midnumber = $request->input('midnumber');
        $changemidnumber = new Post;
        $changemidnumber->timestamps =false;
        $changemidnumber->where('id', $id)->update(['mid_number'=>$midnumber]);
        $changemidnumber->save();
    }
    // 予選結果計算機能
    public function count(Request $request)
    {
        $countA1 = $request->input('countA1');
        $countA2 = $request->input('countA2');
        $countA3 = $request->input('countA3');
        $countA4 = $request->input('countA4');
        $countA5 = $request->input('countA5');
        $countA6 = $request->input('countA6');
        $countA7 = $request->input('countA7');
        $countA8 = $request->input('countA8');
        $countA9 = $request->input('countA9');
        $countA10 = $request->input('countA10');
        $countA11 = $request->input('countA11');
        $countA12 = $request->input('countA12');
        $countA13 = $request->input('countA13');
        $countA14 = $request->input('countA14');
        $countA15 = $request->input('countA15');
        $countA16 = $request->input('countA16');
        $countA = new Game;
        $countA->timestamps = false;
        $countA->where('id', 1)->update(['result1'=>$countA1, 'result2'=>$countA2, 'result3'=>$countA3, 'result4'=>$countA4]);
        $countA->save();
        $countB1 = $request->input('countB1');
        $countB2 = $request->input('countB2');
        $countB3 = $request->input('countB3');
        $countB4 = $request->input('countB4');
        $countB5 = $request->input('countB5');
        $countB6 = $request->input('countB6');
        $countB7 = $request->input('countB7');
        $countB8 = $request->input('countB8');
        $countB9 = $request->input('countB9');
        $countB10 = $request->input('countB10');
        $countB11 = $request->input('countB11');
        $countB12 = $request->input('countB12');
        $countB13 = $request->input('countB13');
        $countB14 = $request->input('countB14');
        $countB15 = $request->input('countB15');
        $countB16 = $request->input('countB16');
        $countC1 = $request->input('countC1');
        $countC2 = $request->input('countC2');
        $countC3 = $request->input('countC3');
        $countC4 = $request->input('countC4');
        $countC5 = $request->input('countC5');
        $countC6 = $request->input('countC6');
        $countC7 = $request->input('countC7');
        $countC8 = $request->input('countC8');
        $countC9 = $request->input('countC9');
        $countC10 = $request->input('countC10');
        $countC11 = $request->input('countC11');
        $countC12 = $request->input('countC12');
        $countC13 = $request->input('countC13');
        $countC14 = $request->input('countC14');
        $countC15 = $request->input('countC15');
        $countC16 = $request->input('countC16');
        $countD1 = $request->input('countD1');
        $countD2 = $request->input('countD2');
        $countD3 = $request->input('countD3');
        $countD4 = $request->input('countD4');
        $countD5 = $request->input('countD5');
        $countD6 = $request->input('countD6');
        $countD7 = $request->input('countD7');
        $countD8 = $request->input('countD8');
        $countD9 = $request->input('countD9');
        $countD10 = $request->input('countD10');
        $countD11 = $request->input('countD11');
        $countD12 = $request->input('countD12');
        $countD13 = $request->input('countD13');
        $countD14 = $request->input('countD14');
        $countD15 = $request->input('countD15');
        $countD16 = $request->input('countD16');
    }

}
