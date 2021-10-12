<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\First;
use App\Models\Second;
use App\Models\Third;
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
      $id = $request->input('id');
      $del = new Post;
      $del->where('id', $id)->delete();
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
        // $changecourt->save();
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
        // $changenumber->save();
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
        // $changemidcourt->save();
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
        // $changemidnumber->save();
    }
    // 最終リーグ用
    // コート変更機能
    public function changelascourt(Request $request)
    {
        // header("Access-Control-Allow-Origin: *");  //CORS
        // header("Access-Control-Allow-Headers: Origin, X-Requested-With");
        $id = $request->input('id');
        $lascourt = $request->input('lascourt');
        $changelascourt = new Post;
        $changelascourt->timestamps =false;
        $changelascourt->where('id', $id)->update(['las_court'=>$lascourt]);
        // $changemidcourt->save();
    }
    // 番号変更機能
    public function changelasnumber(Request $request)
    {
        // header("Access-Control-Allow-Origin: *");  //CORS
        // header("Access-Control-Allow-Headers: Origin, X-Requested-With");
        $id = $request->input('id');
        $lasnumber = $request->input('lasnumber');
        $changelasnumber = new Post;
        $changelasnumber->timestamps =false;
        $changelasnumber->where('id', $id)->update(['las_number'=>$lasnumber]);
        // $changemidnumber->save();
    }
    // 予選結果計算機能
    public function changecount(Request $request)
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
      $changecountA1 = new Game;
      $changecountA1->timestamps = false;
      $changecountA1->where('id', 1)->update(['result1'=>$countA1, 'result2'=>$countA2, 'result3'=>$countA3, 'result4'=>$countA4]);
      $changecountA2 = new Game;
      $changecountA2->timestamps = false;
      $changecountA2->where('id', 2)->update(['result1'=>$countA5, 'result2'=>$countA6, 'result3'=>$countA7, 'result4'=>$countA8]);
      $changecountA3 = new Game;
      $changecountA3->timestamps = false;
      $changecountA3->where('id', 3)->update(['result1'=>$countA9, 'result2'=>$countA10, 'result3'=>$countA11, 'result4'=>$countA12]);
      $changecountA4 = new Game;
      $changecountA4->timestamps = false;
      $changecountA4->where('id', 4)->update(['result1'=>$countA13, 'result2'=>$countA14, 'result3'=>$countA15, 'result4'=>$countA16]);
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
      $changecountB1 = new Game;
      $changecountB1->timestamps = false;
      $changecountB1->where('id', 5)->update(['result1'=>$countB1, 'result2'=>$countB2, 'result3'=>$countB3, 'result4'=>$countB4]);
      $changecountB2 = new Game;
      $changecountB2->timestamps = false;
      $changecountB2->where('id', 6)->update(['result1'=>$countB5, 'result2'=>$countB6, 'result3'=>$countB7, 'result4'=>$countB8]);
      $changecountB3 = new Game;
      $changecountB3->timestamps = false;
      $changecountB3->where('id', 7)->update(['result1'=>$countB9, 'result2'=>$countB10, 'result3'=>$countB11, 'result4'=>$countB12]);
      $changecountB4 = new Game;
      $changecountB4->timestamps = false;
      $changecountB4->where('id', 8)->update(['result1'=>$countB13, 'result2'=>$countB14, 'result3'=>$countB15, 'result4'=>$countB16]);
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
      $changecountC1 = new Game;
      $changecountC1->timestamps = false;
      $changecountC1->where('id', 9)->update(['result1'=>$countC1, 'result2'=>$countC2, 'result3'=>$countC3, 'result4'=>$countC4]);
      $changecountC2 = new Game;
      $changecountC2->timestamps = false;
      $changecountC2->where('id', 10)->update(['result1'=>$countC5, 'result2'=>$countC6, 'result3'=>$countC7, 'result4'=>$countC8]);
      $changecountC3 = new Game;
      $changecountC3->timestamps = false;
      $changecountC3->where('id', 11)->update(['result1'=>$countC9, 'result2'=>$countC10, 'result3'=>$countC11, 'result4'=>$countC12]);
      $changecountC4 = new Game;
      $changecountC4->timestamps = false;
      $changecountC4->where('id', 12)->update(['result1'=>$countC13, 'result2'=>$countC14, 'result3'=>$countC15, 'result4'=>$countC16]);
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
      $changecountD1 = new Game;
      $changecountD1->timestamps = false;
      $changecountD1->where('id', 13)->update(['result1'=>$countD1, 'result2'=>$countD2, 'result3'=>$countD3, 'result4'=>$countD4]);
      $changecountD2 = new Game;
      $changecountD2->timestamps = false;
      $changecountD2->where('id', 14)->update(['result1'=>$countD5, 'result2'=>$countD6, 'result3'=>$countD7, 'result4'=>$countD8]);
      $changecountD3 = new Game;
      $changecountD3->timestamps = false;
      $changecountD3->where('id', 15)->update(['result1'=>$countD9, 'result2'=>$countD10, 'result3'=>$countD11, 'result4'=>$countD12]);
      $changecountD4 = new Game;
      $changecountD4->timestamps = false;
      $changecountD4->where('id', 16)->update(['result1'=>$countD13, 'result2'=>$countD14, 'result3'=>$countD15, 'result4'=>$countD16]);
      $a1point_A = 0;
      $a1point_B = 0;
      // 勝ち点と得失点をteamテーブルに入れる
      // Aコート用
      if (intval($countA1) > intval($countA2) && intval($countA3) > intval($countA4)) {
        $a1point_A = 5;
        $a1point_B = 0;
      } elseif (intval($countA1) < intval($countA2) && intval($countA3) < intval($countA4)) {
        $a1point_A = 0;
        $a1point_B = 5;
      } elseif ((intval($countA1) > intval($countA2) && intval($countA3) < intval($countA4)) || (intval($countA1) < intval($countA2) && intval($countA3) > intval($countA4))) {
        if ((intval($countA1) + intval($countA3)) > (intval($countA2) + intval($countA4))) {
          $a1point_A = 3;
          $a1point_B = 1;
        } elseif ((intval($countA1) + intval($countA3)) < (intval($countA2) + intval($countA4))) {
          $a1point_A = 1;
          $a1point_B = 3;
        } else {
          $a1point_A = 2;
          $a1point_B = 2;
        }
      } else {
        $a1point_A = 0;
        $a1point_B = 0;
      }
      $a2point_A = 0;
      $a2point_B = 0;
      if (intval($countA5) > intval($countA6) && intval($countA7) > intval($countA8)) {
        $a2point_A = 5;
        $a2point_B = 0;
      } elseif (intval($countA5) < intval($countA6) && intval($countA7) < intval($countA8)) {
        $a2point_A = 0;
        $a2point_B = 5;
      } elseif ((intval($countA5) > intval($countA6) && intval($countA7) < intval($countA8)) || (intval($countA5) < intval($countA6) && intval($countA7) > intval($countA8))) {
        if ((intval($countA5) + intval($countA7)) > (intval($countA6) + intval($countA8))) {
          $a2point_A = 3;
          $a2point_B = 1;
        } elseif ((intval($countA5) + intval($countA7)) < (intval($countA6) + intval($countA8))) {
          $a2point_A = 1;
          $a2point_B = 3;
        } else {
          $a2point_A = 2;
          $a2point_B = 2;
        }
      } else {
        $a2point_A = 0;
        $a2point_B = 0;
      }
      $a3point_A = 0;
      $a3point_B = 0;
      if (intval($countA9) > intval($countA10) && intval($countA11) > intval($countA12)) {
        $a3point_A = 5;
        $a3point_B = 0;
      } elseif (intval($countA9) < intval($countA10) && intval($countA11) < intval($countA12)) {
        $a3point_A = 0;
        $a3point_B = 5;
      } elseif ((intval($countA9) > intval($countA10) && intval($countA11) < intval($countA12)) || (intval($countA9) < intval($countA10) && intval($countA11) > intval($countA12))) {
        if ((intval($countA9) + intval($countA11) )> (intval($countA10) + intval($countA12))) {
          $a3point_A = 3;
          $a3point_B = 1;
        } elseif ((intval($countA9) + intval($countA11) )< (intval($countA10) + intval($countA12))) {
          $a3point_A = 1;
          $a3point_B = 3;
        } else {
          $a3point_A = 2;
          $a3point_B = 2;
        }
      } else {
        $a3point_A = 0;
        $a3point_B = 0;
      }
      $a4point_A = 0;
      $a4point_B = 0;
      if (intval($countA13) > intval($countA14) && intval($countA15) > intval($countA16)) {
        $a4point_A = 5;
        $a4point_B = 0;
      } elseif (intval($countA13) < intval($countA14) && intval($countA15) < intval($countA16)) {
        $a4point_A = 0;
        $a4point_B = 5;
      } elseif ((intval($countA13) > intval($countA14) && intval($countA15) < intval($countA16)) || (intval($countA13) < intval($countA14) && intval($countA15) > intval($countA16))) {
        if ((intval($countA13) + intval($countA15)) > (intval($countA14) + intval($countA16))) {
          $a4point_A = 3;
          $a4point_B = 1;
        } elseif ((intval($countA13) + intval($countA15)) < (intval($countA14) + intval($countA16))) {
          $a4point_A = 1;
          $a4point_B = 3;
        } else {
          $a4point_A = 2;
          $a4point_B = 2;
        }
      } else {
        $a4point_A = 0;
        $a4point_B = 0;
      }
      $totalpoint = new Post;
      $totalpoint->timestamps =false;
      $totalpoint->where('court', "A")->where('number', 1)->update(['pre_score'=>((intval($countA1) + intval($countA3) + intval($countA9) + intval($countA11))-(intval($countA2) + intval($countA4) + intval($countA10) + intval($countA12))), 'pre_point'=>($a1point_A + $a3point_A)]);
      $totalpoint->where('court', "A")->where('number', 2)->update(['pre_score'=>((intval($countA2) + intval($countA4) + intval($countA13) + intval($countA15))-(intval($countA1) + intval($countA3) + intval($countA14) + intval($countA16))), 'pre_point'=>($a1point_B + $a4point_A)]);
      $totalpoint->where('court', "A")->where('number', 3)->update(['pre_score'=>((intval($countA5) + intval($countA7) + intval($countA10) + intval($countA12))-(intval($countA6) + intval($countA8) + intval($countA9) + intval($countA11))), 'pre_point'=>($a2point_A + $a3point_B)]);
      $totalpoint->where('court', "A")->where('number', 4)->update(['pre_score'=>((intval($countA6) + intval($countA8) + intval($countA14) + intval($countA16))-(intval($countA5) + intval($countA7) + intval($countA13) + intval($countA15))), 'pre_point'=>($a2point_B + $a4point_B)]);
      // 勝ち点と得失点をteamテーブルに入れる
      // Bコート用
      if (intval($countB1) > intval($countB2) && intval($countB3) > intval($countB4)) {
        $b1point_A = 5;
        $b1point_B = 0;
      } elseif (intval($countB1) < intval($countB2) && intval($countB3) < intval($countB4)) {
        $b1point_A = 0;
        $b1point_B = 5;
      } elseif ((intval($countB1) > intval($countB2) && intval($countB3) < intval($countB4)) || (intval($countB1) < intval($countB2) && intval($countB3) > intval($countB4))) {
        if ((intval($countB1) + intval($countB3)) > (intval($countB2) + intval($countB4))) {
          $b1point_A = 3;
          $b1point_B = 1;
        } elseif ((intval($countB1) + intval($countB3)) < (intval($countB2) + intval($countB4))) {
          $b1point_A = 1;
          $b1point_B = 3;
        } else {
          $b1point_A = 2;
          $b1point_B = 2;
        }
      } else {
        $b1point_A = 0;
        $b1point_B = 0;
      }
      $b2point_A = 0;
      $b2point_B = 0;
      if (intval($countB5) > intval($countB6) && intval($countB7) > intval($countB8)) {
        $b2point_A = 5;
        $b2point_B = 0;
      } elseif (intval($countB5) < intval($countB6) && intval($countB7) < intval($countB8)) {
        $b2point_A = 0;
        $b2point_B = 5;
      } elseif ((intval($countB5) > intval($countB6) && intval($countB7) < intval($countB8)) || (intval($countB5) < intval($countB6) && intval($countB7) > intval($countB8))) {
        if ((intval($countB5) + intval($countB7)) > (intval($countB6) + intval($countB8))) {
          $b2point_A = 3;
          $b2point_B = 1;
        } elseif ((intval($countB5) + intval($countB7)) < (intval($countB6) + intval($countB8))) {
          $b2point_A = 1;
          $b2point_B = 3;
        } else {
          $b2point_A = 2;
          $b2point_B = 2;
        }
      } else {
        $b2point_A = 0;
        $b2point_B = 0;
      }
      $b3point_A = 0;
      $b3point_B = 0;
      if (intval($countB9) > intval($countB10) && intval($countB11) > intval($countB12)) {
        $b3point_A = 5;
        $b3point_B = 0;
      } elseif (intval($countB9) < intval($countB10) && intval($countB11) < intval($countB12)) {
        $b3point_A = 0;
        $b3point_B = 5;
      } elseif ((intval($countB9) > intval($countB10) && intval($countB11) < intval($countB12)) || (intval($countB9) < intval($countB10) && intval($countB11) > intval($countB12))) {
        if ((intval($countB9) + intval($countB11) )> (intval($countB10) + intval($countB12))) {
          $b3point_A = 3;
          $b3point_B = 1;
        } elseif ((intval($countB9) + intval($countB11) )< (intval($countB10) + intval($countB12))) {
          $b3point_A = 1;
          $b3point_B = 3;
        } else {
          $b3point_A = 2;
          $b3point_B = 2;
        }
      } else {
        $b3point_A = 0;
        $b3point_B = 0;
      }
      $b4point_A = 0;
      $b4point_B = 0;
      if (intval($countB13) > intval($countB14) && intval($countB15) > intval($countB16)) {
        $b4point_A = 5;
        $b4point_B = 0;
      } elseif (intval($countB13) < intval($countB14) && intval($countB15) < intval($countB16)) {
        $b4point_A = 0;
        $b4point_B = 5;
      } elseif ((intval($countB13) > intval($countB14) && intval($countB15) < intval($countB16)) || (intval($countB13) < intval($countB14) && intval($countB15) > intval($countB16))) {
        if ((intval($countB13) + intval($countB15)) > (intval($countB14) + intval($countB16))) {
          $b4point_A = 3;
          $b4point_B = 1;
        } elseif ((intval($countB13) + intval($countB15)) < (intval($countB14) + intval($countB16))) {
          $b4point_A = 1;
          $b4point_B = 3;
        } else {
          $b4point_A = 2;
          $b4point_B = 2;
        }
      } else {
        $b4point_A = 0;
        $b4point_B = 0;
      }
      $totalpoint = new Post;
      $totalpoint->timestamps =false;
      $totalpoint->where('court', "B")->where('number', 1)->update(['pre_score'=>((intval($countB1) + intval($countB3) + intval($countB9) + intval($countB11))-(intval($countB2) + intval($countB4) + intval($countB10) + intval($countB12))), 'pre_point'=>($b1point_A + $b3point_A)]);
      $totalpoint->where('court', "B")->where('number', 2)->update(['pre_score'=>((intval($countB2) + intval($countB4) + intval($countB13) + intval($countB15))-(intval($countB1) + intval($countB3) + intval($countB14) + intval($countB16))), 'pre_point'=>($b1point_B + $b4point_A)]);
      $totalpoint->where('court', "B")->where('number', 3)->update(['pre_score'=>((intval($countB5) + intval($countB7) + intval($countB10) + intval($countB12))-(intval($countB6) + intval($countB8) + intval($countB9) + intval($countB11))), 'pre_point'=>($b2point_A + $b3point_B)]);
      $totalpoint->where('court', "B")->where('number', 4)->update(['pre_score'=>((intval($countB6) + intval($countB8) + intval($countB14) + intval($countB16))-(intval($countB5) + intval($countB7) + intval($countB13) + intval($countB15))), 'pre_point'=>($b2point_B + $b4point_B)]);
      // 勝ち点と得失点をteamテーブルに入れる
      // Cコート用
      if (intval($countC1) > intval($countC2) && intval($countC3) > intval($countC4)) {
        $c1point_A = 5;
        $c1point_B = 0;
      } elseif (intval($countC1) < intval($countC2) && intval($countC3) < intval($countC4)) {
        $c1point_A = 0;
        $c1point_B = 5;
      } elseif ((intval($countC1) > intval($countC2) && intval($countC3) < intval($countC4)) || (intval($countC1) < intval($countC2) && intval($countC3) > intval($countC4))) {
        if ((intval($countC1) + intval($countC3)) > (intval($countC2) + intval($countC4))) {
          $c1point_A = 3;
          $c1point_B = 1;
        } elseif ((intval($countC1) + intval($countC3)) < (intval($countC2) + intval($countC4))) {
          $c1point_A = 1;
          $c1point_B = 3;
        } else {
          $c1point_A = 2;
          $c1point_B = 2;
        }
      } else {
        $c1point_A = 0;
        $c1point_B = 0;
      }
      $c2point_A = 0;
      $c2point_B = 0;
      if (intval($countC5) > intval($countC6) && intval($countC7) > intval($countC8)) {
        $c2point_A = 5;
        $c2point_B = 0;
      } elseif (intval($countC5) < intval($countC6) && intval($countC7) < intval($countC8)) {
        $c2point_A = 0;
        $c2point_B = 5;
      } elseif ((intval($countC5) > intval($countC6) && intval($countC7) < intval($countC8)) || (intval($countC5) < intval($countC6) && intval($countC7) > intval($countC8))) {
        if ((intval($countC5) + intval($countC7)) > (intval($countC6) + intval($countC8))) {
          $c2point_A = 3;
          $c2point_B = 1;
        } elseif ((intval($countC5) + intval($countC7)) < (intval($countC6) + intval($countC8))) {
          $c2point_A = 1;
          $c2point_B = 3;
        } else {
          $c2point_A = 2;
          $c2point_B = 2;
        }
      } else {
        $c2point_A = 0;
        $c2point_B = 0;
      }
      $c3point_A = 0;
      $c3point_B = 0;
      if (intval($countC9) > intval($countC10) && intval($countC11) > intval($countC12)) {
        $c3point_A = 5;
        $c3point_B = 0;
      } elseif (intval($countC9) < intval($countC10) && intval($countC11) < intval($countC12)) {
        $c3point_A = 0;
        $c3point_B = 5;
      } elseif ((intval($countC9) > intval($countC10) && intval($countC11) < intval($countC12)) || (intval($countC9) < intval($countC10) && intval($countC11) > intval($countC12))) {
        if ((intval($countC9) + intval($countC11) )> (intval($countC10) + intval($countC12))) {
          $c3point_A = 3;
          $c3point_B = 1;
        } elseif ((intval($countC9) + intval($countC11) )< (intval($countC10) + intval($countC12))) {
          $c3point_A = 1;
          $c3point_B = 3;
        } else {
          $c3point_A = 2;
          $c3point_B = 2;
        }
      } else {
        $c3point_A = 0;
        $c3point_B = 0;
      }
      $c4point_A = 0;
      $c4point_B = 0;
      if (intval($countC13) > intval($countC14) && intval($countC15) > intval($countC16)) {
        $c4point_A = 5;
        $c4point_B = 0;
      } elseif (intval($countC13) < intval($countC14) && intval($countC15) < intval($countC16)) {
        $c4point_A = 0;
        $c4point_B = 5;
      } elseif ((intval($countC13) > intval($countC14) && intval($countC15) < intval($countC16)) || (intval($countC13) < intval($countC14) && intval($countC15) > intval($countC16))) {
        if ((intval($countC13) + intval($countC15)) > (intval($countC14) + intval($countC16))) {
          $c4point_A = 3;
          $c4point_B = 1;
        } elseif ((intval($countC13) + intval($countC15)) < (intval($countC14) + intval($countC16))) {
          $c4point_A = 1;
          $c4point_B = 3;
        } else {
          $c4point_A = 2;
          $c4point_B = 2;
        }
      } else {
        $c4point_A = 0;
        $c4point_B = 0;
      }
      $totalpoint = new Post;
      $totalpoint->timestamps =false;
      $totalpoint->where('court', "C")->where('number', 1)->update(['pre_score'=>((intval($countC1) + intval($countC3) + intval($countC9) + intval($countC11))-(intval($countC2) + intval($countC4) + intval($countC10) + intval($countC12))), 'pre_point'=>($c1point_A + $c3point_A)]);
      $totalpoint->where('court', "C")->where('number', 2)->update(['pre_score'=>((intval($countC2) + intval($countC4) + intval($countC13) + intval($countC15))-(intval($countC1) + intval($countC3) + intval($countC14) + intval($countC16))), 'pre_point'=>($c1point_B + $c4point_A)]);
      $totalpoint->where('court', "C")->where('number', 3)->update(['pre_score'=>((intval($countC5) + intval($countC7) + intval($countC10) + intval($countC12))-(intval($countC6) + intval($countC8) + intval($countC9) + intval($countC11))), 'pre_point'=>($c2point_A + $c3point_B)]);
      $totalpoint->where('court', "C")->where('number', 4)->update(['pre_score'=>((intval($countC6) + intval($countC8) + intval($countC14) + intval($countC16))-(intval($countC5) + intval($countC7) + intval($countC13) + intval($countC15))), 'pre_point'=>($c2point_B + $c4point_B)]);
      // 勝ち点と得失点をteamテーブルに入れる
      // Dコート用
      if (intval($countD1) > intval($countD2) && intval($countD3) > intval($countD4)) {
        $d1point_A = 5;
        $d1point_B = 0;
      } elseif (intval($countD1) < intval($countD2) && intval($countD3) < intval($countD4)) {
        $d1point_A = 0;
        $d1point_B = 5;
      } elseif ((intval($countD1) > intval($countD2) && intval($countD3) < intval($countD4)) || (intval($countD1) < intval($countD2) && intval($countD3) > intval($countD4))) {
        if ((intval($countD1) + intval($countD3)) > (intval($countD2) + intval($countD4))) {
          $d1point_A = 3;
          $d1point_B = 1;
        } elseif ((intval($countD1) + intval($countD3)) < (intval($countD2) + intval($countD4))) {
          $d1point_A = 1;
          $d1point_B = 3;
        } else {
          $d1point_A = 2;
          $d1point_B = 2;
        }
      } else {
        $d1point_A = 0;
        $d1point_B = 0;
      }
      $d2point_A = 0;
      $d2point_B = 0;
      if (intval($countD5) > intval($countD6) && intval($countD7) > intval($countD8)) {
        $d2point_A = 5;
        $d2point_B = 0;
      } elseif (intval($countD5) < intval($countD6) && intval($countD7) < intval($countD8)) {
        $d2point_A = 0;
        $d2point_B = 5;
      } elseif ((intval($countD5) > intval($countD6) && intval($countD7) < intval($countD8)) || (intval($countD5) < intval($countD6) && intval($countD7) > intval($countD8))) {
        if ((intval($countD5) + intval($countD7)) > (intval($countD6) + intval($countD8))) {
          $d2point_A = 3;
          $d2point_B = 1;
        } elseif ((intval($countD5) + intval($countD7)) < (intval($countD6) + intval($countD8))) {
          $d2point_A = 1;
          $d2point_B = 3;
        } else {
          $d2point_A = 2;
          $d2point_B = 2;
        }
      } else {
        $d2point_A = 0;
        $d2point_B = 0;
      }
      $d3point_A = 0;
      $d3point_B = 0;
      if (intval($countD9) > intval($countD10) && intval($countD11) > intval($countD12)) {
        $d3point_A = 5;
        $d3point_B = 0;
      } elseif (intval($countD9) < intval($countD10) && intval($countD11) < intval($countD12)) {
        $d3point_A = 0;
        $d3point_B = 5;
      } elseif ((intval($countD9) > intval($countD10) && intval($countD11) < intval($countD12)) || (intval($countD9) < intval($countD10) && intval($countD11) > intval($countD12))) {
        if ((intval($countD9) + intval($countD11) )> (intval($countD10) + intval($countD12))) {
          $d3point_A = 3;
          $d3point_B = 1;
        } elseif ((intval($countD9) + intval($countD11) )< (intval($countD10) + intval($countD12))) {
          $d3point_A = 1;
          $d3point_B = 3;
        } else {
          $d3point_A = 2;
          $d3point_B = 2;
        }
      } else {
        $d3point_A = 0;
        $d3point_B = 0;
      }
      $d4point_A = 0;
      $d4point_B = 0;
      if (intval($countD13) > intval($countD14) && intval($countD15) > intval($countD16)) {
        $d4point_A = 5;
        $d4point_B = 0;
      } elseif (intval($countD13) < intval($countD14) && intval($countD15) < intval($countD16)) {
        $d4point_A = 0;
        $d4point_B = 5;
      } elseif ((intval($countD13) > intval($countD14) && intval($countD15) < intval($countD16)) || (intval($countD13) < intval($countD14) && intval($countD15) > intval($countD16))) {
        if ((intval($countD13) + intval($countD15)) > (intval($countD14) + intval($countD16))) {
          $d4point_A = 3;
          $d4point_B = 1;
        } elseif ((intval($countD13) + intval($countD15)) < (intval($countD14) + intval($countD16))) {
          $d4point_A = 1;
          $d4point_B = 3;
        } else {
          $d4point_A = 2;
          $d4point_B = 2;
        }
      } else {
        $d4point_A = 0;
        $d4point_B = 0;
      }
      $totalpoint = new Post;
      $totalpoint->timestamps =false;
      $totalpoint->where('court', "D")->where('number', 1)->update(['pre_score'=>((intval($countD1) + intval($countD3) + intval($countD9) + intval($countD11))-(intval($countD2) + intval($countD4) + intval($countD10) + intval($countD12))), 'pre_point'=>($d1point_A + $d3point_A)]);
      $totalpoint->where('court', "D")->where('number', 2)->update(['pre_score'=>((intval($countD2) + intval($countD4) + intval($countD13) + intval($countD15))-(intval($countD1) + intval($countD3) + intval($countD14) + intval($countD16))), 'pre_point'=>($d1point_B + $d4point_A)]);
      $totalpoint->where('court', "D")->where('number', 3)->update(['pre_score'=>((intval($countD5) + intval($countD7) + intval($countD10) + intval($countD12))-(intval($countD6) + intval($countD8) + intval($countD9) + intval($countD11))), 'pre_point'=>($d2point_A + $d3point_B)]);
      $totalpoint->where('court', "D")->where('number', 4)->update(['pre_score'=>((intval($countD6) + intval($countD8) + intval($countD14) + intval($countD16))-(intval($countD5) + intval($countD7) + intval($countD13) + intval($countD15))), 'pre_point'=>($d2point_B + $d4point_B)]);
      // 総合点を入力
      // idが1のチームここから
      $prepoint1 = $totalpoint::where('id', 1)->value('pre_point');
      $midpoint1 = $totalpoint::where('id', 1)->value('mid_point');
      $totalpoint->where('id', 1)->update(['sum_point'=>(intval($prepoint1)+intval($midpoint1))]);
      $prescore1 = $totalpoint::where('id', 1)->value('pre_score');
      $midscore1 = $totalpoint::where('id', 1)->value('mid_score');
      $totalpoint->where('id', 1)->update(['sum_score'=>(intval($prescore1)+intval($midscore1))]);
      // idが2のチームここから
      $prepoint2 = $totalpoint::where('id', 2)->value('pre_point');
      $midpoint2 = $totalpoint::where('id', 2)->value('mid_point');
      $totalpoint->where('id', 2)->update(['sum_point'=>(intval($prepoint2)+intval($midpoint2))]);
      $prescore2 = $totalpoint::where('id', 2)->value('pre_score');
      $midscore2 = $totalpoint::where('id', 2)->value('mid_score');
      $totalpoint->where('id', 2)->update(['sum_score'=>(intval($prescore2)+intval($midscore2))]);
      // idが3のチームここから
      $prepoint3 = $totalpoint::where('id', 3)->value('pre_point');
      $midpoint3 = $totalpoint::where('id', 3)->value('mid_point');
      $totalpoint->where('id', 3)->update(['sum_point'=>(intval($prepoint3)+intval($midpoint3))]);
      $prescore3 = $totalpoint::where('id', 3)->value('pre_score');
      $midscore3 = $totalpoint::where('id', 3)->value('mid_score');
      $totalpoint->where('id', 3)->update(['sum_score'=>(intval($prescore3)+intval($midscore3))]);
      // idが4のチームここから
      $prepoint4 = $totalpoint::where('id', 4)->value('pre_point');
      $midpoint4 = $totalpoint::where('id', 4)->value('mid_point');
      $totalpoint->where('id', 4)->update(['sum_point'=>(intval($prepoint4)+intval($midpoint4))]);
      $prescore4 = $totalpoint::where('id', 4)->value('pre_score');
      $midscore4 = $totalpoint::where('id', 4)->value('mid_score');
      $totalpoint->where('id', 4)->update(['sum_score'=>(intval($prescore4)+intval($midscore4))]);
      // idが5のチームここから
      $prepoint5 = $totalpoint::where('id', 5)->value('pre_point');
      $midpoint5 = $totalpoint::where('id', 5)->value('mid_point');
      $totalpoint->where('id', 5)->update(['sum_point'=>(intval($prepoint5)+intval($midpoint5))]);
      $prescore5 = $totalpoint::where('id', 5)->value('pre_score');
      $midscore5 = $totalpoint::where('id', 5)->value('mid_score');
      $totalpoint->where('id', 5)->update(['sum_score'=>(intval($prescore5)+intval($midscore5))]);
      // idが6のチームここから
      $prepoint6 = $totalpoint::where('id', 6)->value('pre_point');
      $midpoint6 = $totalpoint::where('id', 6)->value('mid_point');
      $totalpoint->where('id', 6)->update(['sum_point'=>(intval($prepoint6)+intval($midpoint6))]);
      $prescore6 = $totalpoint::where('id', 6)->value('pre_score');
      $midscore6 = $totalpoint::where('id', 6)->value('mid_score');
      $totalpoint->where('id', 6)->update(['sum_score'=>(intval($prescore6)+intval($midscore6))]);
      // idが7のチームここから
      $prepoint7 = $totalpoint::where('id', 7)->value('pre_point');
      $midpoint7 = $totalpoint::where('id', 7)->value('mid_point');
      $totalpoint->where('id', 7)->update(['sum_point'=>(intval($prepoint7)+intval($midpoint7))]);
      $prescore7 = $totalpoint::where('id', 7)->value('pre_score');
      $midscore7 = $totalpoint::where('id', 7)->value('mid_score');
      $totalpoint->where('id', 7)->update(['sum_score'=>(intval($prescore7)+intval($midscore7))]);
      // idが8のチームここから
      $prepoint8 = $totalpoint::where('id', 8)->value('pre_point');
      $midpoint8 = $totalpoint::where('id', 8)->value('mid_point');
      $totalpoint->where('id', 8)->update(['sum_point'=>(intval($prepoint8)+intval($midpoint8))]);
      $prescore8 = $totalpoint::where('id', 8)->value('pre_score');
      $midscore8 = $totalpoint::where('id', 8)->value('mid_score');
      $totalpoint->where('id', 8)->update(['sum_score'=>(intval($prescore8)+intval($midscore8))]);
      // idが9のチームここから
      $prepoint9 = $totalpoint::where('id', 9)->value('pre_point');
      $midpoint9 = $totalpoint::where('id', 9)->value('mid_point');
      $totalpoint->where('id', 9)->update(['sum_point'=>(intval($prepoint9)+intval($midpoint9))]);
      $prescore9 = $totalpoint::where('id', 9)->value('pre_score');
      $midscore9 = $totalpoint::where('id', 9)->value('mid_score');
      $totalpoint->where('id', 9)->update(['sum_score'=>(intval($prescore9)+intval($midscore9))]);
      // idが10のチームここから
      $prepoint10 = $totalpoint::where('id', 10)->value('pre_point');
      $midpoint10 = $totalpoint::where('id', 10)->value('mid_point');
      $totalpoint->where('id', 10)->update(['sum_point'=>(intval($prepoint10)+intval($midpoint10))]);
      $prescore10 = $totalpoint::where('id', 10)->value('pre_score');
      $midscore10 = $totalpoint::where('id', 10)->value('mid_score');
      $totalpoint->where('id', 10)->update(['sum_score'=>(intval($prescore10)+intval($midscore10))]);
      // idが11のチームここから
      $prepoint11 = $totalpoint::where('id', 11)->value('pre_point');
      $midpoint11 = $totalpoint::where('id', 11)->value('mid_point');
      $totalpoint->where('id', 11)->update(['sum_point'=>(intval($prepoint11)+intval($midpoint11))]);
      $prescore11 = $totalpoint::where('id', 11)->value('pre_score');
      $midscore11 = $totalpoint::where('id', 11)->value('mid_score');
      $totalpoint->where('id', 11)->update(['sum_score'=>(intval($prescore11)+intval($midscore11))]);
      // idが12のチームここから
      $prepoint12 = $totalpoint::where('id', 12)->value('pre_point');
      $midpoint12 = $totalpoint::where('id', 12)->value('mid_point');
      $totalpoint->where('id', 12)->update(['sum_point'=>(intval($prepoint12)+intval($midpoint12))]);
      $prescore12 = $totalpoint::where('id', 12)->value('pre_score');
      $midscore12 = $totalpoint::where('id', 12)->value('mid_score');
      $totalpoint->where('id', 12)->update(['sum_score'=>(intval($prescore12)+intval($midscore12))]);
      // idが13のチームここから
      $prepoint13 = $totalpoint::where('id', 13)->value('pre_point');
      $midpoint13 = $totalpoint::where('id', 13)->value('mid_point');
      $totalpoint->where('id', 13)->update(['sum_point'=>(intval($prepoint13)+intval($midpoint13))]);
      $prescore13 = $totalpoint::where('id', 13)->value('pre_score');
      $midscore13 = $totalpoint::where('id', 13)->value('mid_score');
      $totalpoint->where('id', 13)->update(['sum_score'=>(intval($prescore13)+intval($midscore13))]);
      // idが14のチームここから
      $prepoint14 = $totalpoint::where('id', 14)->value('pre_point');
      $midpoint14 = $totalpoint::where('id', 14)->value('mid_point');
      $totalpoint->where('id', 14)->update(['sum_point'=>(intval($prepoint14)+intval($midpoint14))]);
      $prescore14 = $totalpoint::where('id', 14)->value('pre_score');
      $midscore14 = $totalpoint::where('id', 14)->value('mid_score');
      $totalpoint->where('id', 14)->update(['sum_score'=>(intval($prescore14)+intval($midscore14))]);
      // idが15のチームここから
      $prepoint15 = $totalpoint::where('id', 15)->value('pre_point');
      $midpoint15 = $totalpoint::where('id', 15)->value('mid_point');
      $totalpoint->where('id', 15)->update(['sum_point'=>(intval($prepoint15)+intval($midpoint15))]);
      $prescore15 = $totalpoint::where('id', 15)->value('pre_score');
      $midscore15 = $totalpoint::where('id', 15)->value('mid_score');
      $totalpoint->where('id', 15)->update(['sum_score'=>(intval($prescore15)+intval($midscore15))]);
      // idが16のチームここから
      $prepoint16 = $totalpoint::where('id', 16)->value('pre_point');
      $midpoint16 = $totalpoint::where('id', 16)->value('mid_point');
      $totalpoint->where('id', 16)->update(['sum_point'=>(intval($prepoint16)+intval($midpoint16))]);
      $prescore16 = $totalpoint::where('id', 16)->value('pre_score');
      $midscore16 = $totalpoint::where('id', 16)->value('mid_score');
      $totalpoint->where('id', 16)->update(['sum_score'=>(intval($prescore16)+intval($midscore16))]);
    }
    // 中間結果計算機能
    public function changecount2(Request $request)
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
      $changecountA1 = new Game2;
      $changecountA1->timestamps = false;
      $changecountA1->where('id', 1)->update(['result1'=>$countA1, 'result2'=>$countA2, 'result3'=>$countA3, 'result4'=>$countA4]);
      $changecountA2 = new Game2;
      $changecountA2->timestamps = false;
      $changecountA2->where('id', 2)->update(['result1'=>$countA5, 'result2'=>$countA6, 'result3'=>$countA7, 'result4'=>$countA8]);
      $changecountA3 = new Game2;
      $changecountA3->timestamps = false;
      $changecountA3->where('id', 3)->update(['result1'=>$countA9, 'result2'=>$countA10, 'result3'=>$countA11, 'result4'=>$countA12]);
      $changecountA4 = new Game2;
      $changecountA4->timestamps = false;
      $changecountA4->where('id', 4)->update(['result1'=>$countA13, 'result2'=>$countA14, 'result3'=>$countA15, 'result4'=>$countA16]);
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
      $changecountB1 = new Game2;
      $changecountB1->timestamps = false;
      $changecountB1->where('id', 5)->update(['result1'=>$countB1, 'result2'=>$countB2, 'result3'=>$countB3, 'result4'=>$countB4]);
      $changecountB2 = new Game2;
      $changecountB2->timestamps = false;
      $changecountB2->where('id', 6)->update(['result1'=>$countB5, 'result2'=>$countB6, 'result3'=>$countB7, 'result4'=>$countB8]);
      $changecountB3 = new Game2;
      $changecountB3->timestamps = false;
      $changecountB3->where('id', 7)->update(['result1'=>$countB9, 'result2'=>$countB10, 'result3'=>$countB11, 'result4'=>$countB12]);
      $changecountB4 = new Game2;
      $changecountB4->timestamps = false;
      $changecountB4->where('id', 8)->update(['result1'=>$countB13, 'result2'=>$countB14, 'result3'=>$countB15, 'result4'=>$countB16]);
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
      $changecountC1 = new Game2;
      $changecountC1->timestamps = false;
      $changecountC1->where('id', 9)->update(['result1'=>$countC1, 'result2'=>$countC2, 'result3'=>$countC3, 'result4'=>$countC4]);
      $changecountC2 = new Game2;
      $changecountC2->timestamps = false;
      $changecountC2->where('id', 10)->update(['result1'=>$countC5, 'result2'=>$countC6, 'result3'=>$countC7, 'result4'=>$countC8]);
      $changecountC3 = new Game2;
      $changecountC3->timestamps = false;
      $changecountC3->where('id', 11)->update(['result1'=>$countC9, 'result2'=>$countC10, 'result3'=>$countC11, 'result4'=>$countC12]);
      $changecountC4 = new Game2;
      $changecountC4->timestamps = false;
      $changecountC4->where('id', 12)->update(['result1'=>$countC13, 'result2'=>$countC14, 'result3'=>$countC15, 'result4'=>$countC16]);
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
      $changecountD1 = new Game2;
      $changecountD1->timestamps = false;
      $changecountD1->where('id', 13)->update(['result1'=>$countD1, 'result2'=>$countD2, 'result3'=>$countD3, 'result4'=>$countD4]);
      $changecountD2 = new Game2;
      $changecountD2->timestamps = false;
      $changecountD2->where('id', 14)->update(['result1'=>$countD5, 'result2'=>$countD6, 'result3'=>$countD7, 'result4'=>$countD8]);
      $changecountD3 = new Game2;
      $changecountD3->timestamps = false;
      $changecountD3->where('id', 15)->update(['result1'=>$countD9, 'result2'=>$countD10, 'result3'=>$countD11, 'result4'=>$countD12]);
      $changecountD4 = new Game2;
      $changecountD4->timestamps = false;
      $changecountD4->where('id', 16)->update(['result1'=>$countD13, 'result2'=>$countD14, 'result3'=>$countD15, 'result4'=>$countD16]);
      $a1point_A = 0;
      $a1point_B = 0;
      // 勝ち点と得失点をteamテーブルに入れる
      // Aコート用
      if (intval($countA1) > intval($countA2) && intval($countA3) > intval($countA4)) {
        $a1point_A = 5;
        $a1point_B = 0;
      } elseif (intval($countA1) < intval($countA2) && intval($countA3) < intval($countA4)) {
        $a1point_A = 0;
        $a1point_B = 5;
      } elseif ((intval($countA1) > intval($countA2) && intval($countA3) < intval($countA4)) || (intval($countA1) < intval($countA2) && intval($countA3) > intval($countA4))) {
        if ((intval($countA1) + intval($countA3)) > (intval($countA2) + intval($countA4))) {
          $a1point_A = 3;
          $a1point_B = 1;
        } elseif ((intval($countA1) + intval($countA3)) < (intval($countA2) + intval($countA4))) {
          $a1point_A = 1;
          $a1point_B = 3;
        } else {
          $a1point_A = 2;
          $a1point_B = 2;
        }
      } else {
        $a1point_A = 0;
        $a1point_B = 0;
      }
      $a2point_A = 0;
      $a2point_B = 0;
      if (intval($countA5) > intval($countA6) && intval($countA7) > intval($countA8)) {
        $a2point_A = 5;
        $a2point_B = 0;
      } elseif (intval($countA5) < intval($countA6) && intval($countA7) < intval($countA8)) {
        $a2point_A = 0;
        $a2point_B = 5;
      } elseif ((intval($countA5) > intval($countA6) && intval($countA7) < intval($countA8)) || (intval($countA5) < intval($countA6) && intval($countA7) > intval($countA8))) {
        if ((intval($countA5) + intval($countA7)) > (intval($countA6) + intval($countA8))) {
          $a2point_A = 3;
          $a2point_B = 1;
        } elseif ((intval($countA5) + intval($countA7)) < (intval($countA6) + intval($countA8))) {
          $a2point_A = 1;
          $a2point_B = 3;
        } else {
          $a2point_A = 2;
          $a2point_B = 2;
        }
      } else {
        $a2point_A = 0;
        $a2point_B = 0;
      }
      $a3point_A = 0;
      $a3point_B = 0;
      if (intval($countA9) > intval($countA10) && intval($countA11) > intval($countA12)) {
        $a3point_A = 5;
        $a3point_B = 0;
      } elseif (intval($countA9) < intval($countA10) && intval($countA11) < intval($countA12)) {
        $a3point_A = 0;
        $a3point_B = 5;
      } elseif ((intval($countA9) > intval($countA10) && intval($countA11) < intval($countA12)) || (intval($countA9) < intval($countA10) && intval($countA11) > intval($countA12))) {
        if ((intval($countA9) + intval($countA11) )> (intval($countA10) + intval($countA12))) {
          $a3point_A = 3;
          $a3point_B = 1;
        } elseif ((intval($countA9) + intval($countA11) )< (intval($countA10) + intval($countA12))) {
          $a3point_A = 1;
          $a3point_B = 3;
        } else {
          $a3point_A = 2;
          $a3point_B = 2;
        }
      } else {
        $a3point_A = 0;
        $a3point_B = 0;
      }
      $a4point_A = 0;
      $a4point_B = 0;
      if (intval($countA13) > intval($countA14) && intval($countA15) > intval($countA16)) {
        $a4point_A = 5;
        $a4point_B = 0;
      } elseif (intval($countA13) < intval($countA14) && intval($countA15) < intval($countA16)) {
        $a4point_A = 0;
        $a4point_B = 5;
      } elseif ((intval($countA13) > intval($countA14) && intval($countA15) < intval($countA16)) || (intval($countA13) < intval($countA14) && intval($countA15) > intval($countA16))) {
        if ((intval($countA13) + intval($countA15)) > (intval($countA14) + intval($countA16))) {
          $a4point_A = 3;
          $a4point_B = 1;
        } elseif ((intval($countA13) + intval($countA15)) < (intval($countA14) + intval($countA16))) {
          $a4point_A = 1;
          $a4point_B = 3;
        } else {
          $a4point_A = 2;
          $a4point_B = 2;
        }
      } else {
        $a4point_A = 0;
        $a4point_B = 0;
      }
      $totalpoint = new Post;
      $totalpoint->timestamps =false;
      $totalpoint->where('mid_court', "A")->where('mid_number', 1)->update(['mid_score'=>((intval($countA1) + intval($countA3) + intval($countA9) + intval($countA11))-(intval($countA2) + intval($countA4) + intval($countA10) + intval($countA12))), 'mid_point'=>($a1point_A + $a3point_A)]);
      $totalpoint->where('mid_court', "A")->where('mid_number', 2)->update(['mid_score'=>((intval($countA2) + intval($countA4) + intval($countA13) + intval($countA15))-(intval($countA1) + intval($countA3) + intval($countA14) + intval($countA16))), 'mid_point'=>($a1point_B + $a4point_A)]);
      $totalpoint->where('mid_court', "A")->where('mid_number', 3)->update(['mid_score'=>((intval($countA5) + intval($countA7) + intval($countA10) + intval($countA12))-(intval($countA6) + intval($countA8) + intval($countA9) + intval($countA11))), 'mid_point'=>($a2point_A + $a3point_B)]);
      $totalpoint->where('mid_court', "A")->where('mid_number', 4)->update(['mid_score'=>((intval($countA6) + intval($countA8) + intval($countA14) + intval($countA16))-(intval($countA5) + intval($countA7) + intval($countA13) + intval($countA15))), 'mid_point'=>($a2point_B + $a4point_B)]);
      // 勝ち点と得失点をteamテーブルに入れる
      // Bコート用
      if (intval($countB1) > intval($countB2) && intval($countB3) > intval($countB4)) {
        $b1point_A = 5;
        $b1point_B = 0;
      } elseif (intval($countB1) < intval($countB2) && intval($countB3) < intval($countB4)) {
        $b1point_A = 0;
        $b1point_B = 5;
      } elseif ((intval($countB1) > intval($countB2) && intval($countB3) < intval($countB4)) || (intval($countB1) < intval($countB2) && intval($countB3) > intval($countB4))) {
        if ((intval($countB1) + intval($countB3)) > (intval($countB2) + intval($countB4))) {
          $b1point_A = 3;
          $b1point_B = 1;
        } elseif ((intval($countB1) + intval($countB3)) < (intval($countB2) + intval($countB4))) {
          $b1point_A = 1;
          $b1point_B = 3;
        } else {
          $b1point_A = 2;
          $b1point_B = 2;
        }
      } else {
        $b1point_A = 0;
        $b1point_B = 0;
      }
      $b2point_A = 0;
      $b2point_B = 0;
      if (intval($countB5) > intval($countB6) && intval($countB7) > intval($countB8)) {
        $b2point_A = 5;
        $b2point_B = 0;
      } elseif (intval($countB5) < intval($countB6) && intval($countB7) < intval($countB8)) {
        $b2point_A = 0;
        $b2point_B = 5;
      } elseif ((intval($countB5) > intval($countB6) && intval($countB7) < intval($countB8)) || (intval($countB5) < intval($countB6) && intval($countB7) > intval($countB8))) {
        if ((intval($countB5) + intval($countB7)) > (intval($countB6) + intval($countB8))) {
          $b2point_A = 3;
          $b2point_B = 1;
        } elseif ((intval($countB5) + intval($countB7)) < (intval($countB6) + intval($countB8))) {
          $b2point_A = 1;
          $b2point_B = 3;
        } else {
          $b2point_A = 2;
          $b2point_B = 2;
        }
      } else {
        $b2point_A = 0;
        $b2point_B = 0;
      }
      $b3point_A = 0;
      $b3point_B = 0;
      if (intval($countB9) > intval($countB10) && intval($countB11) > intval($countB12)) {
        $b3point_A = 5;
        $b3point_B = 0;
      } elseif (intval($countB9) < intval($countB10) && intval($countB11) < intval($countB12)) {
        $b3point_A = 0;
        $b3point_B = 5;
      } elseif ((intval($countB9) > intval($countB10) && intval($countB11) < intval($countB12)) || (intval($countB9) < intval($countB10) && intval($countB11) > intval($countB12))) {
        if ((intval($countB9) + intval($countB11) )> (intval($countB10) + intval($countB12))) {
          $b3point_A = 3;
          $b3point_B = 1;
        } elseif ((intval($countB9) + intval($countB11) )< (intval($countB10) + intval($countB12))) {
          $b3point_A = 1;
          $b3point_B = 3;
        } else {
          $b3point_A = 2;
          $b3point_B = 2;
        }
      } else {
        $b3point_A = 0;
        $b3point_B = 0;
      }
      $b4point_A = 0;
      $b4point_B = 0;
      if (intval($countB13) > intval($countB14) && intval($countB15) > intval($countB16)) {
        $b4point_A = 5;
        $b4point_B = 0;
      } elseif (intval($countB13) < intval($countB14) && intval($countB15) < intval($countB16)) {
        $b4point_A = 0;
        $b4point_B = 5;
      } elseif ((intval($countB13) > intval($countB14) && intval($countB15) < intval($countB16)) || (intval($countB13) < intval($countB14) && intval($countB15) > intval($countB16))) {
        if ((intval($countB13) + intval($countB15)) > (intval($countB14) + intval($countB16))) {
          $b4point_A = 3;
          $b4point_B = 1;
        } elseif ((intval($countB13) + intval($countB15)) < (intval($countB14) + intval($countB16))) {
          $b4point_A = 1;
          $b4point_B = 3;
        } else {
          $b4point_A = 2;
          $b4point_B = 2;
        }
      } else {
        $b4point_A = 0;
        $b4point_B = 0;
      }
      $totalpoint = new Post;
      $totalpoint->timestamps =false;
      $totalpoint->where('mid_court', "B")->where('mid_number', 1)->update(['mid_score'=>((intval($countB1) + intval($countB3) + intval($countB9) + intval($countB11))-(intval($countB2) + intval($countB4) + intval($countB10) + intval($countB12))), 'mid_point'=>($b1point_A + $b3point_A)]);
      $totalpoint->where('mid_court', "B")->where('mid_number', 2)->update(['mid_score'=>((intval($countB2) + intval($countB4) + intval($countB13) + intval($countB15))-(intval($countB1) + intval($countB3) + intval($countB14) + intval($countB16))), 'mid_point'=>($b1point_B + $b4point_A)]);
      $totalpoint->where('mid_court', "B")->where('mid_number', 3)->update(['mid_score'=>((intval($countB5) + intval($countB7) + intval($countB10) + intval($countB12))-(intval($countB6) + intval($countB8) + intval($countB9) + intval($countB11))), 'mid_point'=>($b2point_A + $b3point_B)]);
      $totalpoint->where('mid_court', "B")->where('mid_number', 4)->update(['mid_score'=>((intval($countB6) + intval($countB8) + intval($countB14) + intval($countB16))-(intval($countB5) + intval($countB7) + intval($countB13) + intval($countB15))), 'mid_point'=>($b2point_B + $b4point_B)]);
      // 勝ち点と得失点をteamテーブルに入れる
      // Cコート用
      if (intval($countC1) > intval($countC2) && intval($countC3) > intval($countC4)) {
        $c1point_A = 5;
        $c1point_B = 0;
      } elseif (intval($countC1) < intval($countC2) && intval($countC3) < intval($countC4)) {
        $c1point_A = 0;
        $c1point_B = 5;
      } elseif ((intval($countC1) > intval($countC2) && intval($countC3) < intval($countC4)) || (intval($countC1) < intval($countC2) && intval($countC3) > intval($countC4))) {
        if ((intval($countC1) + intval($countC3)) > (intval($countC2) + intval($countC4))) {
          $c1point_A = 3;
          $c1point_B = 1;
        } elseif ((intval($countC1) + intval($countC3)) < (intval($countC2) + intval($countC4))) {
          $c1point_A = 1;
          $c1point_B = 3;
        } else {
          $c1point_A = 2;
          $c1point_B = 2;
        }
      } else {
        $c1point_A = 0;
        $c1point_B = 0;
      }
      $c2point_A = 0;
      $c2point_B = 0;
      if (intval($countC5) > intval($countC6) && intval($countC7) > intval($countC8)) {
        $c2point_A = 5;
        $c2point_B = 0;
      } elseif (intval($countC5) < intval($countC6) && intval($countC7) < intval($countC8)) {
        $c2point_A = 0;
        $c2point_B = 5;
      } elseif ((intval($countC5) > intval($countC6) && intval($countC7) < intval($countC8)) || (intval($countC5) < intval($countC6) && intval($countC7) > intval($countC8))) {
        if ((intval($countC5) + intval($countC7)) > (intval($countC6) + intval($countC8))) {
          $c2point_A = 3;
          $c2point_B = 1;
        } elseif ((intval($countC5) + intval($countC7)) < (intval($countC6) + intval($countC8))) {
          $c2point_A = 1;
          $c2point_B = 3;
        } else {
          $c2point_A = 2;
          $c2point_B = 2;
        }
      } else {
        $c2point_A = 0;
        $c2point_B = 0;
      }
      $c3point_A = 0;
      $c3point_B = 0;
      if (intval($countC9) > intval($countC10) && intval($countC11) > intval($countC12)) {
        $c3point_A = 5;
        $c3point_B = 0;
      } elseif (intval($countC9) < intval($countC10) && intval($countC11) < intval($countC12)) {
        $c3point_A = 0;
        $c3point_B = 5;
      } elseif ((intval($countC9) > intval($countC10) && intval($countC11) < intval($countC12)) || (intval($countC9) < intval($countC10) && intval($countC11) > intval($countC12))) {
        if ((intval($countC9) + intval($countC11) )> (intval($countC10) + intval($countC12))) {
          $c3point_A = 3;
          $c3point_B = 1;
        } elseif ((intval($countC9) + intval($countC11) )< (intval($countC10) + intval($countC12))) {
          $c3point_A = 1;
          $c3point_B = 3;
        } else {
          $c3point_A = 2;
          $c3point_B = 2;
        }
      } else {
        $c3point_A = 0;
        $c3point_B = 0;
      }
      $c4point_A = 0;
      $c4point_B = 0;
      if (intval($countC13) > intval($countC14) && intval($countC15) > intval($countC16)) {
        $c4point_A = 5;
        $c4point_B = 0;
      } elseif (intval($countC13) < intval($countC14) && intval($countC15) < intval($countC16)) {
        $c4point_A = 0;
        $c4point_B = 5;
      } elseif ((intval($countC13) > intval($countC14) && intval($countC15) < intval($countC16)) || (intval($countC13) < intval($countC14) && intval($countC15) > intval($countC16))) {
        if ((intval($countC13) + intval($countC15)) > (intval($countC14) + intval($countC16))) {
          $c4point_A = 3;
          $c4point_B = 1;
        } elseif ((intval($countC13) + intval($countC15)) < (intval($countC14) + intval($countC16))) {
          $c4point_A = 1;
          $c4point_B = 3;
        } else {
          $c4point_A = 2;
          $c4point_B = 2;
        }
      } else {
        $c4point_A = 0;
        $c4point_B = 0;
      }
      $totalpoint = new Post;
      $totalpoint->timestamps =false;
      $totalpoint->where('mid_court', "C")->where('mid_number', 1)->update(['mid_score'=>((intval($countC1) + intval($countC3) + intval($countC9) + intval($countC11))-(intval($countC2) + intval($countC4) + intval($countC10) + intval($countC12))), 'mid_point'=>($c1point_A + $c3point_A)]);
      $totalpoint->where('mid_court', "C")->where('mid_number', 2)->update(['mid_score'=>((intval($countC2) + intval($countC4) + intval($countC13) + intval($countC15))-(intval($countC1) + intval($countC3) + intval($countC14) + intval($countC16))), 'mid_point'=>($c1point_B + $c4point_A)]);
      $totalpoint->where('mid_court', "C")->where('mid_number', 3)->update(['mid_score'=>((intval($countC5) + intval($countC7) + intval($countC10) + intval($countC12))-(intval($countC6) + intval($countC8) + intval($countC9) + intval($countC11))), 'mid_point'=>($c2point_A + $c3point_B)]);
      $totalpoint->where('mid_court', "C")->where('mid_number', 4)->update(['mid_score'=>((intval($countC6) + intval($countC8) + intval($countC14) + intval($countC16))-(intval($countC5) + intval($countC7) + intval($countC13) + intval($countC15))), 'mid_point'=>($c2point_B + $c4point_B)]);
      // 勝ち点と得失点をteamテーブルに入れる
      // Dコート用
      if (intval($countD1) > intval($countD2) && intval($countD3) > intval($countD4)) {
        $d1point_A = 5;
        $d1point_B = 0;
      } elseif (intval($countD1) < intval($countD2) && intval($countD3) < intval($countD4)) {
        $d1point_A = 0;
        $d1point_B = 5;
      } elseif ((intval($countD1) > intval($countD2) && intval($countD3) < intval($countD4)) || (intval($countD1) < intval($countD2) && intval($countD3) > intval($countD4))) {
        if ((intval($countD1) + intval($countD3)) > (intval($countD2) + intval($countD4))) {
          $d1point_A = 3;
          $d1point_B = 1;
        } elseif ((intval($countD1) + intval($countD3)) < (intval($countD2) + intval($countD4))) {
          $d1point_A = 1;
          $d1point_B = 3;
        } else {
          $d1point_A = 2;
          $d1point_B = 2;
        }
      } else {
        $d1point_A = 0;
        $d1point_B = 0;
      }
      $d2point_A = 0;
      $d2point_B = 0;
      if (intval($countD5) > intval($countD6) && intval($countD7) > intval($countD8)) {
        $d2point_A = 5;
        $d2point_B = 0;
      } elseif (intval($countD5) < intval($countD6) && intval($countD7) < intval($countD8)) {
        $d2point_A = 0;
        $d2point_B = 5;
      } elseif ((intval($countD5) > intval($countD6) && intval($countD7) < intval($countD8)) || (intval($countD5) < intval($countD6) && intval($countD7) > intval($countD8))) {
        if ((intval($countD5) + intval($countD7)) > (intval($countD6) + intval($countD8))) {
          $d2point_A = 3;
          $d2point_B = 1;
        } elseif ((intval($countD5) + intval($countD7)) < (intval($countD6) + intval($countD8))) {
          $d2point_A = 1;
          $d2point_B = 3;
        } else {
          $d2point_A = 2;
          $d2point_B = 2;
        }
      } else {
        $d2point_A = 0;
        $d2point_B = 0;
      }
      $d3point_A = 0;
      $d3point_B = 0;
      if (intval($countD9) > intval($countD10) && intval($countD11) > intval($countD12)) {
        $d3point_A = 5;
        $d3point_B = 0;
      } elseif (intval($countD9) < intval($countD10) && intval($countD11) < intval($countD12)) {
        $d3point_A = 0;
        $d3point_B = 5;
      } elseif ((intval($countD9) > intval($countD10) && intval($countD11) < intval($countD12)) || (intval($countD9) < intval($countD10) && intval($countD11) > intval($countD12))) {
        if ((intval($countD9) + intval($countD11) )> (intval($countD10) + intval($countD12))) {
          $d3point_A = 3;
          $d3point_B = 1;
        } elseif ((intval($countD9) + intval($countD11) )< (intval($countD10) + intval($countD12))) {
          $d3point_A = 1;
          $d3point_B = 3;
        } else {
          $d3point_A = 2;
          $d3point_B = 2;
        }
      } else {
        $d3point_A = 0;
        $d3point_B = 0;
      }
      $d4point_A = 0;
      $d4point_B = 0;
      if (intval($countD13) > intval($countD14) && intval($countD15) > intval($countD16)) {
        $d4point_A = 5;
        $d4point_B = 0;
      } elseif (intval($countD13) < intval($countD14) && intval($countD15) < intval($countD16)) {
        $d4point_A = 0;
        $d4point_B = 5;
      } elseif ((intval($countD13) > intval($countD14) && intval($countD15) < intval($countD16)) || (intval($countD13) < intval($countD14) && intval($countD15) > intval($countD16))) {
        if ((intval($countD13) + intval($countD15)) > (intval($countD14) + intval($countD16))) {
          $d4point_A = 3;
          $d4point_B = 1;
        } elseif ((intval($countD13) + intval($countD15)) < (intval($countD14) + intval($countD16))) {
          $d4point_A = 1;
          $d4point_B = 3;
        } else {
          $d4point_A = 2;
          $d4point_B = 2;
        }
      } else {
        $d4point_A = 0;
        $d4point_B = 0;
      }
      $totalpoint = new Post;
      $totalpoint->timestamps =false;
      $totalpoint->where('mid_court', "D")->where('mid_number', 1)->update(['mid_score'=>((intval($countD1) + intval($countD3) + intval($countD9) + intval($countD11))-(intval($countD2) + intval($countD4) + intval($countD10) + intval($countD12))), 'mid_point'=>($d1point_A + $d3point_A)]);
      $totalpoint->where('mid_court', "D")->where('mid_number', 2)->update(['mid_score'=>((intval($countD2) + intval($countD4) + intval($countD13) + intval($countD15))-(intval($countD1) + intval($countD3) + intval($countD14) + intval($countD16))), 'mid_point'=>($d1point_B + $d4point_A)]);
      $totalpoint->where('mid_court', "D")->where('mid_number', 3)->update(['mid_score'=>((intval($countD5) + intval($countD7) + intval($countD10) + intval($countD12))-(intval($countD6) + intval($countD8) + intval($countD9) + intval($countD11))), 'mid_point'=>($d2point_A + $d3point_B)]);
      $totalpoint->where('mid_court', "D")->where('mid_number', 4)->update(['mid_score'=>((intval($countD6) + intval($countD8) + intval($countD14) + intval($countD16))-(intval($countD5) + intval($countD7) + intval($countD13) + intval($countD15))), 'mid_point'=>($d2point_B + $d4point_B)]);
      // 総合点を入力
      // idが1のチームここから
      $prepoint1 = $totalpoint::where('id', 1)->value('pre_point');
      $midpoint1 = $totalpoint::where('id', 1)->value('mid_point');
      $totalpoint->where('id', 1)->update(['sum_point'=>(intval($prepoint1)+intval($midpoint1))]);
      $prescore1 = $totalpoint::where('id', 1)->value('pre_score');
      $midscore1 = $totalpoint::where('id', 1)->value('mid_score');
      $totalpoint->where('id', 1)->update(['sum_score'=>(intval($prescore1)+intval($midscore1))]);
      // idが2のチームここから
      $prepoint2 = $totalpoint::where('id', 2)->value('pre_point');
      $midpoint2 = $totalpoint::where('id', 2)->value('mid_point');
      $totalpoint->where('id', 2)->update(['sum_point'=>(intval($prepoint2)+intval($midpoint2))]);
      $prescore2 = $totalpoint::where('id', 2)->value('pre_score');
      $midscore2 = $totalpoint::where('id', 2)->value('mid_score');
      $totalpoint->where('id', 2)->update(['sum_score'=>(intval($prescore2)+intval($midscore2))]);
      // idが3のチームここから
      $prepoint3 = $totalpoint::where('id', 3)->value('pre_point');
      $midpoint3 = $totalpoint::where('id', 3)->value('mid_point');
      $totalpoint->where('id', 3)->update(['sum_point'=>(intval($prepoint3)+intval($midpoint3))]);
      $prescore3 = $totalpoint::where('id', 3)->value('pre_score');
      $midscore3 = $totalpoint::where('id', 3)->value('mid_score');
      $totalpoint->where('id', 3)->update(['sum_score'=>(intval($prescore3)+intval($midscore3))]);
      // idが4のチームここから
      $prepoint4 = $totalpoint::where('id', 4)->value('pre_point');
      $midpoint4 = $totalpoint::where('id', 4)->value('mid_point');
      $totalpoint->where('id', 4)->update(['sum_point'=>(intval($prepoint4)+intval($midpoint4))]);
      $prescore4 = $totalpoint::where('id', 4)->value('pre_score');
      $midscore4 = $totalpoint::where('id', 4)->value('mid_score');
      $totalpoint->where('id', 4)->update(['sum_score'=>(intval($prescore4)+intval($midscore4))]);
      // idが5のチームここから
      $prepoint5 = $totalpoint::where('id', 5)->value('pre_point');
      $midpoint5 = $totalpoint::where('id', 5)->value('mid_point');
      $totalpoint->where('id', 5)->update(['sum_point'=>(intval($prepoint5)+intval($midpoint5))]);
      $prescore5 = $totalpoint::where('id', 5)->value('pre_score');
      $midscore5 = $totalpoint::where('id', 5)->value('mid_score');
      $totalpoint->where('id', 5)->update(['sum_score'=>(intval($prescore5)+intval($midscore5))]);
      // idが6のチームここから
      $prepoint6 = $totalpoint::where('id', 6)->value('pre_point');
      $midpoint6 = $totalpoint::where('id', 6)->value('mid_point');
      $totalpoint->where('id', 6)->update(['sum_point'=>(intval($prepoint6)+intval($midpoint6))]);
      $prescore6 = $totalpoint::where('id', 6)->value('pre_score');
      $midscore6 = $totalpoint::where('id', 6)->value('mid_score');
      $totalpoint->where('id', 6)->update(['sum_score'=>(intval($prescore6)+intval($midscore6))]);
      // idが7のチームここから
      $prepoint7 = $totalpoint::where('id', 7)->value('pre_point');
      $midpoint7 = $totalpoint::where('id', 7)->value('mid_point');
      $totalpoint->where('id', 7)->update(['sum_point'=>(intval($prepoint7)+intval($midpoint7))]);
      $prescore7 = $totalpoint::where('id', 7)->value('pre_score');
      $midscore7 = $totalpoint::where('id', 7)->value('mid_score');
      $totalpoint->where('id', 7)->update(['sum_score'=>(intval($prescore7)+intval($midscore7))]);
      // idが8のチームここから
      $prepoint8 = $totalpoint::where('id', 8)->value('pre_point');
      $midpoint8 = $totalpoint::where('id', 8)->value('mid_point');
      $totalpoint->where('id', 8)->update(['sum_point'=>(intval($prepoint8)+intval($midpoint8))]);
      $prescore8 = $totalpoint::where('id', 8)->value('pre_score');
      $midscore8 = $totalpoint::where('id', 8)->value('mid_score');
      $totalpoint->where('id', 8)->update(['sum_score'=>(intval($prescore8)+intval($midscore8))]);
      // idが9のチームここから
      $prepoint9 = $totalpoint::where('id', 9)->value('pre_point');
      $midpoint9 = $totalpoint::where('id', 9)->value('mid_point');
      $totalpoint->where('id', 9)->update(['sum_point'=>(intval($prepoint9)+intval($midpoint9))]);
      $prescore9 = $totalpoint::where('id', 9)->value('pre_score');
      $midscore9 = $totalpoint::where('id', 9)->value('mid_score');
      $totalpoint->where('id', 9)->update(['sum_score'=>(intval($prescore9)+intval($midscore9))]);
      // idが10のチームここから
      $prepoint10 = $totalpoint::where('id', 10)->value('pre_point');
      $midpoint10 = $totalpoint::where('id', 10)->value('mid_point');
      $totalpoint->where('id', 10)->update(['sum_point'=>(intval($prepoint10)+intval($midpoint10))]);
      $prescore10 = $totalpoint::where('id', 10)->value('pre_score');
      $midscore10 = $totalpoint::where('id', 10)->value('mid_score');
      $totalpoint->where('id', 10)->update(['sum_score'=>(intval($prescore10)+intval($midscore10))]);
      // idが11のチームここから
      $prepoint11 = $totalpoint::where('id', 11)->value('pre_point');
      $midpoint11 = $totalpoint::where('id', 11)->value('mid_point');
      $totalpoint->where('id', 11)->update(['sum_point'=>(intval($prepoint11)+intval($midpoint11))]);
      $prescore11 = $totalpoint::where('id', 11)->value('pre_score');
      $midscore11 = $totalpoint::where('id', 11)->value('mid_score');
      $totalpoint->where('id', 11)->update(['sum_score'=>(intval($prescore11)+intval($midscore11))]);
      // idが12のチームここから
      $prepoint12 = $totalpoint::where('id', 12)->value('pre_point');
      $midpoint12 = $totalpoint::where('id', 12)->value('mid_point');
      $totalpoint->where('id', 12)->update(['sum_point'=>(intval($prepoint12)+intval($midpoint12))]);
      $prescore12 = $totalpoint::where('id', 12)->value('pre_score');
      $midscore12 = $totalpoint::where('id', 12)->value('mid_score');
      $totalpoint->where('id', 12)->update(['sum_score'=>(intval($prescore12)+intval($midscore12))]);
      // idが13のチームここから
      $prepoint13 = $totalpoint::where('id', 13)->value('pre_point');
      $midpoint13 = $totalpoint::where('id', 13)->value('mid_point');
      $totalpoint->where('id', 13)->update(['sum_point'=>(intval($prepoint13)+intval($midpoint13))]);
      $prescore13 = $totalpoint::where('id', 13)->value('pre_score');
      $midscore13 = $totalpoint::where('id', 13)->value('mid_score');
      $totalpoint->where('id', 13)->update(['sum_score'=>(intval($prescore13)+intval($midscore13))]);
      // idが14のチームここから
      $prepoint14 = $totalpoint::where('id', 14)->value('pre_point');
      $midpoint14 = $totalpoint::where('id', 14)->value('mid_point');
      $totalpoint->where('id', 14)->update(['sum_point'=>(intval($prepoint14)+intval($midpoint14))]);
      $prescore14 = $totalpoint::where('id', 14)->value('pre_score');
      $midscore14 = $totalpoint::where('id', 14)->value('mid_score');
      $totalpoint->where('id', 14)->update(['sum_score'=>(intval($prescore14)+intval($midscore14))]);
      // idが15のチームここから
      $prepoint15 = $totalpoint::where('id', 15)->value('pre_point');
      $midpoint15 = $totalpoint::where('id', 15)->value('mid_point');
      $totalpoint->where('id', 15)->update(['sum_point'=>(intval($prepoint15)+intval($midpoint15))]);
      $prescore15 = $totalpoint::where('id', 15)->value('pre_score');
      $midscore15 = $totalpoint::where('id', 15)->value('mid_score');
      $totalpoint->where('id', 15)->update(['sum_score'=>(intval($prescore15)+intval($midscore15))]);
      // idが16のチームここから
      $prepoint16 = $totalpoint::where('id', 16)->value('pre_point');
      $midpoint16 = $totalpoint::where('id', 16)->value('mid_point');
      $totalpoint->where('id', 16)->update(['sum_point'=>(intval($prepoint16)+intval($midpoint16))]);
      $prescore16 = $totalpoint::where('id', 16)->value('pre_score');
      $midscore16 = $totalpoint::where('id', 16)->value('mid_score');
      $totalpoint->where('id', 16)->update(['sum_score'=>(intval($prescore16)+intval($midscore16))]);
    }
}
