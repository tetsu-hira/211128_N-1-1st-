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
    $preScore1 = $posts[0]->pre_score;
    $preScore2 = $posts[1]->pre_score;
    $preScore3 = $posts[2]->pre_score;
    $preScore4 = $posts[3]->pre_score;
    $preScore5 = $posts[4]->pre_score;
    $preScore6 = $posts[5]->pre_score;
    $preScore7 = $posts[6]->pre_score;
    $preScore8 = $posts[7]->pre_score;
    $preScore9 = $posts[8]->pre_score;
    $midScore1 = $posts[0]->mid_score;
    $midScore2 = $posts[1]->mid_score;
    $midScore3 = $posts[2]->mid_score;
    $midScore4 = $posts[3]->mid_score;
    $midScore5 = $posts[4]->mid_score;
    $midScore6 = $posts[5]->mid_score;
    $midScore7 = $posts[6]->mid_score;
    $midScore8 = $posts[7]->mid_score;
    $midScore9 = $posts[8]->mid_score;
    $lasScore1 = $posts[0]->las_score;
    $lasScore2 = $posts[1]->las_score;
    $lasScore3 = $posts[2]->las_score;
    $lasScore4 = $posts[3]->las_score;
    $lasScore5 = $posts[4]->las_score;
    $lasScore6 = $posts[5]->las_score;
    $lasScore7 = $posts[6]->las_score;
    $lasScore8 = $posts[7]->las_score;
    $lasScore9 = $posts[8]->las_score;
    $getResult->where('id', 1)->update(['sum_score'=>($preScore1 + $midScore1 + $lasScore1)]);
    $getResult->where('id', 2)->update(['sum_score'=>($preScore2 + $midScore2 + $lasScore2)]);
    $getResult->where('id', 3)->update(['sum_score'=>($preScore3 + $midScore3 + $lasScore3)]);
    $getResult->where('id', 4)->update(['sum_score'=>($preScore4 + $midScore4 + $lasScore4)]);
    $getResult->where('id', 5)->update(['sum_score'=>($preScore5 + $midScore5 + $lasScore5)]);
    $getResult->where('id', 6)->update(['sum_score'=>($preScore6 + $midScore6 + $lasScore6)]);
    $getResult->where('id', 7)->update(['sum_score'=>($preScore7 + $midScore7 + $lasScore7)]);
    $getResult->where('id', 8)->update(['sum_score'=>($preScore8 + $midScore8 + $lasScore8)]);
    $getResult->where('id', 9)->update(['sum_score'=>($preScore9 + $midScore9 + $lasScore9)]);
    $teams = DB::table('teams')->get();
    $getEffect  = new Team;
    $getEffect->timestamps = false;
    $prePoint1 = $teams[0]->pre_point;
    $prePoint2 = $teams[1]->pre_point;
    $prePoint3 = $teams[2]->pre_point;
    $prePoint4 = $teams[3]->pre_point;
    $prePoint5 = $teams[4]->pre_point;
    $prePoint6 = $teams[5]->pre_point;
    $midPoint1 = $teams[0]->mid_point;
    $midPoint2 = $teams[1]->mid_point;
    $midPoint3 = $teams[2]->mid_point;
    $midPoint4 = $teams[3]->mid_point;
    $midPoint5 = $teams[4]->mid_point;
    $midPoint6 = $teams[5]->mid_point;
    $lasPoint1 = $teams[0]->las_point;
    $lasPoint2 = $teams[1]->las_point;
    $lasPoint3 = $teams[2]->las_point;
    $lasPoint4 = $teams[3]->las_point;
    $lasPoint5 = $teams[4]->las_point;
    $lasPoint6 = $teams[5]->las_point;
    $getEffect->where('id', 1)->update(['sum_point'=>($prePoint1 + $midPoint1 + $lasPoint1)]);
    $getEffect->where('id', 2)->update(['sum_point'=>($prePoint2 + $midPoint2 + $lasPoint2)]);
    $getEffect->where('id', 3)->update(['sum_point'=>($prePoint3 + $midPoint3 + $lasPoint3)]);
    $getEffect->where('id', 4)->update(['sum_point'=>($prePoint4 + $midPoint4 + $lasPoint4)]);
    $getEffect->where('id', 5)->update(['sum_point'=>($prePoint5 + $midPoint5 + $lasPoint5)]);
    $getEffect->where('id', 6)->update(['sum_point'=>($prePoint6 + $midPoint6 + $lasPoint6)]);
    $preScore1 = $teams[0]->pre_score;
    $preScore2 = $teams[1]->pre_score;
    $preScore3 = $teams[2]->pre_score;
    $preScore4 = $teams[3]->pre_score;
    $preScore5 = $teams[4]->pre_score;
    $preScore6 = $teams[5]->pre_score;
    $midScore1 = $teams[0]->mid_score;
    $midScore2 = $teams[1]->mid_score;
    $midScore3 = $teams[2]->mid_score;
    $midScore4 = $teams[3]->mid_score;
    $midScore5 = $teams[4]->mid_score;
    $midScore6 = $teams[5]->mid_score;
    $lasScore1 = $teams[0]->las_score;
    $lasScore2 = $teams[1]->las_score;
    $lasScore3 = $teams[2]->las_score;
    $lasScore4 = $teams[3]->las_score;
    $lasScore5 = $teams[4]->las_score;
    $lasScore6 = $teams[5]->las_score;
    $getEffect->where('id', 1)->update(['sum_score'=>($preScore1 + $midScore1 + $lasScore1)]);
    $getEffect->where('id', 2)->update(['sum_score'=>($preScore2 + $midScore2 + $lasScore2)]);
    $getEffect->where('id', 3)->update(['sum_score'=>($preScore3 + $midScore3 + $lasScore3)]);
    $getEffect->where('id', 4)->update(['sum_score'=>($preScore4 + $midScore4 + $lasScore4)]);
    $getEffect->where('id', 5)->update(['sum_score'=>($preScore5 + $midScore5 + $lasScore5)]);
    $getEffect->where('id', 6)->update(['sum_score'=>($preScore6 + $midScore6 + $lasScore6)]);
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

    $changecountA = new First;
    $changecountA->timestamps = false;
    $changecountA->where('id', 1)->update(['result1'=>$countA1, 'result2'=>$countA2, 'result3'=>$countA3, 'result4'=>$countA4]);
    $changecountA->where('id', 2)->update(['result1'=>$countA5, 'result2'=>$countA6, 'result3'=>$countA7, 'result4'=>$countA8]);
    $changecountA->where('id', 3)->update(['result1'=>$countA9, 'result2'=>$countA10, 'result3'=>$countA11, 'result4'=>$countA12]);
    $changecountA->where('id', 4)->update(['result1'=>$countA13, 'result2'=>$countA14, 'result3'=>$countA15, 'result4'=>$countA16]);
    $changecountA->where('id', 5)->update(['result1'=>$countA17, 'result2'=>$countA18, 'result3'=>$countA19, 'result4'=>$countA20]);
    $changecountA->where('id', 6)->update(['result1'=>$countA21, 'result2'=>$countA22, 'result3'=>$countA23, 'result4'=>$countA24]);
    $changecountA->where('id', 7)->update(['result1'=>$countA25, 'result2'=>$countA26, 'result3'=>$countA27, 'result4'=>$countA28]);
    $changecountA->where('id', 8)->update(['result1'=>$countA29, 'result2'=>$countA30, 'result3'=>$countA31, 'result4'=>$countA32]);
    $changecountA->where('id', 9)->update(['result1'=>$countA33, 'result2'=>$countA34, 'result3'=>$countA35, 'result4'=>$countA36]);
    $changecountA->where('id', 10)->update(['result1'=>$countA37, 'result2'=>$countA38, 'result3'=>$countA39, 'result4'=>$countA40]);
    $changecountA->where('id', 11)->update(['result1'=>$countA41, 'result2'=>$countA42, 'result3'=>$countA43, 'result4'=>$countA44]);
    $changecountA->where('id', 12)->update(['result1'=>$countA45, 'result2'=>$countA46, 'result3'=>$countA47, 'result4'=>$countA48]);

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
    $preResult->where('number', 8)->update(['pre_score'=>((intval($countA26) + intval($countA28) + intval($countA29) + intval($countA31) + intval($countA42) + intval($countA44))-(intval($countA25) + intval($countA27) + intval($countA30) + intval($countA32) + intval($countA41) + intval($countA43))), 'pre_point'=>($a7point_B + $a8point_A + $a11point_B)]);
    $preResult->where('number', 9)->update(['pre_score'=>((intval($countA34) + intval($countA36))-(intval($countA33) + intval($countA35))), 'pre_point'=>($a9point_B)]);
  }


    // Bコート予選結果計算機能
  public function changecount2(Request $request)
  {
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
    $countB17 = $request->input('countB17');
    $countB18 = $request->input('countB18');
    $countB19 = $request->input('countB19');
    $countB20 = $request->input('countB20');
    $countB21 = $request->input('countB21');
    $countB22 = $request->input('countB22');
    $countB23 = $request->input('countB23');
    $countB24 = $request->input('countB24');
    $countB25 = $request->input('countB25');
    $countB26 = $request->input('countB26');
    $countB27 = $request->input('countB27');
    $countB28 = $request->input('countB28');
    $countB29 = $request->input('countB29');
    $countB30 = $request->input('countB30');
    $countB31 = $request->input('countB31');
    $countB32 = $request->input('countB32');
    $countB33 = $request->input('countB33');
    $countB34 = $request->input('countB34');
    $countB35 = $request->input('countB35');
    $countB36 = $request->input('countB36');
    $countB37 = $request->input('countB37');
    $countB38 = $request->input('countB38');
    $countB39 = $request->input('countB39');
    $countB40 = $request->input('countB40');
    $countB41 = $request->input('countB41');
    $countB42 = $request->input('countB42');
    $countB43 = $request->input('countB43');
    $countB44 = $request->input('countB44');
    $countB45 = $request->input('countB45');
    $countB46 = $request->input('countB46');
    $countB47 = $request->input('countB47');
    $countB48 = $request->input('countB48');

    $changecountB = new First;
    $changecountB->timestamps = false;
    $changecountB->where('id', 13)->update(['result1'=>$countB1, 'result2'=>$countB2, 'result3'=>$countB3, 'result4'=>$countB4]);
    $changecountB->where('id', 14)->update(['result1'=>$countB5, 'result2'=>$countB6, 'result3'=>$countB7, 'result4'=>$countB8]);
    $changecountB->where('id', 15)->update(['result1'=>$countB9, 'result2'=>$countB10, 'result3'=>$countB11, 'result4'=>$countB12]);
    $changecountB->where('id', 16)->update(['result1'=>$countB13, 'result2'=>$countB14, 'result3'=>$countB15, 'result4'=>$countB16]);
    $changecountB->where('id', 17)->update(['result1'=>$countB17, 'result2'=>$countB18, 'result3'=>$countB19, 'result4'=>$countB20]);
    $changecountB->where('id', 18)->update(['result1'=>$countB21, 'result2'=>$countB22, 'result3'=>$countB23, 'result4'=>$countB24]);
    $changecountB->where('id', 19)->update(['result1'=>$countB25, 'result2'=>$countB26, 'result3'=>$countB27, 'result4'=>$countB28]);
    $changecountB->where('id', 20)->update(['result1'=>$countB29, 'result2'=>$countB30, 'result3'=>$countB31, 'result4'=>$countB32]);
    $changecountB->where('id', 21)->update(['result1'=>$countB33, 'result2'=>$countB34, 'result3'=>$countB35, 'result4'=>$countB36]);
    $changecountB->where('id', 22)->update(['result1'=>$countB37, 'result2'=>$countB38, 'result3'=>$countB39, 'result4'=>$countB40]);
    $changecountB->where('id', 23)->update(['result1'=>$countB41, 'result2'=>$countB42, 'result3'=>$countB43, 'result4'=>$countB44]);
    $changecountB->where('id', 24)->update(['result1'=>$countB45, 'result2'=>$countB46, 'result3'=>$countB47, 'result4'=>$countB48]);

    // 勝ち点と得失点をteamテーブルに入れる
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

    // 得失点と勝ち点を入力
    $totalpoint = new Post;
    $totalpoint->timestamps =false;
    $totalpoint->where('number', 1)->update(['mid_score'=>((intval($countB42) + intval($countB44))-(intval($countB41) + intval($countB43))), 'mid_point'=>($b11point_B)]);
    $totalpoint->where('number', 2)->update(['mid_score'=>((intval($countB13) + intval($countB15) + intval($countB17) + intval($countB19)+ intval($countB25) + intval($countB27) + intval($countB29) + intval($countB31) + intval($countB37) + intval($countB39))-(intval($countB14) + intval($countB16) + intval($countB18) + intval($countB20) + intval($countB26) + intval($countB28) + intval($countB30) + intval($countB32) + intval($countB38) + intval($countB40))), 'mid_point'=>($b4point_A + $b5point_A + $b7point_A + $b8point_A + $b10point_A)]);
    $totalpoint->where('number', 3)->update(['mid_score'=>((intval($countB21) + intval($countB23) + intval($countB33) + intval($countB35))-(intval($countB22) + intval($countB24) + intval($countB34) + intval($countB36))), 'mid_point'=>($b6point_A + $b9point_A)]);
    $totalpoint->where('number', 4)->update(['mid_score'=>((intval($countB1) + intval($countB3) + intval($countB9) + intval($countB11) + intval($countB34) + intval($countB36))-(intval($countB2) + intval($countB4) + intval($countB10) + intval($countB12) + intval($countB33) + intval($countB35))), 'mid_point'=>($b1point_A + $b3point_A + $b9point_B)]);
    $totalpoint->where('number', 5)->update(['mid_score'=>((intval($countB2) + intval($countB4) + intval($countB5) + intval($countB7) + intval($countB26) + intval($countB28))-(intval($countB1) + intval($countB3) + intval($countB6) + intval($countB8) + intval($countB25) + intval($countB27))), 'mid_point'=>($b1point_B + $b2point_A + $b7point_B)]);
    $totalpoint->where('number', 6)->update(['mid_score'=>((intval($countB6) + intval($countB8) + intval($countB10) + intval($countB12) + intval($countB22) + intval($countB24)+ intval($countB30) + intval($countB32) + intval($countB41) + intval($countB43) + intval($countB45) + intval($countB47))-(intval($countB5) + intval($countB7) + intval($countB9) + intval($countB11) + intval($countB21) + intval($countB23) + intval($countB29) + intval($countB31) + intval($countB42) + intval($countB44) + intval($countB46) + intval($countB48))), 'mid_point'=>($b2point_B + $b3point_B + $b6point_B + $b8point_B + $b11point_A + $b12point_A)]);
    $totalpoint->where('number', 7)->update(['mid_score'=>((intval($countB14) + intval($countB16))-(intval($countB13) + intval($countB15))), 'mid_point'=>($b4point_B)]);
    $totalpoint->where('number', 8)->update(['mid_score'=>((intval($countB18) + intval($countB20) + intval($countB46) + intval($countB48))-(intval($countB17) + intval($countB19) + intval($countB45) + intval($countB47))), 'mid_point'=>($b5point_B + $b12point_B)]);
    $totalpoint->where('number', 9)->update(['mid_score'=>((intval($countB38) + intval($countB40))-(intval($countB37) + intval($countB39))), 'mid_point'=>($b10point_B)]);
  }


  // Cコート予選結果計算機能
  public function changecount3(Request $request)
  {
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
    $countC17 = $request->input('countC17');
    $countC18 = $request->input('countC18');
    $countC19 = $request->input('countC19');
    $countC20 = $request->input('countC20');
    $countC21 = $request->input('countC21');
    $countC22 = $request->input('countC22');
    $countC23 = $request->input('countC23');
    $countC24 = $request->input('countC24');
    $countC25 = $request->input('countC25');
    $countC26 = $request->input('countC26');
    $countC27 = $request->input('countC27');
    $countC28 = $request->input('countC28');
    $countC29 = $request->input('countC29');
    $countC30 = $request->input('countC30');
    $countC31 = $request->input('countC31');
    $countC32 = $request->input('countC32');
    $countC33 = $request->input('countC33');
    $countC34 = $request->input('countC34');
    $countC35 = $request->input('countC35');
    $countC36 = $request->input('countC36');
    $countC37 = $request->input('countC37');
    $countC38 = $request->input('countC38');
    $countC39 = $request->input('countC39');
    $countC40 = $request->input('countC40');
    $countC41 = $request->input('countC41');
    $countC42 = $request->input('countC42');
    $countC43 = $request->input('countC43');
    $countC44 = $request->input('countC44');
    $countC45 = $request->input('countC45');
    $countC46 = $request->input('countC46');
    $countC47 = $request->input('countC47');
    $countC48 = $request->input('countC48');

    $changecountC = new First;
    $changecountC->timestamps = false;
    $changecountC->where('id', 25)->update(['result1'=>$countC1, 'result2'=>$countC2, 'result3'=>$countC3, 'result4'=>$countC4]);
    $changecountC->where('id', 26)->update(['result1'=>$countC5, 'result2'=>$countC6, 'result3'=>$countC7, 'result4'=>$countC8]);
    $changecountC->where('id', 27)->update(['result1'=>$countC9, 'result2'=>$countC10, 'result3'=>$countC11, 'result4'=>$countC12]);
    $changecountC->where('id', 28)->update(['result1'=>$countC13, 'result2'=>$countC14, 'result3'=>$countC15, 'result4'=>$countC16]);
    $changecountC->where('id', 29)->update(['result1'=>$countC17, 'result2'=>$countC18, 'result3'=>$countC19, 'result4'=>$countC20]);
    $changecountC->where('id', 30)->update(['result1'=>$countC21, 'result2'=>$countC22, 'result3'=>$countC23, 'result4'=>$countC24]);
    $changecountC->where('id', 31)->update(['result1'=>$countC25, 'result2'=>$countC26, 'result3'=>$countC27, 'result4'=>$countC28]);
    $changecountC->where('id', 32)->update(['result1'=>$countC29, 'result2'=>$countC30, 'result3'=>$countC31, 'result4'=>$countC32]);
    $changecountC->where('id', 33)->update(['result1'=>$countC33, 'result2'=>$countC34, 'result3'=>$countC35, 'result4'=>$countC36]);
    $changecountC->where('id', 34)->update(['result1'=>$countC37, 'result2'=>$countC38, 'result3'=>$countC39, 'result4'=>$countC40]);
    $changecountC->where('id', 35)->update(['result1'=>$countC41, 'result2'=>$countC42, 'result3'=>$countC43, 'result4'=>$countC44]);
    $changecountC->where('id', 36)->update(['result1'=>$countC45, 'result2'=>$countC46, 'result3'=>$countC47, 'result4'=>$countC48]);

    // 勝ち点と得失点をteamテーブルに入れる
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
    $totalpoint->where('number', 2)->update(['las_score'=>((intval($countC41) + intval($countC43))-(intval($countC42) + intval($countC44))), 'las_point'=>($c11point_A)]);
    $totalpoint->where('number', 3)->update(['las_score'=>((intval($countC29) + intval($countC31))-(intval($countC30) + intval($countC32))), 'las_point'=>($c8point_A)]);
    $totalpoint->where('number', 4)->update(['las_score'=>((intval($countC13) + intval($countC15) + intval($countC21) + intval($countC23)+ intval($countC25) + intval($countC27) + intval($countC42) + intval($countC44))-(intval($countC14) + intval($countC16) + intval($countC22) + intval($countC24) + intval($countC26) + intval($countC28) + intval($countC41) + intval($countC43))), 'las_point'=>($c4point_A + $c6point_A + $c7point_A + $c11point_B)]);
    $totalpoint->where('number', 5)->update(['las_score'=>((intval($countC37) + intval($countC39) + intval($countC45) + intval($countC47))-(intval($countC38) + intval($countC40) + intval($countC46) + intval($countC48))), 'las_point'=>($c10point_A + $c12point_A)]);
    $totalpoint->where('number', 6)->update(['las_score'=>((intval($countC17) + intval($countC19) + intval($countC33) + intval($countC35))-(intval($countC18) + intval($countC20) + intval($countC34) + intval($countC36))), 'las_point'=>($c5point_A + $c9point_A)]);
    $totalpoint->where('number', 7)->update(['las_score'=>((intval($countC1) + intval($countC3) + intval($countC9) + intval($countC11) + intval($countC26) + intval($countC28) + intval($countC34) + intval($countC36) + intval($countC38) + intval($countC40))-(intval($countC2) + intval($countC4) + intval($countC10) + intval($countC12) + intval($countC25) + intval($countC27) + intval($countC33) + intval($countC35) + intval($countC37) + intval($countC39))), 'las_point'=>($c1point_A + $c3point_A + $c7point_B + $c9point_B + $c10point_B)]);
    $totalpoint->where('number', 8)->update(['las_score'=>((intval($countC2) + intval($countC4) + intval($countC5) + intval($countC7) + intval($countC14) + intval($countC16))-(intval($countC1) + intval($countC3) + intval($countC6) + intval($countC8) + intval($countC13) + intval($countC15))), 'las_point'=>($c1point_B + $c2point_A + $c4point_B)]);
    $totalpoint->where('number', 9)->update(['las_score'=>((intval($countC6) + intval($countC8) + intval($countC10) + intval($countC12) + intval($countC18) + intval($countC20) + intval($countC22) + intval($countC24)+ intval($countC30) + intval($countC32) + intval($countC46) + intval($countC48))-(intval($countC5) + intval($countC7) + intval($countC9) + intval($countC11) + intval($countC17) + intval($countC19) + intval($countC21) + intval($countC23) + intval($countC29) + intval($countC31) + intval($countC45) + intval($countC47))), 'las_point'=>($c2point_B + $c3point_B + $c5point_B + $c6point_B + $c8point_B + $c12point_B)]);
  }

  // Dコート予選結果計算機能
  public function changecount4(Request $request)
  {
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
    $countD17 = $request->input('countD17');
    $countD18 = $request->input('countD18');
    $countD19 = $request->input('countD19');
    $countD20 = $request->input('countD20');
    $countD21 = $request->input('countD21');
    $countD22 = $request->input('countD22');
    $countD23 = $request->input('countD23');
    $countD24 = $request->input('countD24');
    $countD25 = $request->input('countD25');
    $countD26 = $request->input('countD26');
    $countD27 = $request->input('countD27');
    $countD28 = $request->input('countD28');
    $countD29 = $request->input('countD29');
    $countD30 = $request->input('countD30');
    $countD31 = $request->input('countD31');
    $countD32 = $request->input('countD32');
    $countD33 = $request->input('countD33');
    $countD34 = $request->input('countD34');
    $countD35 = $request->input('countD35');
    $countD36 = $request->input('countD36');
    $countD37 = $request->input('countD37');
    $countD38 = $request->input('countD38');
    $countD39 = $request->input('countD39');
    $countD40 = $request->input('countD40');
    $countD41 = $request->input('countD41');
    $countD42 = $request->input('countD42');
    $countD43 = $request->input('countD43');
    $countD44 = $request->input('countD44');
    $countD45 = $request->input('countD45');
    $countD46 = $request->input('countD46');
    $countD47 = $request->input('countD47');
    $countD48 = $request->input('countD48');

    $changecountD = new Second;
    $changecountD->timestamps = false;
    $changecountD->where('id', 1)->update(['result1'=>$countD1, 'result2'=>$countD2, 'result3'=>$countD3, 'result4'=>$countD4]);
    $changecountD->where('id', 2)->update(['result1'=>$countD5, 'result2'=>$countD6, 'result3'=>$countD7, 'result4'=>$countD8]);
    $changecountD->where('id', 3)->update(['result1'=>$countD9, 'result2'=>$countD10, 'result3'=>$countD11, 'result4'=>$countD12]);
    $changecountD->where('id', 4)->update(['result1'=>$countD13, 'result2'=>$countD14, 'result3'=>$countD15, 'result4'=>$countD16]);
    $changecountD->where('id', 5)->update(['result1'=>$countD17, 'result2'=>$countD18, 'result3'=>$countD19, 'result4'=>$countD20]);
    $changecountD->where('id', 6)->update(['result1'=>$countD21, 'result2'=>$countD22, 'result3'=>$countD23, 'result4'=>$countD24]);
    $changecountD->where('id', 7)->update(['result1'=>$countD25, 'result2'=>$countD26, 'result3'=>$countD27, 'result4'=>$countD28]);
    $changecountD->where('id', 8)->update(['result1'=>$countD29, 'result2'=>$countD30, 'result3'=>$countD31, 'result4'=>$countD32]);
    $changecountD->where('id', 9)->update(['result1'=>$countD33, 'result2'=>$countD34, 'result3'=>$countD35, 'result4'=>$countD36]);
    $changecountD->where('id', 10)->update(['result1'=>$countD37, 'result2'=>$countD38, 'result3'=>$countD39, 'result4'=>$countD40]);
    $changecountD->where('id', 11)->update(['result1'=>$countD41, 'result2'=>$countD42, 'result3'=>$countD43, 'result4'=>$countD44]);
    $changecountD->where('id', 12)->update(['result1'=>$countD45, 'result2'=>$countD46, 'result3'=>$countD47, 'result4'=>$countD48]);

    // 勝ち点と得失点をteamテーブルに入れる
    $d1point_A = 0;
    $d1point_B = 0;
    if (intval($countD1) > intval($countD2) && intval($countD3) > intval($countD4)) {
      $d1point_A = 3;
      $d1point_B = 0;
    } elseif (intval($countD1) < intval($countD2) && intval($countD3) < intval($countD4)) {
      $d1point_A = 0;
      $d1point_B = 3;
    } elseif ((intval($countD1) > intval($countD2) && intval($countD3) < intval($countD4)) || (intval($countD1) < intval($countD2) && intval($countD3) > intval($countD4))) {
      if ((intval($countD1) + intval($countD3)) > (intval($countD2) + intval($countD4))) {
        $d1point_A = 2;
        $d1point_B = 1;
      } elseif ((intval($countD1) + intval($countD3)) < (intval($countD2) + intval($countD4))) {
        $d1point_A = 1;
        $d1point_B = 2;
      } else {
        $d1point_A = 1;
        $d1point_B = 1;
      }
    } else {
      $d1point_A = 0;
      $d1point_B = 0;
    }
    $d2point_A = 0;
    $d2point_B = 0;
    if (intval($countD5) > intval($countD6) && intval($countD7) > intval($countD8)) {
      $d2point_A = 3;
      $d2point_B = 0;
    } elseif (intval($countD5) < intval($countD6) && intval($countD7) < intval($countD8)) {
      $d2point_A = 0;
      $d2point_B = 3;
    } elseif ((intval($countD5) > intval($countD6) && intval($countD7) < intval($countD8)) || (intval($countD5) < intval($countD6) && intval($countD7) > intval($countD8))) {
      if ((intval($countD5) + intval($countD7)) > (intval($countD6) + intval($countD8))) {
        $d2point_A = 2;
        $d2point_B = 1;
      } elseif ((intval($countD5) + intval($countD7)) < (intval($countD6) + intval($countD8))) {
        $d2point_A = 1;
        $d2point_B = 2;
      } else {
        $d2point_A = 1;
        $d2point_B = 1;
      }
    } else {
      $d2point_A = 0;
      $d2point_B = 0;
    }
    $d3point_A = 0;
    $d3point_B = 0;
    if (intval($countD9) > intval($countD10) && intval($countD11) > intval($countD12)) {
      $d3point_A = 3;
      $d3point_B = 0;
    } elseif (intval($countD9) < intval($countD10) && intval($countD11) < intval($countD12)) {
      $d3point_A = 0;
      $d3point_B = 3;
    } elseif ((intval($countD9) > intval($countD10) && intval($countD11) < intval($countD12)) || (intval($countD9) < intval($countD10) && intval($countD11) > intval($countD12))) {
      if ((intval($countD9) + intval($countD11) )> (intval($countD10) + intval($countD12))) {
        $d3point_A = 2;
        $d3point_B = 1;
      } elseif ((intval($countD9) + intval($countD11) )< (intval($countD10) + intval($countD12))) {
        $d3point_A = 1;
        $d3point_B = 2;
      } else {
        $d3point_A = 1;
        $d3point_B = 1;
      }
    } else {
      $d3point_A = 0;
      $d3point_B = 0;
    }
    $d4point_A = 0;
    $d4point_B = 0;
    if (intval($countD13) > intval($countD14) && intval($countD15) > intval($countD16)) {
      $d4point_A = 3;
      $d4point_B = 0;
    } elseif (intval($countD13) < intval($countD14) && intval($countD15) < intval($countD16)) {
      $d4point_A = 0;
      $d4point_B = 3;
    } elseif ((intval($countD13) > intval($countD14) && intval($countD15) < intval($countD16)) || (intval($countD13) < intval($countD14) && intval($countD15) > intval($countD16))) {
      if ((intval($countD13) + intval($countD15) )> (intval($countD14) + intval($countD16))) {
        $d4point_A = 2;
        $d4point_B = 1;
      } elseif ((intval($countD13) + intval($countD15) )< (intval($countD14) + intval($countD16))) {
        $d4point_A = 1;
        $d4point_B = 2;
      } else {
        $d4point_A = 1;
        $d4point_B = 1;
      }
    } else {
      $d4point_A = 0;
      $d4point_B = 0;
    }
    $d5point_A = 0;
    $d5point_B = 0;
    if (intval($countD17) > intval($countD18) && intval($countD19) > intval($countD20)) {
      $d5point_A = 3;
      $d5point_B = 0;
    } elseif (intval($countD17) < intval($countD18) && intval($countD19) < intval($countD20)) {
      $d5point_A = 0;
      $d5point_B = 3;
    } elseif ((intval($countD17) > intval($countD18) && intval($countD19) < intval($countD20)) || (intval($countD17) < intval($countD18) && intval($countD19) > intval($countD20))) {
      if ((intval($countD17) + intval($countD19) )> (intval($countD18) + intval($countD20))) {
        $d5point_A = 2;
        $d5point_B = 1;
      } elseif ((intval($countD17) + intval($countD19) )< (intval($countD18) + intval($countD20))) {
        $d5point_A = 1;
        $d5point_B = 2;
      } else {
        $d5point_A = 1;
        $d5point_B = 1;
      }
    } else {
      $d5point_A = 0;
      $d5point_B = 0;
    }
    $d6point_A = 0;
    $d6point_B = 0;
    if (intval($countD21) > intval($countD22) && intval($countD23) > intval($countD24)) {
      $d6point_A = 3;
      $d6point_B = 0;
    } elseif (intval($countD21) < intval($countD22) && intval($countD23) < intval($countD24)) {
      $d6point_A = 0;
      $d6point_B = 3;
    } elseif ((intval($countD21) > intval($countD22) && intval($countD23) < intval($countD24)) || (intval($countD21) < intval($countD22) && intval($countD23) > intval($countD24))) {
      if ((intval($countD21) + intval($countD23) )> (intval($countD22) + intval($countD24))) {
        $d6point_A = 2;
        $d6point_B = 1;
      } elseif ((intval($countD21) + intval($countD23) )< (intval($countD22) + intval($countD24))) {
        $d6point_A = 1;
        $d6point_B = 2;
      } else {
        $d6point_A = 1;
        $d6point_B = 1;
      }
    } else {
      $d6point_A = 0;
      $d6point_B = 0;
    }
    $d7point_A = 0;
    $d7point_B = 0;
    if (intval($countD25) > intval($countD26) && intval($countD27) > intval($countD28)) {
      $d7point_A = 3;
      $d7point_B = 0;
    } elseif (intval($countD25) < intval($countD26) && intval($countD27) < intval($countD28)) {
      $d7point_A = 0;
      $d7point_B = 3;
    } elseif ((intval($countD25) > intval($countD26) && intval($countD27) < intval($countD28)) || (intval($countD25) < intval($countD26) && intval($countD27) > intval($countD28))) {
      if ((intval($countD25) + intval($countD27) )> (intval($countD26) + intval($countD28))) {
        $d7point_A = 2;
        $d7point_B = 1;
      } elseif ((intval($countD25) + intval($countD27) )< (intval($countD26) + intval($countD28))) {
        $d7point_A = 1;
        $d7point_B = 2;
      } else {
        $d7point_A = 1;
        $d7point_B = 1;
      }
    } else {
      $d7point_A = 0;
      $d7point_B = 0;
    }
    $d8point_A = 0;
    $d8point_B = 0;
    if (intval($countD29) > intval($countD30) && intval($countD31) > intval($countD32)) {
      $d8point_A = 3;
      $d8point_B = 0;
    } elseif (intval($countD29) < intval($countD30) && intval($countD31) < intval($countD32)) {
      $d8point_A = 0;
      $d8point_B = 3;
    } elseif ((intval($countD29) > intval($countD30) && intval($countD31) < intval($countD32)) || (intval($countD29) < intval($countD30) && intval($countD31) > intval($countD32))) {
      if ((intval($countD29) + intval($countD31) )> (intval($countD30) + intval($countD32))) {
        $d8point_A = 2;
        $d8point_B = 1;
      } elseif ((intval($countD29) + intval($countD31) )< (intval($countD30) + intval($countD32))) {
        $d8point_A = 1;
        $d8point_B = 2;
      } else {
        $d8point_A = 1;
        $d8point_B = 1;
      }
    } else {
      $d8point_A = 0;
      $d8point_B = 0;
    }
    $d9point_A = 0;
    $d9point_B = 0;
    if (intval($countD33) > intval($countD34) && intval($countD35) > intval($countD36)) {
      $d9point_A = 3;
      $d9point_B = 0;
    } elseif (intval($countD33) < intval($countD34) && intval($countD35) < intval($countD36)) {
      $d9point_A = 0;
      $d9point_B = 3;
    } elseif ((intval($countD33) > intval($countD34) && intval($countD35) < intval($countD36)) || (intval($countD33) < intval($countD34) && intval($countD35) > intval($countD36))) {
      if ((intval($countD33) + intval($countD35) )> (intval($countD34) + intval($countD36))) {
        $d9point_A = 2;
        $d9point_B = 1;
      } elseif ((intval($countD33) + intval($countD35) )< (intval($countD34) + intval($countD36))) {
        $d9point_A = 1;
        $d9point_B = 2;
      } else {
        $d9point_A = 1;
        $d9point_B = 1;
      }
    } else {
      $d9point_A = 0;
      $d9point_B = 0;
    }
    $d10point_A = 0;
    $d10point_B = 0;
    if (intval($countD37) > intval($countD38) && intval($countD39) > intval($countD40)) {
      $d10point_A = 3;
      $d10point_B = 0;
    } elseif (intval($countD37) < intval($countD38) && intval($countD39) < intval($countD40)) {
      $d10point_A = 0;
      $d10point_B = 3;
    } elseif ((intval($countD37) > intval($countD38) && intval($countD39) < intval($countD40)) || (intval($countD37) < intval($countD38) && intval($countD39) > intval($countD40))) {
      if ((intval($countD37) + intval($countD39) )> (intval($countD38) + intval($countD40))) {
        $d10point_A = 2;
        $d10point_B = 1;
      } elseif ((intval($countD37) + intval($countD39) )< (intval($countD38) + intval($countD40))) {
        $d10point_A = 1;
        $d10point_B = 2;
      } else {
        $d10point_A = 1;
        $d10point_B = 1;
      }
    } else {
      $d10point_A = 0;
      $d10point_B = 0;
    }
    $d11point_A = 0;
    $d11point_B = 0;
    if (intval($countD41) > intval($countD42) && intval($countD43) > intval($countD44)) {
      $d11point_A = 3;
      $d11point_B = 0;
    } elseif (intval($countD41) < intval($countD42) && intval($countD43) < intval($countD44)) {
      $d11point_A = 0;
      $d11point_B = 3;
    } elseif ((intval($countD41) > intval($countD42) && intval($countD43) < intval($countD44)) || (intval($countD41) < intval($countD42) && intval($countD43) > intval($countD44))) {
      if ((intval($countD41) + intval($countD43) )> (intval($countD42) + intval($countD44))) {
        $d11point_A = 2;
        $d11point_B = 1;
      } elseif ((intval($countD41) + intval($countD43) )< (intval($countD42) + intval($countD44))) {
        $d11point_A = 1;
        $d11point_B = 2;
      } else {
        $d11point_A = 1;
        $d11point_B = 1;
      }
    } else {
      $d11point_A = 0;
      $d11point_B = 0;
    }
    $d12point_A = 0;
    $d12point_B = 0;
    if (intval($countD45) > intval($countD46) && intval($countD47) > intval($countD48)) {
      $d12point_A = 3;
      $d12point_B = 0;
    } elseif (intval($countD45) < intval($countD46) && intval($countD47) < intval($countD48)) {
      $d12point_A = 0;
      $d12point_B = 3;
    } elseif ((intval($countD45) > intval($countD46) && intval($countD47) < intval($countD48)) || (intval($countD45) < intval($countD46) && intval($countD47) > intval($countD48))) {
      if ((intval($countD45) + intval($countD47) )> (intval($countD46) + intval($countD48))) {
        $d12point_A = 2;
        $d12point_B = 1;
      } elseif ((intval($countD45) + intval($countD47) )< (intval($countD46) + intval($countD48))) {
        $d12point_A = 1;
        $d12point_B = 2;
      } else {
        $d12point_A = 1;
        $d12point_B = 1;
      }
    } else {
      $d12point_A = 0;
      $d12point_B = 0;
    }

    // 得失点と勝ち点を入力
    $totalpoint = new Team;
    $totalpoint->timestamps =false;
    $totalpoint->where('number', 1)->update(['pre_score'=>((intval($countD1) + intval($countD3) + intval($countD13) + intval($countD15) + intval($countD17) + intval($countD19) + intval($countD25) + intval($countD27) + intval($countD37) + intval($countD39) + intval($countD41) + intval($countD43))-(intval($countD2) + intval($countD4) + intval($countD14) + intval($countD16) + intval($countD18) + intval($countD20) + intval($countD26) + intval($countD28) + intval($countD38) + intval($countD40) + intval($countD42) + intval($countD44))), 'pre_point'=>($d1point_A + $d4point_A + $d5point_A + $d7point_A + $d10point_A + $d11point_A)]);
    $totalpoint->where('number', 2)->update(['pre_score'=>((intval($countD2) + intval($countD4) + intval($countD9) + intval($countD11)+ intval($countD21) + intval($countD23) + intval($countD29) + intval($countD31) + intval($countD33) + intval($countD35) + intval($countD42) + intval($countD44) + intval($countD45) + intval($countD47))-(intval($countD1) + intval($countD3) + intval($countD10) + intval($countD12) + intval($countD22) + intval($countD24) + intval($countD30) + intval($countD32) + intval($countD34) + intval($countD36) + intval($countD41) + intval($countD43) + intval($countD46) + intval($countD48))), 'pre_point'=>($d1point_B + $d3point_A + $d6point_A + $d8point_A + $d9point_A + $d11point_B + $d12point_A)]);
    $totalpoint->where('number', 4)->update(['pre_score'=>((intval($countD14) + intval($countD16) + intval($countD30) + intval($countD32) + intval($countD46) + intval($countD48))-(intval($countD13) + intval($countD15) + intval($countD29) + intval($countD31) + intval($countD45) + intval($countD47))), 'pre_point'=>($d4point_B + $d8point_B + $d12point_B)]);
    $totalpoint->where('number', 5)->update(['pre_score'=>((intval($countD5) + intval($countD7) + intval($countD10) + intval($countD12) + intval($countD18) + intval($countD20) + intval($countD34) + intval($countD36) + intval($countD38) + intval($countD40))-(intval($countD6) + intval($countD8) + intval($countD9) + intval($countD11) + intval($countD17) + intval($countD19) + intval($countD33) + intval($countD35) + intval($countD37) + intval($countD39))), 'pre_point'=>($d2point_A + $d3point_B + $d5point_B + $d9point_B + $d10point_B)]);
    $totalpoint->where('number', 6)->update(['pre_score'=>((intval($countD6) + intval($countD8) + intval($countD22) + intval($countD24) + intval($countD26) + intval($countD28))-(intval($countD5) + intval($countD7) + intval($countD21) + intval($countD23) + intval($countD25) + intval($countD27))), 'pre_point'=>($d2point_B + $d6point_B + $d7point_B)]);
  }
  

  // Eコート予選結果計算機能
  public function changecount5(Request $request)
  {
    $countE1 = $request->input('countE1');
    $countE2 = $request->input('countE2');
    $countE3 = $request->input('countE3');
    $countE4 = $request->input('countE4');
    $countE5 = $request->input('countE5');
    $countE6 = $request->input('countE6');
    $countE7 = $request->input('countE7');
    $countE8 = $request->input('countE8');
    $countE9 = $request->input('countE9');
    $countE10 = $request->input('countE10');
    $countE11 = $request->input('countE11');
    $countE12 = $request->input('countE12');
    $countE13 = $request->input('countE13');
    $countE14 = $request->input('countE14');
    $countE15 = $request->input('countE15');
    $countE16 = $request->input('countE16');
    $countE17 = $request->input('countE17');
    $countE18 = $request->input('countE18');
    $countE19 = $request->input('countE19');
    $countE20 = $request->input('countE20');
    $countE21 = $request->input('countE21');
    $countE22 = $request->input('countE22');
    $countE23 = $request->input('countE23');
    $countE24 = $request->input('countE24');
    $countE25 = $request->input('countE25');
    $countE26 = $request->input('countE26');
    $countE27 = $request->input('countE27');
    $countE28 = $request->input('countE28');
    $countE29 = $request->input('countE29');
    $countE30 = $request->input('countE30');
    $countE31 = $request->input('countE31');
    $countE32 = $request->input('countE32');
    $countE33 = $request->input('countE33');
    $countE34 = $request->input('countE34');
    $countE35 = $request->input('countE35');
    $countE36 = $request->input('countE36');
    $countE37 = $request->input('countE37');
    $countE38 = $request->input('countE38');
    $countE39 = $request->input('countE39');
    $countE40 = $request->input('countE40');
    $countE41 = $request->input('countE41');
    $countE42 = $request->input('countE42');
    $countE43 = $request->input('countE43');
    $countE44 = $request->input('countE44');
    $countE45 = $request->input('countE45');
    $countE46 = $request->input('countE46');
    $countE47 = $request->input('countE47');
    $countE48 = $request->input('countE48');

    $changecountE = new Second;
    $changecountE->timestamps = false;
    $changecountE->where('id', 13)->update(['result1'=>$countE1, 'result2'=>$countE2, 'result3'=>$countE3, 'result4'=>$countE4]);
    $changecountE->where('id', 14)->update(['result1'=>$countE5, 'result2'=>$countE6, 'result3'=>$countE7, 'result4'=>$countE8]);
    $changecountE->where('id', 15)->update(['result1'=>$countE9, 'result2'=>$countE10, 'result3'=>$countE11, 'result4'=>$countE12]);
    $changecountE->where('id', 16)->update(['result1'=>$countE13, 'result2'=>$countE14, 'result3'=>$countE15, 'result4'=>$countE16]);
    $changecountE->where('id', 17)->update(['result1'=>$countE17, 'result2'=>$countE18, 'result3'=>$countE19, 'result4'=>$countE20]);
    $changecountE->where('id', 18)->update(['result1'=>$countE21, 'result2'=>$countE22, 'result3'=>$countE23, 'result4'=>$countE24]);
    $changecountE->where('id', 19)->update(['result1'=>$countE25, 'result2'=>$countE26, 'result3'=>$countE27, 'result4'=>$countE28]);
    $changecountE->where('id', 20)->update(['result1'=>$countE29, 'result2'=>$countE30, 'result3'=>$countE31, 'result4'=>$countE32]);
    $changecountE->where('id', 21)->update(['result1'=>$countE33, 'result2'=>$countE34, 'result3'=>$countE35, 'result4'=>$countE36]);
    $changecountE->where('id', 22)->update(['result1'=>$countE37, 'result2'=>$countE38, 'result3'=>$countE39, 'result4'=>$countE40]);
    $changecountE->where('id', 23)->update(['result1'=>$countE41, 'result2'=>$countE42, 'result3'=>$countE43, 'result4'=>$countE44]);
    $changecountE->where('id', 24)->update(['result1'=>$countE45, 'result2'=>$countE46, 'result3'=>$countE47, 'result4'=>$countE48]);

    // 勝ち点と得失点をteamテーブルに入れる
    $e1point_A = 0;
    $e1point_B = 0;
    if (intval($countE1) > intval($countE2) && intval($countE3) > intval($countE4)) {
      $e1point_A = 3;
      $e1point_B = 0;
    } elseif (intval($countE1) < intval($countE2) && intval($countE3) < intval($countE4)) {
      $e1point_A = 0;
      $e1point_B = 3;
    } elseif ((intval($countE1) > intval($countE2) && intval($countE3) < intval($countE4)) || (intval($countE1) < intval($countE2) && intval($countE3) > intval($countE4))) {
      if ((intval($countE1) + intval($countE3)) > (intval($countE2) + intval($countE4))) {
        $e1point_A = 2;
        $e1point_B = 1;
      } elseif ((intval($countE1) + intval($countE3)) < (intval($countE2) + intval($countE4))) {
        $e1point_A = 1;
        $e1point_B = 2;
      } else {
        $e1point_A = 1;
        $e1point_B = 1;
      }
    } else {
      $e1point_A = 0;
      $e1point_B = 0;
    }
    $e2point_A = 0;
    $e2point_B = 0;
    if (intval($countE5) > intval($countE6) && intval($countE7) > intval($countE8)) {
      $e2point_A = 3;
      $e2point_B = 0;
    } elseif (intval($countE5) < intval($countE6) && intval($countE7) < intval($countE8)) {
      $e2point_A = 0;
      $e2point_B = 3;
    } elseif ((intval($countE5) > intval($countE6) && intval($countE7) < intval($countE8)) || (intval($countE5) < intval($countE6) && intval($countE7) > intval($countE8))) {
      if ((intval($countE5) + intval($countE7)) > (intval($countE6) + intval($countE8))) {
        $e2point_A = 2;
        $e2point_B = 1;
      } elseif ((intval($countE5) + intval($countE7)) < (intval($countE6) + intval($countE8))) {
        $e2point_A = 1;
        $e2point_B = 2;
      } else {
        $e2point_A = 1;
        $e2point_B = 1;
      }
    } else {
      $e2point_A = 0;
      $e2point_B = 0;
    }
    $e3point_A = 0;
    $e3point_B = 0;
    if (intval($countE9) > intval($countE10) && intval($countE11) > intval($countE12)) {
      $e3point_A = 3;
      $e3point_B = 0;
    } elseif (intval($countE9) < intval($countE10) && intval($countE11) < intval($countE12)) {
      $e3point_A = 0;
      $e3point_B = 3;
    } elseif ((intval($countE9) > intval($countE10) && intval($countE11) < intval($countE12)) || (intval($countE9) < intval($countE10) && intval($countE11) > intval($countE12))) {
      if ((intval($countE9) + intval($countE11) )> (intval($countE10) + intval($countE12))) {
        $e3point_A = 2;
        $e3point_B = 1;
      } elseif ((intval($countE9) + intval($countE11) )< (intval($countE10) + intval($countE12))) {
        $e3point_A = 1;
        $e3point_B = 2;
      } else {
        $e3point_A = 1;
        $e3point_B = 1;
      }
    } else {
      $e3point_A = 0;
      $e3point_B = 0;
    }
    $e4point_A = 0;
    $e4point_B = 0;
    if (intval($countE13) > intval($countE14) && intval($countE15) > intval($countE16)) {
      $e4point_A = 3;
      $e4point_B = 0;
    } elseif (intval($countE13) < intval($countE14) && intval($countE15) < intval($countE16)) {
      $e4point_A = 0;
      $e4point_B = 3;
    } elseif ((intval($countE13) > intval($countE14) && intval($countE15) < intval($countE16)) || (intval($countE13) < intval($countE14) && intval($countE15) > intval($countE16))) {
      if ((intval($countE13) + intval($countE15) )> (intval($countE14) + intval($countE16))) {
        $e4point_A = 2;
        $e4point_B = 1;
      } elseif ((intval($countE13) + intval($countE15) )< (intval($countE14) + intval($countE16))) {
        $e4point_A = 1;
        $e4point_B = 2;
      } else {
        $e4point_A = 1;
        $e4point_B = 1;
      }
    } else {
      $e4point_A = 0;
      $e4point_B = 0;
    }
    $e5point_A = 0;
    $e5point_B = 0;
    if (intval($countE17) > intval($countE18) && intval($countE19) > intval($countE20)) {
      $e5point_A = 3;
      $e5point_B = 0;
    } elseif (intval($countE17) < intval($countE18) && intval($countE19) < intval($countE20)) {
      $e5point_A = 0;
      $e5point_B = 3;
    } elseif ((intval($countE17) > intval($countE18) && intval($countE19) < intval($countE20)) || (intval($countE17) < intval($countE18) && intval($countE19) > intval($countE20))) {
      if ((intval($countE17) + intval($countE19) )> (intval($countE18) + intval($countE20))) {
        $e5point_A = 2;
        $e5point_B = 1;
      } elseif ((intval($countE17) + intval($countE19) )< (intval($countE18) + intval($countE20))) {
        $e5point_A = 1;
        $e5point_B = 2;
      } else {
        $e5point_A = 1;
        $e5point_B = 1;
      }
    } else {
      $e5point_A = 0;
      $e5point_B = 0;
    }
    $e6point_A = 0;
    $e6point_B = 0;
    if (intval($countE21) > intval($countE22) && intval($countE23) > intval($countE24)) {
      $e6point_A = 3;
      $e6point_B = 0;
    } elseif (intval($countE21) < intval($countE22) && intval($countE23) < intval($countE24)) {
      $e6point_A = 0;
      $e6point_B = 3;
    } elseif ((intval($countE21) > intval($countE22) && intval($countE23) < intval($countE24)) || (intval($countE21) < intval($countE22) && intval($countE23) > intval($countE24))) {
      if ((intval($countE21) + intval($countE23) )> (intval($countE22) + intval($countE24))) {
        $e6point_A = 2;
        $e6point_B = 1;
      } elseif ((intval($countE21) + intval($countE23) )< (intval($countE22) + intval($countE24))) {
        $e6point_A = 1;
        $e6point_B = 2;
      } else {
        $e6point_A = 1;
        $e6point_B = 1;
      }
    } else {
      $e6point_A = 0;
      $e6point_B = 0;
    }
    $e7point_A = 0;
    $e7point_B = 0;
    if (intval($countE25) > intval($countE26) && intval($countE27) > intval($countE28)) {
      $e7point_A = 3;
      $e7point_B = 0;
    } elseif (intval($countE25) < intval($countE26) && intval($countE27) < intval($countE28)) {
      $e7point_A = 0;
      $e7point_B = 3;
    } elseif ((intval($countE25) > intval($countE26) && intval($countE27) < intval($countE28)) || (intval($countE25) < intval($countE26) && intval($countE27) > intval($countE28))) {
      if ((intval($countE25) + intval($countE27) )> (intval($countE26) + intval($countE28))) {
        $e7point_A = 2;
        $e7point_B = 1;
      } elseif ((intval($countE25) + intval($countE27) )< (intval($countE26) + intval($countE28))) {
        $e7point_A = 1;
        $e7point_B = 2;
      } else {
        $e7point_A = 1;
        $e7point_B = 1;
      }
    } else {
      $e7point_A = 0;
      $e7point_B = 0;
    }
    $e8point_A = 0;
    $e8point_B = 0;
    if (intval($countE29) > intval($countE30) && intval($countE31) > intval($countE32)) {
      $e8point_A = 3;
      $e8point_B = 0;
    } elseif (intval($countE29) < intval($countE30) && intval($countE31) < intval($countE32)) {
      $e8point_A = 0;
      $e8point_B = 3;
    } elseif ((intval($countE29) > intval($countE30) && intval($countE31) < intval($countE32)) || (intval($countE29) < intval($countE30) && intval($countE31) > intval($countE32))) {
      if ((intval($countE29) + intval($countE31) )> (intval($countE30) + intval($countE32))) {
        $e8point_A = 2;
        $e8point_B = 1;
      } elseif ((intval($countE29) + intval($countE31) )< (intval($countE30) + intval($countE32))) {
        $e8point_A = 1;
        $e8point_B = 2;
      } else {
        $e8point_A = 1;
        $e8point_B = 1;
      }
    } else {
      $e8point_A = 0;
      $e8point_B = 0;
    }
    $e9point_A = 0;
    $e9point_B = 0;
    if (intval($countE33) > intval($countE34) && intval($countE35) > intval($countE36)) {
      $e9point_A = 3;
      $e9point_B = 0;
    } elseif (intval($countE33) < intval($countE34) && intval($countE35) < intval($countE36)) {
      $e9point_A = 0;
      $e9point_B = 3;
    } elseif ((intval($countE33) > intval($countE34) && intval($countE35) < intval($countE36)) || (intval($countE33) < intval($countE34) && intval($countE35) > intval($countE36))) {
      if ((intval($countE33) + intval($countE35) )> (intval($countE34) + intval($countE36))) {
        $e9point_A = 2;
        $e9point_B = 1;
      } elseif ((intval($countE33) + intval($countE35) )< (intval($countE34) + intval($countE36))) {
        $e9point_A = 1;
        $e9point_B = 2;
      } else {
        $e9point_A = 1;
        $e9point_B = 1;
      }
    } else {
      $e9point_A = 0;
      $e9point_B = 0;
    }
    $e10point_A = 0;
    $e10point_B = 0;
    if (intval($countE37) > intval($countE38) && intval($countE39) > intval($countE40)) {
      $e10point_A = 3;
      $e10point_B = 0;
    } elseif (intval($countE37) < intval($countE38) && intval($countE39) < intval($countE40)) {
      $e10point_A = 0;
      $e10point_B = 3;
    } elseif ((intval($countE37) > intval($countE38) && intval($countE39) < intval($countE40)) || (intval($countE37) < intval($countE38) && intval($countE39) > intval($countE40))) {
      if ((intval($countE37) + intval($countE39) )> (intval($countE38) + intval($countE40))) {
        $e10point_A = 2;
        $e10point_B = 1;
      } elseif ((intval($countE37) + intval($countE39) )< (intval($countE38) + intval($countE40))) {
        $e10point_A = 1;
        $e10point_B = 2;
      } else {
        $e10point_A = 1;
        $e10point_B = 1;
      }
    } else {
      $e10point_A = 0;
      $e10point_B = 0;
    }
    $e11point_A = 0;
    $e11point_B = 0;
    if (intval($countE41) > intval($countE42) && intval($countE43) > intval($countE44)) {
      $e11point_A = 3;
      $e11point_B = 0;
    } elseif (intval($countE41) < intval($countE42) && intval($countE43) < intval($countE44)) {
      $e11point_A = 0;
      $e11point_B = 3;
    } elseif ((intval($countE41) > intval($countE42) && intval($countE43) < intval($countE44)) || (intval($countE41) < intval($countE42) && intval($countE43) > intval($countE44))) {
      if ((intval($countE41) + intval($countE43) )> (intval($countE42) + intval($countE44))) {
        $e11point_A = 2;
        $e11point_B = 1;
      } elseif ((intval($countE41) + intval($countE43) )< (intval($countE42) + intval($countE44))) {
        $e11point_A = 1;
        $e11point_B = 2;
      } else {
        $e11point_A = 1;
        $e11point_B = 1;
      }
    } else {
      $e11point_A = 0;
      $e11point_B = 0;
    }
    $e12point_A = 0;
    $e12point_B = 0;
    if (intval($countE45) > intval($countE46) && intval($countE47) > intval($countE48)) {
      $e12point_A = 3;
      $e12point_B = 0;
    } elseif (intval($countE45) < intval($countE46) && intval($countE47) < intval($countE48)) {
      $e12point_A = 0;
      $e12point_B = 3;
    } elseif ((intval($countE45) > intval($countE46) && intval($countE47) < intval($countE48)) || (intval($countE45) < intval($countE46) && intval($countE47) > intval($countE48))) {
      if ((intval($countE45) + intval($countE47) )> (intval($countE46) + intval($countE48))) {
        $e12point_A = 2;
        $e12point_B = 1;
      } elseif ((intval($countE45) + intval($countE47) )< (intval($countE46) + intval($countE48))) {
        $e12point_A = 1;
        $e12point_B = 2;
      } else {
        $e12point_A = 1;
        $e12point_B = 1;
      }
    } else {
      $e12point_A = 0;
      $e12point_B = 0;
    }

    // 得失点と勝ち点を入力
    $totalpoint = new Team;
    $totalpoint->timestamps =false;
    $totalpoint->where('number', 1)->update(['mid_score'=>((intval($countE5) + intval($countE7) + intval($countE29) + intval($countE31))-(intval($countE6) + intval($countE8) + intval($countE30) + intval($countE32))), 'mid_point'=>($e2point_A + $e8point_A)]);
    $totalpoint->where('number', 2)->update(['mid_score'=>((intval($countE13) + intval($countE15))-(intval($countE14) + intval($countE16))), 'mid_point'=>($e4point_A)]);
    $totalpoint->where('number', 3)->update(['mid_score'=>((intval($countE1) + intval($countE3) + intval($countE6) + intval($countE8) + intval($countE14) + intval($countE16) + intval($countE17) + intval($countE19) + intval($countE25) + intval($countE27) + intval($countE30) + intval($countE32) + intval($countE37) + intval($countE39) + intval($countE41) + intval($countE43))-(intval($countE2) + intval($countE4) + intval($countE5) + intval($countE7) + intval($countE13) + intval($countE15) + intval($countE18) + intval($countE20) + intval($countE26) + intval($countE28) + intval($countE29) + intval($countE31) + intval($countE38) + intval($countE40) + intval($countE42) + intval($countE44))), 'mid_point'=>($e1point_A + $e2point_B + $e4point_B + $e5point_A + $e7point_A + $e8point_B + $e10point_A + $e11point_A)]);
    $totalpoint->where('number', 4)->update(['mid_score'=>((intval($countE2) + intval($countE4) + intval($countE9) + intval($countE11) + intval($countE21) + intval($countE23) + intval($countE33) + intval($countE35) + intval($countE42) + intval($countE44))-(intval($countE1) + intval($countE3) + intval($countE10) + intval($countE12) + intval($countE22) + intval($countE24) + intval($countE34) + intval($countE36) + intval($countE41) + intval($countE43))), 'mid_point'=>($e1point_B + $e3point_A + $e6point_A+ $e9point_A+ $e11point_B)]);
    $totalpoint->where('number', 5)->update(['mid_score'=>((intval($countE22) + intval($countE24) + intval($countE26) + intval($countE28) + intval($countE45) + intval($countE47))-(intval($countE21) + intval($countE23) + intval($countE25) + intval($countE27) + intval($countE46) + intval($countE48))), 'mid_point'=>($e6point_B + $e7point_B + $e12point_A)]);
    $totalpoint->where('number', 6)->update(['mid_score'=>((intval($countE10) + intval($countE12) + intval($countE18) + intval($countE20) + intval($countE34) + intval($countE36) + intval($countE38) + intval($countE40) + intval($countE46) + intval($countE48))-(intval($countE9) + intval($countE11) + intval($countE17) + intval($countE19) + intval($countE33) + intval($countE35) + intval($countE37) + intval($countE39) + intval($countE45) + intval($countE47))), 'mid_point'=>($e3point_B + $e5point_B + $e9point_B + $e10point_B + $e12point_B)]);
  }
}
