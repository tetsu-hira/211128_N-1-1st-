<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Team;
use App\Models\First;
use App\Models\Second;
use App\Models\Third;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; // DB ファサードを use する


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
    $id = $request->input('id');
    $name = $request->input('name');
    $add = new Team;
    $add->id = $id;
    $add->name = $name; 
    $add->timestamps = false;
    $add->save();
    return redirect('/');
  }
  // チーム削除機能
  public function delTeam(Request $request)
  {
    $id = $request->input('id');
    $del = new Team;
    $del->where('id', $id)->delete();
    return redirect('/');
  }
  // チーム登録機能
  public function addPost(Request $request)
  {
    $id = $request->input('id');
    $name = $request->input('name');
    $add = new Post;
    $add->id = $id;
    $add->name = $name;
    $add->timestamps = false;
    $add->save();
    return redirect('/');
  }
  // チーム削除機能
  public function delPost(Request $request)
  {
    $id = $request->input('id');
    $del = new Post;
    $del->where('id', $id)->delete();
    return redirect('/');
  }
  // 一般部門のくじ引き番号を登録
  public function changecourt(Request $request)
  {
      // header("Access-Control-Allow-Origin: *");  //CORS
      // header("Access-Control-Allow-Headers: Origin, X-Requested-With");
      $id = $request->input('id');
      $court = $request->input('court');
      $changecourt = new Team;
      $changecourt->timestamps =false;
      $changecourt->where('id', $id)->update(['number'=>$court]);
      // $changecourt->save();
  }
  // 招待部門のくじ引き番号を登録
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

  // 総合結果入力用
  public function getResult() {
    $posts = DB::table('posts')->get();
    // $team = $posts->get();
    $getResult  = new Post;
    $getResult->timestamps = false;
    $prePoint1 = $posts[0]->pre_point;
    $prePoint2 = $posts[1]->pre_point;
    $prePoint3 = $posts[2]->pre_point;
    $prePoint4 = $posts[3]->pre_point;
    $prePoint5 = $posts[4]->pre_point;
    $prePoint6 = $posts[5]->pre_point;
    $prePoint7 = $posts[6]->pre_point;
    $prePoint8 = $posts[7]->pre_point;
    $prePoint9 = $posts[8]->pre_point;
    $midPoint1 = $posts[0]->mid_point;
    $midPoint2 = $posts[1]->mid_point;
    $midPoint3 = $posts[2]->mid_point;
    $midPoint4 = $posts[3]->mid_point;
    $midPoint5 = $posts[4]->mid_point;
    $midPoint6 = $posts[5]->mid_point;
    $midPoint7 = $posts[6]->mid_point;
    $midPoint8 = $posts[7]->mid_point;
    $midPoint9 = $posts[8]->mid_point;
    $lasPoint1 = $posts[0]->las_point;
    $lasPoint2 = $posts[1]->las_point;
    $lasPoint3 = $posts[2]->las_point;
    $lasPoint4 = $posts[3]->las_point;
    $lasPoint5 = $posts[4]->las_point;
    $lasPoint6 = $posts[5]->las_point;
    $lasPoint7 = $posts[6]->las_point;
    $lasPoint8 = $posts[7]->las_point;
    $lasPoint9 = $posts[8]->las_point;
    $getResult->where('id', 1)->update(['sum_point'=>($prePoint1 + $midPoint1 + $lasPoint1)]);
    $getResult->where('id', 2)->update(['sum_point'=>($prePoint2 + $midPoint2 + $lasPoint2)]);
    $getResult->where('id', 3)->update(['sum_point'=>($prePoint3 + $midPoint3 + $lasPoint3)]);
    $getResult->where('id', 4)->update(['sum_point'=>($prePoint4 + $midPoint4 + $lasPoint4)]);
    $getResult->where('id', 5)->update(['sum_point'=>($prePoint5 + $midPoint5 + $lasPoint5)]);
    $getResult->where('id', 6)->update(['sum_point'=>($prePoint6 + $midPoint6 + $lasPoint6)]);
    $getResult->where('id', 7)->update(['sum_point'=>($prePoint7 + $midPoint7 + $lasPoint7)]);
    $getResult->where('id', 8)->update(['sum_point'=>($prePoint8 + $midPoint8 + $lasPoint8)]);
    $getResult->where('id', 9)->update(['sum_point'=>($prePoint9 + $midPoint9 + $lasPoint9)]);
    return redirect('/');
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
    $countA17 = $request->input('countA17');
    $countA18 = $request->input('countA18');
    $countA19 = $request->input('countA19');
    $countA20 = $request->input('countA20');
    $countA21 = $request->input('countA21');
    $countA22 = $request->input('countA22');
    $countA23 = $request->input('countA23');
    $countA24 = $request->input('countA24');
    $countA25 = $request->input('countA25');
    $countA26 = $request->input('countA26');
    $countA27 = $request->input('countA27');
    $countA28 = $request->input('countA28');
    $countA29 = $request->input('countA29');
    $countA30 = $request->input('countA30');
    $countA31 = $request->input('countA31');
    $countA32 = $request->input('countA32');
    $countA33 = $request->input('countA33');
    $countA34 = $request->input('countA34');
    $countA35 = $request->input('countA35');
    $countA36 = $request->input('countA36');
    $countA37 = $request->input('countA37');
    $countA38 = $request->input('countA38');
    $countA39 = $request->input('countA39');
    $countA40 = $request->input('countA40');
    $countA41 = $request->input('countA41');
    $countA42 = $request->input('countA42');
    $countA43 = $request->input('countA43');
    $countA44 = $request->input('countA44');
    $countA45 = $request->input('countA45');
    $countA46 = $request->input('countA46');
    $countA47 = $request->input('countA47');
    $countA48 = $request->input('countA48');

    $changecountA1 = new First;
    $changecountA1->timestamps = false;
    $changecountA1->where('id', 1)->update(['result1'=>$countA1, 'result2'=>$countA2, 'result3'=>$countA3, 'result4'=>$countA4]);
    $changecountA2 = new First;
    $changecountA2->timestamps = false;
    $changecountA2->where('id', 2)->update(['result1'=>$countA5, 'result2'=>$countA6, 'result3'=>$countA7, 'result4'=>$countA8]);
    $changecountA3 = new First;
    $changecountA3->timestamps = false;
    $changecountA3->where('id', 3)->update(['result1'=>$countA9, 'result2'=>$countA10, 'result3'=>$countA11, 'result4'=>$countA12]);
    $changecountA4 = new First;
    $changecountA4->timestamps = false;
    $changecountA4->where('id', 4)->update(['result1'=>$countA13, 'result2'=>$countA14, 'result3'=>$countA15, 'result4'=>$countA16]);
    $changecountA5 = new First;
    $changecountA5->timestamps = false;
    $changecountA5->where('id', 5)->update(['result1'=>$countA17, 'result2'=>$countA18, 'result3'=>$countA19, 'result4'=>$countA20]);
    $changecountA6 = new First;
    $changecountA6->timestamps = false;
    $changecountA6->where('id', 6)->update(['result1'=>$countA21, 'result2'=>$countA22, 'result3'=>$countA23, 'result4'=>$countA24]);
    $changecountA7 = new First;
    $changecountA7->timestamps = false;
    $changecountA7->where('id', 7)->update(['result1'=>$countA25, 'result2'=>$countA26, 'result3'=>$countA27, 'result4'=>$countA28]);
    $changecountA8 = new First;
    $changecountA8->timestamps = false;
    $changecountA8->where('id', 8)->update(['result1'=>$countA29, 'result2'=>$countA30, 'result3'=>$countA31, 'result4'=>$countA32]);
    $changecountA9 = new First;
    $changecountA9->timestamps = false;
    $changecountA9->where('id', 9)->update(['result1'=>$countA33, 'result2'=>$countA34, 'result3'=>$countA35, 'result4'=>$countA36]);
    $changecountA10 = new First;
    $changecountA10->timestamps = false;
    $changecountA10->where('id', 10)->update(['result1'=>$countA37, 'result2'=>$countA38, 'result3'=>$countA39, 'result4'=>$countA40]);
    $changecountA11 = new First;
    $changecountA11->timestamps = false;
    $changecountA11->where('id', 11)->update(['result1'=>$countA41, 'result2'=>$countA42, 'result3'=>$countA43, 'result4'=>$countA44]);
    $changecountA12 = new First;
    $changecountA12->timestamps = false;
    $changecountA12->where('id', 12)->update(['result1'=>$countA45, 'result2'=>$countA46, 'result3'=>$countA47, 'result4'=>$countA48]);

    // 勝ち点と得失点をteamテーブルに入れる
    // Aコート用
    $a1point_A = 0;
    $a1point_B = 0;
    if (intval($countA1) > intval($countA2) && intval($countA3) > intval($countA4)) {
      $a1point_A = 3;
      $a1point_B = 0;
    } elseif (intval($countA1) < intval($countA2) && intval($countA3) < intval($countA4)) {
      $a1point_A = 0;
      $a1point_B = 3;
    } elseif ((intval($countA1) > intval($countA2) && intval($countA3) < intval($countA4)) || (intval($countA1) < intval($countA2) && intval($countA3) > intval($countA4))) {
      if ((intval($countA1) + intval($countA3)) > (intval($countA2) + intval($countA4))) {
        $a1point_A = 2;
        $a1point_B = 1;
      } elseif ((intval($countA1) + intval($countA3)) < (intval($countA2) + intval($countA4))) {
        $a1point_A = 1;
        $a1point_B = 2;
      } else {
        $a1point_A = 1;
        $a1point_B = 1;
      }
    } else {
      $a1point_A = 0;
      $a1point_B = 0;
    }
    $a2point_A = 0;
    $a2point_B = 0;
    if (intval($countA5) > intval($countA6) && intval($countA7) > intval($countA8)) {
      $a2point_A = 3;
      $a2point_B = 0;
    } elseif (intval($countA5) < intval($countA6) && intval($countA7) < intval($countA8)) {
      $a2point_A = 0;
      $a2point_B = 3;
    } elseif ((intval($countA5) > intval($countA6) && intval($countA7) < intval($countA8)) || (intval($countA5) < intval($countA6) && intval($countA7) > intval($countA8))) {
      if ((intval($countA5) + intval($countA7)) > (intval($countA6) + intval($countA8))) {
        $a2point_A = 2;
        $a2point_B = 1;
      } elseif ((intval($countA5) + intval($countA7)) < (intval($countA6) + intval($countA8))) {
        $a2point_A = 1;
        $a2point_B = 2;
      } else {
        $a2point_A = 1;
        $a2point_B = 1;
      }
    } else {
      $a2point_A = 0;
      $a2point_B = 0;
    }
    $a3point_A = 0;
    $a3point_B = 0;
    if (intval($countA9) > intval($countA10) && intval($countA11) > intval($countA12)) {
      $a3point_A = 3;
      $a3point_B = 0;
    } elseif (intval($countA9) < intval($countA10) && intval($countA11) < intval($countA12)) {
      $a3point_A = 0;
      $a3point_B = 3;
    } elseif ((intval($countA9) > intval($countA10) && intval($countA11) < intval($countA12)) || (intval($countA9) < intval($countA10) && intval($countA11) > intval($countA12))) {
      if ((intval($countA9) + intval($countA11) )> (intval($countA10) + intval($countA12))) {
        $a3point_A = 2;
        $a3point_B = 1;
      } elseif ((intval($countA9) + intval($countA11) )< (intval($countA10) + intval($countA12))) {
        $a3point_A = 1;
        $a3point_B = 2;
      } else {
        $a3point_A = 1;
        $a3point_B = 1;
      }
    } else {
      $a3point_A = 0;
      $a3point_B = 0;
    }
    $a4point_A = 0;
    $a4point_B = 0;
    if (intval($countA13) > intval($countA14) && intval($countA15) > intval($countA16)) {
      $a4point_A = 3;
      $a4point_B = 0;
    } elseif (intval($countA13) < intval($countA14) && intval($countA15) < intval($countA16)) {
      $a4point_A = 0;
      $a4point_B = 3;
    } elseif ((intval($countA13) > intval($countA14) && intval($countA15) < intval($countA16)) || (intval($countA13) < intval($countA14) && intval($countA15) > intval($countA16))) {
      if ((intval($countA13) + intval($countA15) )> (intval($countA14) + intval($countA16))) {
        $a4point_A = 2;
        $a4point_B = 1;
      } elseif ((intval($countA13) + intval($countA15) )< (intval($countA14) + intval($countA16))) {
        $a4point_A = 1;
        $a4point_B = 2;
      } else {
        $a4point_A = 1;
        $a4point_B = 1;
      }
    } else {
      $a4point_A = 0;
      $a4point_B = 0;
    }
    $a5point_A = 0;
    $a5point_B = 0;
    if (intval($countA17) > intval($countA18) && intval($countA19) > intval($countA20)) {
      $a5point_A = 3;
      $a5point_B = 0;
    } elseif (intval($countA17) < intval($countA18) && intval($countA19) < intval($countA20)) {
      $a5point_A = 0;
      $a5point_B = 3;
    } elseif ((intval($countA17) > intval($countA18) && intval($countA19) < intval($countA20)) || (intval($countA17) < intval($countA18) && intval($countA19) > intval($countA20))) {
      if ((intval($countA17) + intval($countA19) )> (intval($countA18) + intval($countA20))) {
        $a5point_A = 2;
        $a5point_B = 1;
      } elseif ((intval($countA17) + intval($countA19) )< (intval($countA18) + intval($countA20))) {
        $a5point_A = 1;
        $a5point_B = 2;
      } else {
        $a5point_A = 1;
        $a5point_B = 1;
      }
    } else {
      $a5point_A = 0;
      $a5point_B = 0;
    }
    $a6point_A = 0;
    $a6point_B = 0;
    if (intval($countA21) > intval($countA22) && intval($countA23) > intval($countA24)) {
      $a6point_A = 3;
      $a6point_B = 0;
    } elseif (intval($countA21) < intval($countA22) && intval($countA23) < intval($countA24)) {
      $a6point_A = 0;
      $a6point_B = 3;
    } elseif ((intval($countA21) > intval($countA22) && intval($countA23) < intval($countA24)) || (intval($countA21) < intval($countA22) && intval($countA23) > intval($countA24))) {
      if ((intval($countA21) + intval($countA23) )> (intval($countA22) + intval($countA24))) {
        $a6point_A = 2;
        $a6point_B = 1;
      } elseif ((intval($countA21) + intval($countA23) )< (intval($countA22) + intval($countA24))) {
        $a6point_A = 1;
        $a6point_B = 2;
      } else {
        $a6point_A = 1;
        $a6point_B = 1;
      }
    } else {
      $a6point_A = 0;
      $a6point_B = 0;
    }
    $a7point_A = 0;
    $a7point_B = 0;
    if (intval($countA25) > intval($countA26) && intval($countA27) > intval($countA28)) {
      $a7point_A = 3;
      $a7point_B = 0;
    } elseif (intval($countA25) < intval($countA26) && intval($countA27) < intval($countA28)) {
      $a7point_A = 0;
      $a7point_B = 3;
    } elseif ((intval($countA25) > intval($countA26) && intval($countA27) < intval($countA28)) || (intval($countA25) < intval($countA26) && intval($countA27) > intval($countA28))) {
      if ((intval($countA25) + intval($countA27) )> (intval($countA26) + intval($countA28))) {
        $a7point_A = 2;
        $a7point_B = 1;
      } elseif ((intval($countA25) + intval($countA27) )< (intval($countA26) + intval($countA28))) {
        $a7point_A = 1;
        $a7point_B = 2;
      } else {
        $a7point_A = 1;
        $a7point_B = 1;
      }
    } else {
      $a7point_A = 0;
      $a7point_B = 0;
    }
    $a8point_A = 0;
    $a8point_B = 0;
    if (intval($countA29) > intval($countA30) && intval($countA31) > intval($countA32)) {
      $a8point_A = 3;
      $a8point_B = 0;
    } elseif (intval($countA29) < intval($countA30) && intval($countA31) < intval($countA32)) {
      $a8point_A = 0;
      $a8point_B = 3;
    } elseif ((intval($countA29) > intval($countA30) && intval($countA31) < intval($countA32)) || (intval($countA29) < intval($countA30) && intval($countA31) > intval($countA32))) {
      if ((intval($countA29) + intval($countA31) )> (intval($countA30) + intval($countA32))) {
        $a8point_A = 2;
        $a8point_B = 1;
      } elseif ((intval($countA29) + intval($countA31) )< (intval($countA30) + intval($countA32))) {
        $a8point_A = 1;
        $a8point_B = 2;
      } else {
        $a8point_A = 1;
        $a8point_B = 1;
      }
    } else {
      $a8point_A = 0;
      $a8point_B = 0;
    }
    $a9point_A = 0;
    $a9point_B = 0;
    if (intval($countA33) > intval($countA34) && intval($countA35) > intval($countA36)) {
      $a9point_A = 3;
      $a9point_B = 0;
    } elseif (intval($countA33) < intval($countA34) && intval($countA35) < intval($countA36)) {
      $a9point_A = 0;
      $a9point_B = 3;
    } elseif ((intval($countA33) > intval($countA34) && intval($countA35) < intval($countA36)) || (intval($countA33) < intval($countA34) && intval($countA35) > intval($countA36))) {
      if ((intval($countA33) + intval($countA35) )> (intval($countA34) + intval($countA36))) {
        $a9point_A = 2;
        $a9point_B = 1;
      } elseif ((intval($countA33) + intval($countA35) )< (intval($countA34) + intval($countA36))) {
        $a9point_A = 1;
        $a9point_B = 2;
      } else {
        $a9point_A = 1;
        $a9point_B = 1;
      }
    } else {
      $a9point_A = 0;
      $a9point_B = 0;
    }
    $a10point_A = 0;
    $a10point_B = 0;
    if (intval($countA37) > intval($countA38) && intval($countA39) > intval($countA40)) {
      $a10point_A = 3;
      $a10point_B = 0;
    } elseif (intval($countA37) < intval($countA38) && intval($countA39) < intval($countA40)) {
      $a10point_A = 0;
      $a10point_B = 3;
    } elseif ((intval($countA37) > intval($countA38) && intval($countA39) < intval($countA40)) || (intval($countA37) < intval($countA38) && intval($countA39) > intval($countA40))) {
      if ((intval($countA37) + intval($countA39) )> (intval($countA38) + intval($countA40))) {
        $a10point_A = 2;
        $a10point_B = 1;
      } elseif ((intval($countA37) + intval($countA39) )< (intval($countA38) + intval($countA40))) {
        $a10point_A = 1;
        $a10point_B = 2;
      } else {
        $a10point_A = 1;
        $a10point_B = 1;
      }
    } else {
      $a10point_A = 0;
      $a10point_B = 0;
    }
    $a11point_A = 0;
    $a11point_B = 0;
    if (intval($countA41) > intval($countA42) && intval($countA43) > intval($countA44)) {
      $a11point_A = 3;
      $a11point_B = 0;
    } elseif (intval($countA41) < intval($countA42) && intval($countA43) < intval($countA44)) {
      $a11point_A = 0;
      $a11point_B = 3;
    } elseif ((intval($countA41) > intval($countA42) && intval($countA43) < intval($countA44)) || (intval($countA41) < intval($countA42) && intval($countA43) > intval($countA44))) {
      if ((intval($countA41) + intval($countA43) )> (intval($countA42) + intval($countA44))) {
        $a11point_A = 2;
        $a11point_B = 1;
      } elseif ((intval($countA41) + intval($countA43) )< (intval($countA42) + intval($countA44))) {
        $a11point_A = 1;
        $a11point_B = 2;
      } else {
        $a11point_A = 1;
        $a11point_B = 1;
      }
    } else {
      $a11point_A = 0;
      $a11point_B = 0;
    }
    $a12point_A = 0;
    $a12point_B = 0;
    if (intval($countA45) > intval($countA46) && intval($countA47) > intval($countA48)) {
      $a12point_A = 3;
      $a12point_B = 0;
    } elseif (intval($countA45) < intval($countA46) && intval($countA47) < intval($countA48)) {
      $a12point_A = 0;
      $a12point_B = 3;
    } elseif ((intval($countA45) > intval($countA46) && intval($countA47) < intval($countA48)) || (intval($countA45) < intval($countA46) && intval($countA47) > intval($countA48))) {
      if ((intval($countA45) + intval($countA47) )> (intval($countA46) + intval($countA48))) {
        $a12point_A = 2;
        $a12point_B = 1;
      } elseif ((intval($countA45) + intval($countA47) )< (intval($countA46) + intval($countA48))) {
        $a12point_A = 1;
        $a12point_B = 2;
      } else {
        $a12point_A = 1;
        $a12point_B = 1;
      }
    } else {
      $a12point_A = 0;
      $a12point_B = 0;
    }
    // Aコートの結果を入れる
    $preResult = new Post;
    $preResult->timestamps =false;
    $preResult->where('number', 1)->update(['pre_score'=>((intval($countA1) + intval($countA3) + intval($countA9) + intval($countA11) + intval($countA13) + intval($countA15) + intval($countA21) + intval($countA23)+ intval($countA25) + intval($countA27) + intval($countA33) + intval($countA35) + intval($countA37) + intval($countA39))-(intval($countA2) + intval($countA4) + intval($countA10) + intval($countA12) + intval($countA14) + intval($countA16) + intval($countA22) + intval($countA24) + intval($countA26) + intval($countA28) + intval($countA34) + intval($countA36) + intval($countA38) + intval($countA40))), 'pre_point'=>($a1point_A + $a3point_A + $a4point_A + $a6point_A + $a7point_A + $a9point_A + $a10point_A)]);
    $preResult->where('number', 2)->update(['pre_score'=>((intval($countA2) + intval($countA4) + intval($countA5) + intval($countA7))-(intval($countA1) + intval($countA3) + intval($countA6) + intval($countA8))), 'pre_point'=>($a1point_B + $a2point_A)]);
    $preResult->where('number', 3)->update(['pre_score'=>((intval($countA6) + intval($countA8) + intval($countA10) + intval($countA12) + intval($countA17) + intval($countA19) + intval($countA41) + intval($countA43) + intval($countA45) + intval($countA47))-(intval($countA5) + intval($countA7) + intval($countA9) + intval($countA11) + intval($countA18) + intval($countA20) + intval($countA42) + intval($countA44) + intval($countA46) + intval($countA48))), 'pre_point'=>($a2point_B + $a3point_B + $a5point_A + $a11point_A + $a12point_A)]);
    $preResult->where('number', 4)->update(['pre_score'=>((intval($countA38) + intval($countA40))-(intval($countA37) + intval($countA39))), 'pre_point'=>($a10point_B)]);
    $preResult->where('number', 5)->update(['pre_score'=>((intval($countA14) + intval($countA16) + intval($countA18) + intval($countA20) + intval($countA30) + intval($countA32))-(intval($countA13) + intval($countA15) + intval($countA17) + intval($countA19) + intval($countA29) + intval($countA31))), 'pre_point'=>($a4point_B + $a5point_B + $a8point_B)]);
    $preResult->where('number', 7)->update(['pre_score'=>((intval($countA22) + intval($countA24) + intval($countA46) + intval($countA48))-(intval($countA21) + intval($countA23) + intval($countA45) + intval($countA47))), 'pre_point'=>($a6point_B + $a12point_B)]);
    $preResult->where('number', 8)->update(['pre_score'=>((intval($countA25) + intval($countA27) + intval($countA29) + intval($countA31) + intval($countA42) + intval($countA44))-(intval($countA25) + intval($countA27) + intval($countA30) + intval($countA32) + intval($countA41) + intval($countA43))), 'pre_point'=>($a7point_B + $a8point_A + $a11point_B)]);
    $preResult->where('number', 9)->update(['pre_score'=>((intval($countA34) + intval($countA36))-(intval($countA34) + intval($countA36))), 'pre_point'=>($a9point_B)]);
  }

    /*
    // Bコート用
    $b1point_A = 0;
    $b1point_B = 0;
    if (intval($countB1) > intval($countB2) && intval($countB3) > intval($countB4)) {
      $b1point_A = 3;
      $b1point_B = 0;
    } elseif (intval($countB1) < intval($countB2) && intval($countB3) < intval($countB4)) {
      $b1point_A = 0;
      $b1point_B = 3;
    } elseif ((intval($countB1) > intval($countB2) && intval($countB3) < intval($countB4)) || (intval($countB1) < intval($countB2) && intval($countB3) > intval($countB4))) {
      if ((intval($countB1) + intval($countB3)) > (intval($countB2) + intval($countB4))) {
        $b1point_A = 2;
        $b1point_B = 1;
      } elseif ((intval($countB1) + intval($countB3)) < (intval($countB2) + intval($countB4))) {
        $b1point_A = 1;
        $b1point_B = 2;
      } else {
        $b1point_A = 1;
        $b1point_B = 1;
      }
    } else {
      $b1point_A = 0;
      $b1point_B = 0;
    }
    $b2point_A = 0;
    $b2point_B = 0;
    if (intval($countB5) > intval($countB6) && intval($countB7) > intval($countB8)) {
      $b2point_A = 3;
      $b2point_B = 0;
    } elseif (intval($countB5) < intval($countB6) && intval($countB7) < intval($countB8)) {
      $b2point_A = 0;
      $b2point_B = 3;
    } elseif ((intval($countB5) > intval($countB6) && intval($countB7) < intval($countB8)) || (intval($countB5) < intval($countB6) && intval($countB7) > intval($countB8))) {
      if ((intval($countB5) + intval($countB7)) > (intval($countB6) + intval($countB8))) {
        $b2point_A = 2;
        $b2point_B = 1;
      } elseif ((intval($countB5) + intval($countB7)) < (intval($countB6) + intval($countB8))) {
        $b2point_A = 1;
        $b2point_B = 2;
      } else {
        $b2point_A = 1;
        $b2point_B = 1;
      }
    } else {
      $b2point_A = 0;
      $b2point_B = 0;
    }
    $b3point_A = 0;
    $b3point_B = 0;
    if (intval($countB9) > intval($countB10) && intval($countB11) > intval($countB12)) {
      $b3point_A = 3;
      $b3point_B = 0;
    } elseif (intval($countB9) < intval($countB10) && intval($countB11) < intval($countB12)) {
      $b3point_A = 0;
      $b3point_B = 3;
    } elseif ((intval($countB9) > intval($countB10) && intval($countB11) < intval($countB12)) || (intval($countB9) < intval($countB10) && intval($countB11) > intval($countB12))) {
      if ((intval($countB9) + intval($countB11) )> (intval($countB10) + intval($countB12))) {
        $b3point_A = 2;
        $b3point_B = 1;
      } elseif ((intval($countB9) + intval($countB11) )< (intval($countB10) + intval($countB12))) {
        $b3point_A = 1;
        $b3point_B = 2;
      } else {
        $b3point_A = 1;
        $b3point_B = 1;
      }
    } else {
      $b3point_A = 0;
      $b3point_B = 0;
    }
    $b4point_A = 0;
    $b4point_B = 0;
    if (intval($countB13) > intval($countB14) && intval($countB15) > intval($countB16)) {
      $b4point_A = 3;
      $b4point_B = 0;
    } elseif (intval($countB13) < intval($countB14) && intval($countB15) < intval($countB16)) {
      $b4point_A = 0;
      $b4point_B = 3;
    } elseif ((intval($countB13) > intval($countB14) && intval($countB15) < intval($countB16)) || (intval($countB13) < intval($countB14) && intval($countB15) > intval($countB16))) {
      if ((intval($countB13) + intval($countB15) )> (intval($countB14) + intval($countB16))) {
        $b4point_A = 2;
        $b4point_B = 1;
      } elseif ((intval($countB13) + intval($countB15) )< (intval($countB14) + intval($countB16))) {
        $b4point_A = 1;
        $b4point_B = 2;
      } else {
        $b4point_A = 1;
        $b4point_B = 1;
      }
    } else {
      $b4point_A = 0;
      $b4point_B = 0;
    }
    $b5point_A = 0;
    $b5point_B = 0;
    if (intval($countB17) > intval($countB18) && intval($countB19) > intval($countB20)) {
      $b5point_A = 3;
      $b5point_B = 0;
    } elseif (intval($countB17) < intval($countB18) && intval($countB19) < intval($countB20)) {
      $b5point_A = 0;
      $b5point_B = 3;
    } elseif ((intval($countB17) > intval($countB18) && intval($countB19) < intval($countB20)) || (intval($countB17) < intval($countB18) && intval($countB19) > intval($countB20))) {
      if ((intval($countB17) + intval($countB19) )> (intval($countB18) + intval($countB20))) {
        $b5point_A = 2;
        $b5point_B = 1;
      } elseif ((intval($countB17) + intval($countB19) )< (intval($countB18) + intval($countB20))) {
        $b5point_A = 1;
        $b5point_B = 2;
      } else {
        $b5point_A = 1;
        $b5point_B = 1;
      }
    } else {
      $b5point_A = 0;
      $b5point_B = 0;
    }
    $b6point_A = 0;
    $b6point_B = 0;
    if (intval($countB21) > intval($countB22) && intval($countB23) > intval($countB24)) {
      $b6point_A = 3;
      $b6point_B = 0;
    } elseif (intval($countB21) < intval($countB22) && intval($countB23) < intval($countB24)) {
      $b6point_A = 0;
      $b6point_B = 3;
    } elseif ((intval($countB21) > intval($countB22) && intval($countB23) < intval($countB24)) || (intval($countB21) < intval($countB22) && intval($countB23) > intval($countB24))) {
      if ((intval($countB21) + intval($countB23) )> (intval($countB22) + intval($countB24))) {
        $b6point_A = 2;
        $b6point_B = 1;
      } elseif ((intval($countB21) + intval($countB23) )< (intval($countB22) + intval($countB24))) {
        $b6point_A = 1;
        $b6point_B = 2;
      } else {
        $b6point_A = 1;
        $b6point_B = 1;
      }
    } else {
      $b6point_A = 0;
      $b6point_B = 0;
    }
    $b7point_A = 0;
    $b7point_B = 0;
    if (intval($countB25) > intval($countB26) && intval($countB27) > intval($countB28)) {
      $b7point_A = 3;
      $b7point_B = 0;
    } elseif (intval($countB25) < intval($countB26) && intval($countB27) < intval($countB28)) {
      $b7point_A = 0;
      $b7point_B = 3;
    } elseif ((intval($countB25) > intval($countB26) && intval($countB27) < intval($countB28)) || (intval($countB25) < intval($countB26) && intval($countB27) > intval($countB28))) {
      if ((intval($countB25) + intval($countB27) )> (intval($countB26) + intval($countB28))) {
        $b7point_A = 2;
        $b7point_B = 1;
      } elseif ((intval($countB25) + intval($countB27) )< (intval($countB26) + intval($countB28))) {
        $b7point_A = 1;
        $b7point_B = 2;
      } else {
        $b7point_A = 1;
        $b7point_B = 1;
      }
    } else {
      $b7point_A = 0;
      $b7point_B = 0;
    }
    $b8point_A = 0;
    $b8point_B = 0;
    if (intval($countB29) > intval($countB30) && intval($countB31) > intval($countB32)) {
      $b8point_A = 3;
      $b8point_B = 0;
    } elseif (intval($countB29) < intval($countB30) && intval($countB31) < intval($countB32)) {
      $b8point_A = 0;
      $b8point_B = 3;
    } elseif ((intval($countB29) > intval($countB30) && intval($countB31) < intval($countB32)) || (intval($countB29) < intval($countB30) && intval($countB31) > intval($countB32))) {
      if ((intval($countB29) + intval($countB31) )> (intval($countB30) + intval($countB32))) {
        $b8point_A = 2;
        $b8point_B = 1;
      } elseif ((intval($countB29) + intval($countB31) )< (intval($countB30) + intval($countB32))) {
        $b8point_A = 1;
        $b8point_B = 2;
      } else {
        $b8point_A = 1;
        $b8point_B = 1;
      }
    } else {
      $b8point_A = 0;
      $b8point_B = 0;
    }
    $b9point_A = 0;
    $b9point_B = 0;
    if (intval($countB33) > intval($countB34) && intval($countB35) > intval($countB36)) {
      $b9point_A = 3;
      $b9point_B = 0;
    } elseif (intval($countB33) < intval($countB34) && intval($countB35) < intval($countB36)) {
      $b9point_A = 0;
      $b9point_B = 3;
    } elseif ((intval($countB33) > intval($countB34) && intval($countB35) < intval($countB36)) || (intval($countB33) < intval($countB34) && intval($countB35) > intval($countB36))) {
      if ((intval($countB33) + intval($countB35) )> (intval($countB34) + intval($countB36))) {
        $b9point_A = 2;
        $b9point_B = 1;
      } elseif ((intval($countB33) + intval($countB35) )< (intval($countB34) + intval($countB36))) {
        $b9point_A = 1;
        $b9point_B = 2;
      } else {
        $b9point_A = 1;
        $b9point_B = 1;
      }
    } else {
      $b9point_A = 0;
      $b9point_B = 0;
    }
    $b10point_A = 0;
    $b10point_B = 0;
    if (intval($countB37) > intval($countB38) && intval($countB39) > intval($countB40)) {
      $b10point_A = 3;
      $b10point_B = 0;
    } elseif (intval($countB37) < intval($countB38) && intval($countB39) < intval($countB40)) {
      $b10point_A = 0;
      $b10point_B = 3;
    } elseif ((intval($countB37) > intval($countB38) && intval($countB39) < intval($countB40)) || (intval($countB37) < intval($countB38) && intval($countB39) > intval($countB40))) {
      if ((intval($countB37) + intval($countB39) )> (intval($countB38) + intval($countB40))) {
        $b10point_A = 2;
        $b10point_B = 1;
      } elseif ((intval($countB37) + intval($countB39) )< (intval($countB38) + intval($countB40))) {
        $b10point_A = 1;
        $b10point_B = 2;
      } else {
        $b10point_A = 1;
        $b10point_B = 1;
      }
    } else {
      $b10point_A = 0;
      $b10point_B = 0;
    }
    $b11point_A = 0;
    $b11point_B = 0;
    if (intval($countB41) > intval($countB42) && intval($countB43) > intval($countB44)) {
      $b11point_A = 3;
      $b11point_B = 0;
    } elseif (intval($countB41) < intval($countB42) && intval($countB43) < intval($countB44)) {
      $b11point_A = 0;
      $b11point_B = 3;
    } elseif ((intval($countB41) > intval($countB42) && intval($countB43) < intval($countB44)) || (intval($countB41) < intval($countB42) && intval($countB43) > intval($countB44))) {
      if ((intval($countB41) + intval($countB43) )> (intval($countB42) + intval($countB44))) {
        $b11point_A = 2;
        $b11point_B = 1;
      } elseif ((intval($countB41) + intval($countB43) )< (intval($countB42) + intval($countB44))) {
        $b11point_A = 1;
        $b11point_B = 2;
      } else {
        $b11point_A = 1;
        $b11point_B = 1;
      }
    } else {
      $b11point_A = 0;
      $b11point_B = 0;
    }
    $b12point_A = 0;
    $b12point_B = 0;
    if (intval($countB45) > intval($countB46) && intval($countB47) > intval($countB48)) {
      $b12point_A = 3;
      $b12point_B = 0;
    } elseif (intval($countB45) < intval($countB46) && intval($countB47) < intval($countB48)) {
      $b12point_A = 0;
      $b12point_B = 3;
    } elseif ((intval($countB45) > intval($countB46) && intval($countB47) < intval($countB48)) || (intval($countB45) < intval($countB46) && intval($countB47) > intval($countB48))) {
      if ((intval($countB45) + intval($countB47) )> (intval($countB46) + intval($countB48))) {
        $b12point_A = 2;
        $b12point_B = 1;
      } elseif ((intval($countB45) + intval($countB47) )< (intval($countB46) + intval($countB48))) {
        $b12point_A = 1;
        $b12point_B = 2;
      } else {
        $b12point_A = 1;
        $b12point_B = 1;
      }
    } else {
      $b12point_A = 0;
      $b12point_B = 0;
    }

    // Cコート用
    $c1point_A = 0;
    $c1point_B = 0;
    if (intval($countC1) > intval($countC2) && intval($countC3) > intval($countC4)) {
      $c1point_A = 3;
      $c1point_B = 0;
    } elseif (intval($countC1) < intval($countC2) && intval($countC3) < intval($countC4)) {
      $c1point_A = 0;
      $c1point_B = 3;
    } elseif ((intval($countC1) > intval($countC2) && intval($countC3) < intval($countC4)) || (intval($countC1) < intval($countC2) && intval($countC3) > intval($countC4))) {
      if ((intval($countC1) + intval($countC3)) > (intval($countC2) + intval($countC4))) {
        $c1point_A = 2;
        $c1point_B = 1;
      } elseif ((intval($countC1) + intval($countC3)) < (intval($countC2) + intval($countC4))) {
        $c1point_A = 1;
        $c1point_B = 2;
      } else {
        $c1point_A = 1;
        $c1point_B = 1;
      }
    } else {
      $c1point_A = 0;
      $c1point_B = 0;
    }
    $c2point_A = 0;
    $c2point_B = 0;
    if (intval($countC5) > intval($countC6) && intval($countC7) > intval($countC8)) {
      $c2point_A = 3;
      $c2point_B = 0;
    } elseif (intval($countC5) < intval($countC6) && intval($countC7) < intval($countC8)) {
      $c2point_A = 0;
      $c2point_B = 3;
    } elseif ((intval($countC5) > intval($countC6) && intval($countC7) < intval($countC8)) || (intval($countC5) < intval($countC6) && intval($countC7) > intval($countC8))) {
      if ((intval($countC5) + intval($countC7)) > (intval($countC6) + intval($countC8))) {
        $c2point_A = 2;
        $c2point_B = 1;
      } elseif ((intval($countC5) + intval($countC7)) < (intval($countC6) + intval($countC8))) {
        $c2point_A = 1;
        $c2point_B = 2;
      } else {
        $c2point_A = 1;
        $c2point_B = 1;
      }
    } else {
      $c2point_A = 0;
      $c2point_B = 0;
    }
    $c3point_A = 0;
    $c3point_B = 0;
    if (intval($countC9) > intval($countC10) && intval($countC11) > intval($countC12)) {
      $c3point_A = 3;
      $c3point_B = 0;
    } elseif (intval($countC9) < intval($countC10) && intval($countC11) < intval($countC12)) {
      $c3point_A = 0;
      $c3point_B = 3;
    } elseif ((intval($countC9) > intval($countC10) && intval($countC11) < intval($countC12)) || (intval($countC9) < intval($countC10) && intval($countC11) > intval($countC12))) {
      if ((intval($countC9) + intval($countC11) )> (intval($countC10) + intval($countC12))) {
        $c3point_A = 2;
        $c3point_B = 1;
      } elseif ((intval($countC9) + intval($countC11) )< (intval($countC10) + intval($countC12))) {
        $c3point_A = 1;
        $c3point_B = 2;
      } else {
        $c3point_A = 1;
        $c3point_B = 1;
      }
    } else {
      $c3point_A = 0;
      $c3point_B = 0;
    }
    $c4point_A = 0;
    $c4point_B = 0;
    if (intval($countC13) > intval($countC14) && intval($countC15) > intval($countC16)) {
      $c4point_A = 3;
      $c4point_B = 0;
    } elseif (intval($countC13) < intval($countC14) && intval($countC15) < intval($countC16)) {
      $c4point_A = 0;
      $c4point_B = 3;
    } elseif ((intval($countC13) > intval($countC14) && intval($countC15) < intval($countC16)) || (intval($countC13) < intval($countC14) && intval($countC15) > intval($countC16))) {
      if ((intval($countC13) + intval($countC15) )> (intval($countC14) + intval($countC16))) {
        $c4point_A = 2;
        $c4point_B = 1;
      } elseif ((intval($countC13) + intval($countC15) )< (intval($countC14) + intval($countC16))) {
        $c4point_A = 1;
        $c4point_B = 2;
      } else {
        $c4point_A = 1;
        $c4point_B = 1;
      }
    } else {
      $c4point_A = 0;
      $c4point_B = 0;
    }
    $c5point_A = 0;
    $c5point_B = 0;
    if (intval($countC17) > intval($countC18) && intval($countC19) > intval($countC20)) {
      $c5point_A = 3;
      $c5point_B = 0;
    } elseif (intval($countC17) < intval($countC18) && intval($countC19) < intval($countC20)) {
      $c5point_A = 0;
      $c5point_B = 3;
    } elseif ((intval($countC17) > intval($countC18) && intval($countC19) < intval($countC20)) || (intval($countC17) < intval($countC18) && intval($countC19) > intval($countC20))) {
      if ((intval($countC17) + intval($countC19) )> (intval($countC18) + intval($countC20))) {
        $c5point_A = 2;
        $c5point_B = 1;
      } elseif ((intval($countC17) + intval($countC19) )< (intval($countC18) + intval($countC20))) {
        $c5point_A = 1;
        $c5point_B = 2;
      } else {
        $c5point_A = 1;
        $c5point_B = 1;
      }
    } else {
      $c5point_A = 0;
      $c5point_B = 0;
    }
    $c6point_A = 0;
    $c6point_B = 0;
    if (intval($countC21) > intval($countC22) && intval($countC23) > intval($countC24)) {
      $c6point_A = 3;
      $c6point_B = 0;
    } elseif (intval($countC21) < intval($countC22) && intval($countC23) < intval($countC24)) {
      $c6point_A = 0;
      $c6point_B = 3;
    } elseif ((intval($countC21) > intval($countC22) && intval($countC23) < intval($countC24)) || (intval($countC21) < intval($countC22) && intval($countC23) > intval($countC24))) {
      if ((intval($countC21) + intval($countC23) )> (intval($countC22) + intval($countC24))) {
        $c6point_A = 2;
        $c6point_B = 1;
      } elseif ((intval($countC21) + intval($countC23) )< (intval($countC22) + intval($countC24))) {
        $c6point_A = 1;
        $c6point_B = 2;
      } else {
        $c6point_A = 1;
        $c6point_B = 1;
      }
    } else {
      $c6point_A = 0;
      $c6point_B = 0;
    }
    $c7point_A = 0;
    $c7point_B = 0;
    if (intval($countC25) > intval($countC26) && intval($countC27) > intval($countC28)) {
      $c7point_A = 3;
      $c7point_B = 0;
    } elseif (intval($countC25) < intval($countC26) && intval($countC27) < intval($countC28)) {
      $c7point_A = 0;
      $c7point_B = 3;
    } elseif ((intval($countC25) > intval($countC26) && intval($countC27) < intval($countC28)) || (intval($countC25) < intval($countC26) && intval($countC27) > intval($countC28))) {
      if ((intval($countC25) + intval($countC27) )> (intval($countC26) + intval($countC28))) {
        $c7point_A = 2;
        $c7point_B = 1;
      } elseif ((intval($countC25) + intval($countC27) )< (intval($countC26) + intval($countC28))) {
        $c7point_A = 1;
        $c7point_B = 2;
      } else {
        $c7point_A = 1;
        $c7point_B = 1;
      }
    } else {
      $c7point_A = 0;
      $c7point_B = 0;
    }
    $c8point_A = 0;
    $c8point_B = 0;
    if (intval($countC29) > intval($countC30) && intval($countC31) > intval($countC32)) {
      $c8point_A = 3;
      $c8point_B = 0;
    } elseif (intval($countC29) < intval($countC30) && intval($countC31) < intval($countC32)) {
      $c8point_A = 0;
      $c8point_B = 3;
    } elseif ((intval($countC29) > intval($countC30) && intval($countC31) < intval($countC32)) || (intval($countC29) < intval($countC30) && intval($countC31) > intval($countC32))) {
      if ((intval($countC29) + intval($countC31) )> (intval($countC30) + intval($countC32))) {
        $c8point_A = 2;
        $c8point_B = 1;
      } elseif ((intval($countC29) + intval($countC31) )< (intval($countC30) + intval($countC32))) {
        $c8point_A = 1;
        $c8point_B = 2;
      } else {
        $c8point_A = 1;
        $c8point_B = 1;
      }
    } else {
      $c8point_A = 0;
      $c8point_B = 0;
    }
    $c9point_A = 0;
    $c9point_B = 0;
    if (intval($countC33) > intval($countC34) && intval($countC35) > intval($countC36)) {
      $c9point_A = 3;
      $c9point_B = 0;
    } elseif (intval($countC33) < intval($countC34) && intval($countC35) < intval($countC36)) {
      $c9point_A = 0;
      $c9point_B = 3;
    } elseif ((intval($countC33) > intval($countC34) && intval($countC35) < intval($countC36)) || (intval($countC33) < intval($countC34) && intval($countC35) > intval($countC36))) {
      if ((intval($countC33) + intval($countC35) )> (intval($countC34) + intval($countC36))) {
        $c9point_A = 2;
        $c9point_B = 1;
      } elseif ((intval($countC33) + intval($countC35) )< (intval($countC34) + intval($countC36))) {
        $c9point_A = 1;
        $c9point_B = 2;
      } else {
        $c9point_A = 1;
        $c9point_B = 1;
      }
    } else {
      $c9point_A = 0;
      $c9point_B = 0;
    }
    $c10point_A = 0;
    $c10point_B = 0;
    if (intval($countC37) > intval($countC38) && intval($countC39) > intval($countC40)) {
      $c10point_A = 3;
      $c10point_B = 0;
    } elseif (intval($countC37) < intval($countC38) && intval($countC39) < intval($countC40)) {
      $c10point_A = 0;
      $c10point_B = 3;
    } elseif ((intval($countC37) > intval($countC38) && intval($countC39) < intval($countC40)) || (intval($countC37) < intval($countC38) && intval($countC39) > intval($countC40))) {
      if ((intval($countC37) + intval($countC39) )> (intval($countC38) + intval($countC40))) {
        $c10point_A = 2;
        $c10point_B = 1;
      } elseif ((intval($countC37) + intval($countC39) )< (intval($countC38) + intval($countC40))) {
        $c10point_A = 1;
        $c10point_B = 2;
      } else {
        $c10point_A = 1;
        $c10point_B = 1;
      }
    } else {
      $c10point_A = 0;
      $c10point_B = 0;
    }
    $c11point_A = 0;
    $c11point_B = 0;
    if (intval($countC41) > intval($countC42) && intval($countC43) > intval($countC44)) {
      $c11point_A = 3;
      $c11point_B = 0;
    } elseif (intval($countC41) < intval($countC42) && intval($countC43) < intval($countC44)) {
      $c11point_A = 0;
      $c11point_B = 3;
    } elseif ((intval($countC41) > intval($countC42) && intval($countC43) < intval($countC44)) || (intval($countC41) < intval($countC42) && intval($countC43) > intval($countC44))) {
      if ((intval($countC41) + intval($countC43) )> (intval($countC42) + intval($countC44))) {
        $c11point_A = 2;
        $c11point_B = 1;
      } elseif ((intval($countC41) + intval($countC43) )< (intval($countC42) + intval($countC44))) {
        $c11point_A = 1;
        $c11point_B = 2;
      } else {
        $c11point_A = 1;
        $c11point_B = 1;
      }
    } else {
      $c11point_A = 0;
      $c11point_B = 0;
    }
    $c12point_A = 0;
    $c12point_B = 0;
    if (intval($countC45) > intval($countC46) && intval($countC47) > intval($countC48)) {
      $c12point_A = 3;
      $c12point_B = 0;
    } elseif (intval($countC45) < intval($countC46) && intval($countC47) < intval($countC48)) {
      $c12point_A = 0;
      $c12point_B = 3;
    } elseif ((intval($countC45) > intval($countC46) && intval($countC47) < intval($countC48)) || (intval($countC45) < intval($countC46) && intval($countC47) > intval($countC48))) {
      if ((intval($countC45) + intval($countC47) )> (intval($countC46) + intval($countC48))) {
        $c12point_A = 2;
        $c12point_B = 1;
      } elseif ((intval($countC45) + intval($countC47) )< (intval($countC46) + intval($countC48))) {
        $c12point_A = 1;
        $c12point_B = 2;
      } else {
        $c12point_A = 1;
        $c12point_B = 1;
      }
    } else {
      $c12point_A = 0;
      $c12point_B = 0;
    }


    // 得失点と勝ち点を入力
    $totalpoint = new Post;
    $totalpoint->timestamps =false;
    $totalpoint->where('number', 1)->update(['pre_score'=>((intval($countA1) + intval($countA3) + intval($countA9) + intval($countA11) + intval($countA13) + intval($countA15) + intval($countA21) + intval($countA23)+ intval($countA25) + intval($countA27) + intval($countA33) + intval($countA35) + intval($countA37) + intval($countA39) + intval($countB42) + intval($countB44))-(intval($countA2) + intval($countA4) + intval($countA10) + intval($countA12) + intval($countA14) + intval($countA16) + intval($countA22) + intval($countA24) + intval($countA26) + intval($countA28) + intval($countA34) + intval($countA36) + intval($countA38) + intval($countA40) + intval($countB41) + intval($countB43))), 'pre_point'=>($a1point_A + $a3point_A + $a4point_A + $a6point_A + $a7point_A + $a9point_A + $a10point_A + $b11point_B)]);
    $totalpoint->where('number', 2)->update(['pre_score'=>((intval($countA2) + intval($countA4) + intval($countA5) + intval($countA7) + intval($countB13) + intval($countB15) + intval($countB17) + intval($countB19)+ intval($countB25) + intval($countB27) + intval($countB29) + intval($countB31) + intval($countB37) + intval($countB39) + intval($countC41) + intval($countC43))-(intval($countA1) + intval($countA3) + intval($countA6) + intval($countA8) + intval($countB14) + intval($countB16) + intval($countB18) + intval($countB20) + intval($countB26) + intval($countB28) + intval($countB30) + intval($countB32) + intval($countB38) + intval($countB40) + intval($countC42) + intval($countB44))), 'pre_point'=>($a1point_B + $a2point_A + $b4point_A + $b5point_A + $b7point_A + $b8point_A + $b10point_A + $c11point_A)]);
    $totalpoint->where('number', 3)->update(['pre_score'=>((intval($countA6) + intval($countA8) + intval($countA10) + intval($countA12) + intval($countA17) + intval($countA19) + intval($countB21) + intval($countB23)+ intval($countC29) + intval($countC31) + intval($countB33) + intval($countB35) + intval($countA41) + intval($countA43) + intval($countA45) + intval($countA47))-(intval($countA5) + intval($countA7) + intval($countA9) + intval($countA11) + intval($countA18) + intval($countA20) + intval($countB22) + intval($countB24) + intval($countC30) + intval($countC32) + intval($countB34) + intval($countB36) + intval($countA42) + intval($countA44) + intval($countA46) + intval($countA48))), 'pre_point'=>($a2point_B + $a3point_B + $a5point_A + $b6point_A + $c8point_A + $b9point_A + $a11point_A + $a12point_A)]);
    $totalpoint->where('number', 4)->update(['pre_score'=>((intval($countB1) + intval($countB3) + intval($countB13) + intval($countB15) + intval($countC13) + intval($countC15) + intval($countC21) + intval($countC23)+ intval($countC25) + intval($countC27) + intval($countB34) + intval($countB36) + intval($countA38) + intval($countA40) + intval($countC42) + intval($countC44))-(intval($countB2) + intval($countB4) + intval($countB14) + intval($countB16) + intval($countC14) + intval($countC16) + intval($countC22) + intval($countC24) + intval($countC26) + intval($countC28) + intval($countB33) + intval($countB35) + intval($countA37) + intval($countA39) + intval($countC41) + intval($countC43))), 'pre_point'=>($b1point_A + $b3point_A + $c4point_A + $c6point_A + $c7point_A + $b9point_B + $a10point_B + $c11point_B)]);
    $totalpoint->where('number', 5)->update(['pre_score'=>((intval($countB2) + intval($countB4) + intval($countB5) + intval($countB7) + intval($countA14) + intval($countA16) + intval($countA18) + intval($countA20)+ intval($countB26) + intval($countB28) + intval($countA30) + intval($countA32) + intval($countC37) + intval($countC39) + intval($countC45) + intval($countC47))-(intval($countB1) + intval($countB3) + intval($countB6) + intval($countB8) + intval($countA13) + intval($countA15) + intval($countA17) + intval($countA19) + intval($countB25) + intval($countB27) + intval($countA29) + intval($countA31) + intval($countC38) + intval($countC40) + intval($countC46) + intval($countC48))), 'pre_point'=>($b1point_B + $b2point_A + $a4point_B + $a5point_B + $b7point_B + $a8point_B + $c10point_A + $c12point_A)]);
    $totalpoint->where('number', 6)->update(['pre_score'=>((intval($countB6) + intval($countB8) + intval($countB10) + intval($countB12) + intval($countC17) + intval($countC19) + intval($countB22) + intval($countB24)+ intval($countB30) + intval($countB32) + intval($countC33) + intval($countC35) + intval($countB41) + intval($countB43) + intval($countB45) + intval($countB47))-(intval($countB5) + intval($countB7) + intval($countB9) + intval($countB11) + intval($countC18) + intval($countC20) + intval($countB21) + intval($countB23) + intval($countB29) + intval($countB31) + intval($countC34) + intval($countC36) + intval($countB42) + intval($countB44) + intval($countB46) + intval($countB48))), 'pre_point'=>($b2point_B + $b3point_B + $c5point_A + $b6point_B + $b8point_B + $c9point_A + $b11point_A + $b12point_A)]);
    $totalpoint->where('number', 7)->update(['pre_score'=>((intval($countC1) + intval($countC3) + intval($countC9) + intval($countC11) + intval($countB14) + intval($countB16) + intval($countA22) + intval($countA24)+ intval($countC26) + intval($countC28) + intval($countC34) + intval($countC36) + intval($countC38) + intval($countC40) + intval($countA46) + intval($countA48))-(intval($countC2) + intval($countC4) + intval($countC10) + intval($countC12) + intval($countB13) + intval($countB15) + intval($countA21) + intval($countA23) + intval($countC25) + intval($countC27) + intval($countC33) + intval($countC35) + intval($countC37) + intval($countC39) + intval($countA45) + intval($countA47))), 'pre_point'=>($c1point_A + $c3point_A + $b4point_B + $a6point_B + $c7point_B + $c9point_B + $c10point_B + $a12point_B)]);
    $totalpoint->where('number', 8)->update(['pre_score'=>((intval($countC2) + intval($countC4) + intval($countC5) + intval($countC7) + intval($countC10) + intval($countC12) + intval($countB18) + intval($countB20)+ intval($countA25) + intval($countA27) + intval($countA29) + intval($countA31) + intval($countA42) + intval($countA44) + intval($countB46) + intval($countB48))-(intval($countC1) + intval($countC3) + intval($countC6) + intval($countC8) + intval($countC13) + intval($countC15) + intval($countB17) + intval($countB19) + intval($countA25) + intval($countA27) + intval($countA30) + intval($countA32) + intval($countA41) + intval($countA43) + intval($countB45) + intval($countB47))), 'pre_point'=>($c1point_B + $c2point_A + $c4point_B + $b5point_B + $a7point_B + $a8point_A + $a11point_B + $b12point_B)]);
    $totalpoint->where('number', 9)->update(['pre_score'=>((intval($countC6) + intval($countC8) + intval($countC10) + intval($countC12) + intval($countC18) + intval($countC20) + intval($countC22) + intval($countC24)+ intval($countC30) + intval($countC32) + intval($countA34) + intval($countA36) + intval($countB38) + intval($countB40) + intval($countC46) + intval($countC48))-(intval($countC5) + intval($countC7) + intval($countC9) + intval($countC11) + intval($countC18) + intval($countC20) + intval($countC22) + intval($countC24) + intval($countC30) + intval($countC32) + intval($countA34) + intval($countA36) + intval($countB38) + intval($countB40) + intval($countC46) + intval($countC48))), 'pre_point'=>($c2point_B + $c3point_B + $c5point_B + $c6point_B + $c8point_B + $a9point_B + $b10point_B + $c12point_B)]);
  } */
}
