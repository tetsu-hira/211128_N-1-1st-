// 最終結果計算機能
public function changecount3(Request $request)
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
  $changecountA1 = new Third;
  $changecountA1->timestamps = false;
  $changecountA1->where('id', 1)->update(['result1'=>$countA1, 'result2'=>$countA2, 'result3'=>$countA3, 'result4'=>$countA4]);
  $changecountA2 = new Third;
  $changecountA2->timestamps = false;
  $changecountA2->where('id', 2)->update(['result1'=>$countA5, 'result2'=>$countA6, 'result3'=>$countA7, 'result4'=>$countA8]);
  $changecountA3 = new Third;
  $changecountA3->timestamps = false;
  $changecountA3->where('id', 3)->update(['result1'=>$countA9, 'result2'=>$countA10, 'result3'=>$countA11, 'result4'=>$countA12]);
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
  $changecountB1 = new Third;
  $changecountB1->timestamps = false;
  $changecountB1->where('id', 4)->update(['result1'=>$countB1, 'result2'=>$countB2, 'result3'=>$countB3, 'result4'=>$countB4]);
  $changecountB2 = new Third;
  $changecountB2->timestamps = false;
  $changecountB2->where('id', 5)->update(['result1'=>$countB5, 'result2'=>$countB6, 'result3'=>$countB7, 'result4'=>$countB8]);
  $changecountB3 = new Third;
  $changecountB3->timestamps = false;
  $changecountB3->where('id', 6)->update(['result1'=>$countB9, 'result2'=>$countB10, 'result3'=>$countB11, 'result4'=>$countB12]);
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
  $changecountC1 = new Third;
  $changecountC1->timestamps = false;
  $changecountC1->where('id', 7)->update(['result1'=>$countC1, 'result2'=>$countC2, 'result3'=>$countC3, 'result4'=>$countC4]);
  $changecountC2 = new Third;
  $changecountC2->timestamps = false;
  $changecountC2->where('id', 8)->update(['result1'=>$countC5, 'result2'=>$countC6, 'result3'=>$countC7, 'result4'=>$countC8]);
  $changecountC3 = new Third;
  $changecountC3->timestamps = false;
  $changecountC3->where('id', 9)->update(['result1'=>$countC9, 'result2'=>$countC10, 'result3'=>$countC11, 'result4'=>$countC12]);
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
  $changecountD1 = new Third;
  $changecountD1->timestamps = false;
  $changecountD1->where('id', 10)->update(['result1'=>$countD1, 'result2'=>$countD2, 'result3'=>$countD3, 'result4'=>$countD4]);
  $changecountD2 = new Third;
  $changecountD2->timestamps = false;
  $changecountD2->where('id', 11)->update(['result1'=>$countD5, 'result2'=>$countD6, 'result3'=>$countD7, 'result4'=>$countD8]);
  $changecountD3 = new Third;
  $changecountD3->timestamps = false;
  $changecountD3->where('id', 12)->update(['result1'=>$countD9, 'result2'=>$countD10, 'result3'=>$countD11, 'result4'=>$countD12]);
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
  $changecountE1 = new Third;
  $changecountE1->timestamps = false;
  $changecountE1->where('id', 13)->update(['result1'=>$countE1, 'result2'=>$countE2, 'result3'=>$countE3, 'result4'=>$countE4]);
  $changecountE2 = new Third;
  $changecountE2->timestamps = false;
  $changecountE2->where('id', 14)->update(['result1'=>$countE5, 'result2'=>$countE6, 'result3'=>$countE7, 'result4'=>$countE8]);
  $changecountE3 = new Third;
  $changecountE3->timestamps = false;
  $changecountE3->where('id', 15)->update(['result1'=>$countE9, 'result2'=>$countE10, 'result3'=>$countE11, 'result4'=>$countE12]);
  $countF1 = $request->input('countF1');
  $countF2 = $request->input('countF2');
  $countF3 = $request->input('countF3');
  $countF4 = $request->input('countF4');
  $countF5 = $request->input('countF5');
  $countF6 = $request->input('countF6');
  $countF7 = $request->input('countF7');
  $countF8 = $request->input('countF8');
  $countF9 = $request->input('countF9');
  $countF10 = $request->input('countF10');
  $countF11 = $request->input('countF11');
  $countF12 = $request->input('countF12');
  $changecountF1 = new Third;
  $changecountF1->timestamps = false;
  $changecountF1->where('id', 16)->update(['result1'=>$countF1, 'result2'=>$countF2, 'result3'=>$countF3, 'result4'=>$countF4]);
  $changecountF2 = new Third;
  $changecountF2->timestamps = false;
  $changecountF2->where('id', 17)->update(['result1'=>$countF5, 'result2'=>$countF6, 'result3'=>$countF7, 'result4'=>$countF8]);
  $changecountF3 = new Third;
  $changecountF3->timestamps = false;
  $changecountF3->where('id', 18)->update(['result1'=>$countF9, 'result2'=>$countF10, 'result3'=>$countF11, 'result4'=>$countF12]);
  $a1point_A = 0;
  $a1point_B = 0;
  // 勝ち点と得失点をteamテーブルに入れる
  // Aコート用
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
  $totalpoint = new Post;
  $totalpoint->timestamps =false;
  $totalpoint->where('las_court', "A")->where('las_number', 1)->update(['las_score'=>((intval($countA1) + intval($countA3) + intval($countA9) + intval($countA11))-(intval($countA2) + intval($countA4) + intval($countA10) + intval($countA12))), 'las_point'=>($a1point_A + $a3point_A)]);
  $totalpoint->where('las_court', "A")->where('las_number', 2)->update(['las_score'=>((intval($countA2) + intval($countA4) + intval($countA5) + intval($countA7))-(intval($countA1) + intval($countA3) + intval($countA6) + intval($countA8))), 'las_point'=>($a1point_B + $a2point_A)]);
  $totalpoint->where('las_court', "A")->where('las_number', 3)->update(['las_score'=>((intval($countA6) + intval($countA8) + intval($countA10) + intval($countA12))-(intval($countA5) + intval($countA7) + intval($countA9) + intval($countA11))), 'las_point'=>($a2point_B + $a3point_B)]);
  // Bコート用
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
  $totalpoint = new Post;
  $totalpoint->timestamps =false;
  $totalpoint->where('las_court', "B")->where('las_number', 1)->update(['las_score'=>((intval($countB1) + intval($countB3) + intval($countB9) + intval($countB11))-(intval($countB2) + intval($countB4) + intval($countB10) + intval($countB12))), 'las_point'=>($b1point_A + $b3point_A)]);
  $totalpoint->where('las_court', "B")->where('las_number', 2)->update(['las_score'=>((intval($countB2) + intval($countB4) + intval($countB5) + intval($countB7))-(intval($countB1) + intval($countB3) + intval($countB6) + intval($countB8))), 'las_point'=>($b1point_B + $b2point_A)]);
  $totalpoint->where('las_court', "B")->where('las_number', 3)->update(['las_score'=>((intval($countB6) + intval($countB8) + intval($countB10) + intval($countB12))-(intval($countB5) + intval($countB7) + intval($countB9) + intval($countB11))), 'las_point'=>($b2point_B + $b3point_B)]);
  // Cコート用
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
  $totalpoint = new Post;
  $totalpoint->timestamps =false;
  $totalpoint->where('las_court', "C")->where('las_number', 1)->update(['las_score'=>((intval($countC1) + intval($countC3) + intval($countC9) + intval($countC11))-(intval($countC2) + intval($countC4) + intval($countC10) + intval($countC12))), 'las_point'=>($c1point_A + $c3point_A)]);
  $totalpoint->where('las_court', "C")->where('las_number', 2)->update(['las_score'=>((intval($countC2) + intval($countC4) + intval($countC5) + intval($countC7))-(intval($countC1) + intval($countC3) + intval($countC6) + intval($countC8))), 'las_point'=>($c1point_B + $c2point_A)]);
  $totalpoint->where('las_court', "C")->where('las_number', 3)->update(['las_score'=>((intval($countC6) + intval($countC8) + intval($countC10) + intval($countC12))-(intval($countC5) + intval($countC7) + intval($countC9) + intval($countC11))), 'las_point'=>($c2point_B + $c3point_B)]);
  // Dコート用
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
  $totalpoint = new Post;
  $totalpoint->timestamps =false;
  $totalpoint->where('las_court', "D")->where('las_number', 1)->update(['las_score'=>((intval($countD1) + intval($countD3) + intval($countD9) + intval($countD11))-(intval($countD2) + intval($countD4) + intval($countD10) + intval($countD12))), 'las_point'=>($d1point_A + $d3point_A)]);
  $totalpoint->where('las_court', "D")->where('las_number', 2)->update(['las_score'=>((intval($countD2) + intval($countD4) + intval($countD5) + intval($countD7))-(intval($countD1) + intval($countD3) + intval($countD6) + intval($countD8))), 'las_point'=>($d1point_B + $d2point_A)]);
  $totalpoint->where('las_court', "D")->where('las_number', 3)->update(['las_score'=>((intval($countD6) + intval($countD8) + intval($countD10) + intval($countD12))-(intval($countD5) + intval($countD7) + intval($countD9) + intval($countD11))), 'las_point'=>($d2point_B + $d3point_B)]);
  // Eコート用
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
  $totalpoint = new Post;
  $totalpoint->timestamps =false;
  $totalpoint->where('las_court', "E")->where('las_number', 1)->update(['las_score'=>((intval($countE1) + intval($countE3) + intval($countE9) + intval($countE11))-(intval($countE2) + intval($countE4) + intval($countE10) + intval($countE12))), 'las_point'=>($e1point_A + $e3point_A)]);
  $totalpoint->where('las_court', "E")->where('las_number', 2)->update(['las_score'=>((intval($countE2) + intval($countE4) + intval($countE5) + intval($countE7))-(intval($countE1) + intval($countE3) + intval($countE6) + intval($countE8))), 'las_point'=>($e1point_B + $e2point_A)]);
  $totalpoint->where('las_court', "E")->where('las_number', 3)->update(['las_score'=>((intval($countE6) + intval($countE8) + intval($countE10) + intval($countE12))-(intval($countE5) + intval($countE7) + intval($countE9) + intval($countE11))), 'las_point'=>($e2point_B + $e3point_B)]);
  // Fコート用
  if (intval($countF1) > intval($countF2) && intval($countF3) > intval($countF4)) {
    $f1point_A = 3;
    $f1point_B = 0;
  } elseif (intval($countF1) < intval($countF2) && intval($countF3) < intval($countF4)) {
    $f1point_A = 0;
    $f1point_B = 3;
  } elseif ((intval($countF1) > intval($countF2) && intval($countF3) < intval($countF4)) || (intval($countF1) < intval($countF2) && intval($countF3) > intval($countF4))) {
    if ((intval($countF1) + intval($countF3)) > (intval($countF2) + intval($countF4))) {
      $f1point_A = 2;
      $f1point_B = 1;
    } elseif ((intval($countF1) + intval($countF3)) < (intval($countF2) + intval($countF4))) {
      $f1point_A = 1;
      $f1point_B = 2;
    } else {
      $f1point_A = 1;
      $f1point_B = 1;
    }
  } else {
    $f1point_A = 0;
    $f1point_B = 0;
  }
  $f2point_A = 0;
  $f2point_B = 0;
  if (intval($countF5) > intval($countF6) && intval($countF7) > intval($countF8)) {
    $f2point_A = 3;
    $f2point_B = 0;
  } elseif (intval($countF5) < intval($countF6) && intval($countF7) < intval($countF8)) {
    $f2point_A = 0;
    $f2point_B = 3;
  } elseif ((intval($countF5) > intval($countF6) && intval($countF7) < intval($countF8)) || (intval($countF5) < intval($countF6) && intval($countF7) > intval($countF8))) {
    if ((intval($countF5) + intval($countF7)) > (intval($countF6) + intval($countF8))) {
      $f2point_A = 2;
      $f2point_B = 1;
    } elseif ((intval($countF5) + intval($countF7)) < (intval($countF6) + intval($countF8))) {
      $f2point_A = 1;
      $f2point_B = 2;
    } else {
      $f2point_A = 1;
      $f2point_B = 1;
    }
  } else {
    $f2point_A = 0;
    $f2point_B = 0;
  }
  $f3point_A = 0;
  $f3point_B = 0;
  if (intval($countF9) > intval($countF10) && intval($countF11) > intval($countF12)) {
    $f3point_A = 3;
    $f3point_B = 0;
  } elseif (intval($countF9) < intval($countF10) && intval($countF11) < intval($countF12)) {
    $f3point_A = 0;
    $f3point_B = 3;
  } elseif ((intval($countF9) > intval($countF10) && intval($countF11) < intval($countF12)) || (intval($countF9) < intval($countF10) && intval($countF11) > intval($countF12))) {
    if ((intval($countF9) + intval($countF11) )> (intval($countF10) + intval($countF12))) {
      $f3point_A = 2;
      $f3point_B = 1;
    } elseif ((intval($countF9) + intval($countF11) )< (intval($countF10) + intval($countF12))) {
      $f3point_A = 1;
      $f3point_B = 2;
    } else {
      $f3point_A = 1;
      $f3point_B = 1;
    }
  } else {
    $f3point_A = 0;
    $f3point_B = 0;
  }
  $totalpoint = new Post;
  $totalpoint->timestamps =false;
  $totalpoint->where('las_court', "F")->where('las_number', 1)->update(['las_score'=>((intval($countF1) + intval($countF3) + intval($countF9) + intval($countF11))-(intval($countF2) + intval($countF4) + intval($countF10) + intval($countF12))), 'las_point'=>($f1point_A + $f3point_A)]);
  $totalpoint->where('las_court', "F")->where('las_number', 2)->update(['las_score'=>((intval($countF2) + intval($countF4) + intval($countF5) + intval($countF7))-(intval($countF1) + intval($countF3) + intval($countF6) + intval($countF8))), 'las_point'=>($f1point_B + $f2point_A)]);
  $totalpoint->where('las_court', "F")->where('las_number', 3)->update(['las_score'=>((intval($countF6) + intval($countF8) + intval($countF10) + intval($countF12))-(intval($countF5) + intval($countF7) + intval($countF9) + intval($countF11))), 'las_point'=>($f2point_B + $f3point_B)]);
  // 総合点を入力
  // idが1のチームここから
  $laspoint1 = $totalpoint::where('id', 1)->value('las_point');
  $laspoint1 = $totalpoint::where('id', 1)->value('las_point');
  $laspoint1 = $totalpoint::where('id', 1)->value('las_point');
  $totalpoint->where('id', 1)->update(['sum_point'=>(intval($laspoint1)+intval($laspoint1)+intval($laspoint1))]);
  $lasscore1 = $totalpoint::where('id', 1)->value('las_score');
  $lasscore1 = $totalpoint::where('id', 1)->value('las_score');
  $lasscore1 = $totalpoint::where('id', 1)->value('las_score');
  $totalpoint->where('id', 1)->update(['sum_score'=>(intval($lasscore1)+intval($lasscore1)+intval($lasscore1))]);
  // idが2のチームここから
  $laspoint2 = $totalpoint::where('id', 2)->value('las_point');
  $laspoint2 = $totalpoint::where('id', 2)->value('las_point');
  $laspoint2 = $totalpoint::where('id', 2)->value('las_point');
  $totalpoint->where('id', 2)->update(['sum_point'=>(intval($laspoint2)+intval($laspoint2)+intval($laspoint2))]);
  $lasscore2 = $totalpoint::where('id', 2)->value('las_score');
  $lasscore2 = $totalpoint::where('id', 2)->value('las_score');
  $lasscore2 = $totalpoint::where('id', 2)->value('las_score');
  $totalpoint->where('id', 2)->update(['sum_score'=>(intval($lasscore2)+intval($lasscore2)+intval($lasscore2))]);
  // idが3のチームここから
  $laspoint3 = $totalpoint::where('id', 3)->value('las_point');
  $laspoint3 = $totalpoint::where('id', 3)->value('las_point');
  $laspoint3 = $totalpoint::where('id', 3)->value('las_point');
  $totalpoint->where('id', 3)->update(['sum_point'=>(intval($laspoint3)+intval($laspoint3)+intval($laspoint3))]);
  $lasscore3 = $totalpoint::where('id', 3)->value('las_score');
  $lasscore3 = $totalpoint::where('id', 3)->value('las_score');
  $lasscore3 = $totalpoint::where('id', 3)->value('las_score');
  $totalpoint->where('id', 3)->update(['sum_score'=>(intval($lasscore3)+intval($lasscore3)+intval($lasscore3))]);
  // idが4のチームここから
  $laspoint4 = $totalpoint::where('id', 4)->value('las_point');
  $laspoint4 = $totalpoint::where('id', 4)->value('las_point');
  $laspoint4 = $totalpoint::where('id', 4)->value('las_point');
  $totalpoint->where('id', 4)->update(['sum_point'=>(intval($laspoint4)+intval($laspoint4)+intval($laspoint4))]);
  $lasscore4 = $totalpoint::where('id', 4)->value('las_score');
  $lasscore4 = $totalpoint::where('id', 4)->value('las_score');
  $lasscore4 = $totalpoint::where('id', 4)->value('las_score');
  $totalpoint->where('id', 4)->update(['sum_score'=>(intval($lasscore4)+intval($lasscore4)+intval($lasscore4))]);
  // idが5のチームここから
  $laspoint5 = $totalpoint::where('id', 5)->value('las_point');
  $laspoint5 = $totalpoint::where('id', 5)->value('las_point');
  $laspoint5 = $totalpoint::where('id', 5)->value('las_point');
  $totalpoint->where('id', 5)->update(['sum_point'=>(intval($laspoint5)+intval($laspoint5)+intval($laspoint5))]);
  $lasscore5 = $totalpoint::where('id', 5)->value('las_score');
  $lasscore5 = $totalpoint::where('id', 5)->value('las_score');
  $lasscore5 = $totalpoint::where('id', 5)->value('las_score');
  $totalpoint->where('id', 5)->update(['sum_score'=>(intval($lasscore5)+intval($lasscore5)+intval($lasscore5))]);
  // idが6のチームここから
  $laspoint6 = $totalpoint::where('id', 6)->value('las_point');
  $laspoint6 = $totalpoint::where('id', 6)->value('las_point');
  $laspoint6 = $totalpoint::where('id', 6)->value('las_point');
  $totalpoint->where('id', 6)->update(['sum_point'=>(intval($laspoint6)+intval($laspoint6)+intval($laspoint6))]);
  $lasscore6 = $totalpoint::where('id', 6)->value('las_score');
  $lasscore6 = $totalpoint::where('id', 6)->value('las_score');
  $lasscore6 = $totalpoint::where('id', 6)->value('las_score');
  $totalpoint->where('id', 6)->update(['sum_score'=>(intval($lasscore6)+intval($lasscore6)+intval($lasscore6))]);
  // idが7のチームここから
  $laspoint7 = $totalpoint::where('id', 7)->value('las_point');
  $laspoint7 = $totalpoint::where('id', 7)->value('las_point');
  $laspoint7 = $totalpoint::where('id', 7)->value('las_point');
  $totalpoint->where('id', 7)->update(['sum_point'=>(intval($laspoint7)+intval($laspoint7)+intval($laspoint7))]);
  $lasscore7 = $totalpoint::where('id', 7)->value('las_score');
  $lasscore7 = $totalpoint::where('id', 7)->value('las_score');
  $lasscore7 = $totalpoint::where('id', 7)->value('las_score');
  $totalpoint->where('id', 7)->update(['sum_score'=>(intval($lasscore7)+intval($lasscore7)+intval($lasscore7))]);
  // idが8のチームここから
  $laspoint8 = $totalpoint::where('id', 8)->value('las_point');
  $laspoint8 = $totalpoint::where('id', 8)->value('las_point');
  $laspoint8 = $totalpoint::where('id', 8)->value('las_point');
  $totalpoint->where('id', 8)->update(['sum_point'=>(intval($laspoint8)+intval($laspoint8)+intval($laspoint8))]);
  $lasscore8 = $totalpoint::where('id', 8)->value('las_score');
  $lasscore8 = $totalpoint::where('id', 8)->value('las_score');
  $lasscore8 = $totalpoint::where('id', 8)->value('las_score');
  $totalpoint->where('id', 8)->update(['sum_score'=>(intval($lasscore8)+intval($lasscore8)+intval($lasscore8))]);
  // idが9のチームここから
  $laspoint9 = $totalpoint::where('id', 9)->value('las_point');
  $laspoint9 = $totalpoint::where('id', 9)->value('las_point');
  $laspoint9 = $totalpoint::where('id', 9)->value('las_point');
  $totalpoint->where('id', 9)->update(['sum_point'=>(intval($laspoint9)+intval($laspoint9)+intval($laspoint9))]);
  $lasscore9 = $totalpoint::where('id', 9)->value('las_score');
  $lasscore9 = $totalpoint::where('id', 9)->value('las_score');
  $lasscore9 = $totalpoint::where('id', 9)->value('las_score');
  $totalpoint->where('id', 9)->update(['sum_score'=>(intval($lasscore9)+intval($lasscore9)+intval($lasscore9))]);
  // idが10のチームここから
  $laspoint10 = $totalpoint::where('id', 10)->value('las_point');
  $laspoint10 = $totalpoint::where('id', 10)->value('las_point');
  $laspoint10 = $totalpoint::where('id', 10)->value('las_point');
  $totalpoint->where('id', 10)->update(['sum_point'=>(intval($laspoint10)+intval($laspoint10)+intval($laspoint10))]);
  $lasscore10 = $totalpoint::where('id', 10)->value('las_score');
  $lasscore10 = $totalpoint::where('id', 10)->value('las_score');
  $lasscore10 = $totalpoint::where('id', 10)->value('las_score');
  $totalpoint->where('id', 10)->update(['sum_score'=>(intval($lasscore10)+intval($lasscore10)+intval($lasscore10))]);
  // idが11のチームここから
  $laspoint11 = $totalpoint::where('id', 11)->value('las_point');
  $laspoint11 = $totalpoint::where('id', 11)->value('las_point');
  $laspoint11 = $totalpoint::where('id', 11)->value('las_point');
  $totalpoint->where('id', 11)->update(['sum_point'=>(intval($laspoint11)+intval($laspoint11)+intval($laspoint11))]);
  $lasscore11 = $totalpoint::where('id', 11)->value('las_score');
  $lasscore11 = $totalpoint::where('id', 11)->value('las_score');
  $lasscore11 = $totalpoint::where('id', 11)->value('las_score');
  $totalpoint->where('id', 11)->update(['sum_score'=>(intval($lasscore11)+intval($lasscore11)+intval($lasscore11))]);
  // idが12のチームここから
  $laspoint12 = $totalpoint::where('id', 12)->value('las_point');
  $laspoint12 = $totalpoint::where('id', 12)->value('las_point');
  $laspoint12 = $totalpoint::where('id', 12)->value('las_point');
  $totalpoint->where('id', 12)->update(['sum_point'=>(intval($laspoint12)+intval($laspoint12)+intval($laspoint12))]);
  $lasscore12 = $totalpoint::where('id', 12)->value('las_score');
  $lasscore12 = $totalpoint::where('id', 12)->value('las_score');
  $lasscore12 = $totalpoint::where('id', 12)->value('las_score');
  $totalpoint->where('id', 12)->update(['sum_score'=>(intval($lasscore12)+intval($lasscore12)+intval($lasscore12))]);
  // idが13のチームここから
  $laspoint13 = $totalpoint::where('id', 13)->value('las_point');
  $laspoint13 = $totalpoint::where('id', 13)->value('las_point');
  $laspoint13 = $totalpoint::where('id', 13)->value('las_point');
  $totalpoint->where('id', 13)->update(['sum_point'=>(intval($laspoint13)+intval($laspoint13)+intval($laspoint13))]);
  $lasscore13 = $totalpoint::where('id', 13)->value('las_score');
  $lasscore13 = $totalpoint::where('id', 13)->value('las_score');
  $lasscore13 = $totalpoint::where('id', 13)->value('las_score');
  $totalpoint->where('id', 13)->update(['sum_score'=>(intval($lasscore13)+intval($lasscore13)+intval($lasscore13))]);
  // idが14のチームここから
  $laspoint14 = $totalpoint::where('id', 14)->value('las_point');
  $laspoint14 = $totalpoint::where('id', 14)->value('las_point');
  $laspoint14 = $totalpoint::where('id', 14)->value('las_point');
  $totalpoint->where('id', 14)->update(['sum_point'=>(intval($laspoint14)+intval($laspoint14)+intval($laspoint14))]);
  $lasscore14 = $totalpoint::where('id', 14)->value('las_score');
  $lasscore14 = $totalpoint::where('id', 14)->value('las_score');
  $lasscore14 = $totalpoint::where('id', 14)->value('las_score');
  $totalpoint->where('id', 14)->update(['sum_score'=>(intval($lasscore14)+intval($lasscore14)+intval($lasscore14))]);
  // idが15のチームここから
  $laspoint15 = $totalpoint::where('id', 15)->value('las_point');
  $laspoint15 = $totalpoint::where('id', 15)->value('las_point');
  $laspoint15 = $totalpoint::where('id', 15)->value('las_point');
  $totalpoint->where('id', 15)->update(['sum_point'=>(intval($laspoint15)+intval($laspoint15)+intval($laspoint15))]);
  $lasscore15 = $totalpoint::where('id', 15)->value('las_score');
  $lasscore15 = $totalpoint::where('id', 15)->value('las_score');
  $lasscore15 = $totalpoint::where('id', 15)->value('las_score');
  $totalpoint->where('id', 15)->update(['sum_score'=>(intval($lasscore15)+intval($lasscore15)+intval($lasscore15))]);
  // idが16のチームここから
  $laspoint16 = $totalpoint::where('id', 16)->value('las_point');
  $laspoint16 = $totalpoint::where('id', 16)->value('las_point');
  $laspoint16 = $totalpoint::where('id', 16)->value('las_point');
  $totalpoint->where('id', 16)->update(['sum_point'=>(intval($laspoint16)+intval($laspoint16)+intval($laspoint16))]);
  $lasscore16 = $totalpoint::where('id', 16)->value('las_score');
  $lasscore16 = $totalpoint::where('id', 16)->value('las_score');
  $lasscore16 = $totalpoint::where('id', 16)->value('las_score');
  $totalpoint->where('id', 16)->update(['sum_score'=>(intval($lasscore16)+intval($lasscore16)+intval($lasscore16))]);
  // idが17のチームここから
  $laspoint17 = $totalpoint::where('id', 17)->value('las_point');
  $laspoint17 = $totalpoint::where('id', 17)->value('las_point');
  $laspoint17 = $totalpoint::where('id', 17)->value('las_point');
  $totalpoint->where('id', 17)->update(['sum_point'=>(intval($laspoint17)+intval($laspoint17)+intval($laspoint17))]);
  $lasscore17 = $totalpoint::where('id', 17)->value('las_score');
  $lasscore17 = $totalpoint::where('id', 17)->value('las_score');
  $lasscore17 = $totalpoint::where('id', 17)->value('las_score');
  $totalpoint->where('id', 17)->update(['sum_score'=>(intval($lasscore17)+intval($lasscore17)+intval($lasscore17))]);
  // idが18のチームここから
  $laspoint18 = $totalpoint::where('id', 18)->value('las_point');
  $laspoint18 = $totalpoint::where('id', 18)->value('las_point');
  $laspoint18 = $totalpoint::where('id', 18)->value('las_point');
  $totalpoint->where('id', 18)->update(['sum_point'=>(intval($laspoint18)+intval($laspoint18)+intval($laspoint18))]);
  $lasscore18 = $totalpoint::where('id', 18)->value('las_score');
  $lasscore18 = $totalpoint::where('id', 18)->value('las_score');
  $lasscore18 = $totalpoint::where('id', 18)->value('las_score');
  $totalpoint->where('id', 18)->update(['sum_score'=>(intval($lasscore18)+intval($lasscore18)+intval($lasscore18))]);
}