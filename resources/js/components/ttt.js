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
    $totalpoint->where('number', 2)->update(['las_score'=>((intval($countC41) + intval($countC43))-(intval($countC42) + intval($countB44))), 'las_point'=>($c11point_A)]);
    $totalpoint->where('number', 3)->update(['las_score'=>((intval($countC29) + intval($countC31))-(intval($countC30) + intval($countC32))), 'las_point'=>($c8point_A)]);
    $totalpoint->where('number', 4)->update(['las_score'=>((intval($countC13) + intval($countC15) + intval($countC21) + intval($countC23)+ intval($countC25) + intval($countC27) + intval($countC42) + intval($countC44))-(intval($countC14) + intval($countC16) + intval($countC22) + intval($countC24) + intval($countC26) + intval($countC28) + intval($countC41) + intval($countC43))), 'las_point'=>($c4point_A + $c6point_A + $c7point_A + $c11point_B)]);
    $totalpoint->where('number', 5)->update(['las_score'=>((intval($countC37) + intval($countC39) + intval($countC45) + intval($countC47))-(intval($countC38) + intval($countC40) + intval($countC46) + intval($countC48))), 'las_point'=>($c10point_A + $c12point_A)]);
    $totalpoint->where('number', 6)->update(['las_score'=>((intval($countC17) + intval($countC19) + intval($countC33) + intval($countC35))-(intval($countC18) + intval($countC20) + intval($countC34) + intval($countC36))), 'las_point'=>($b2point_B + $b3point_B + $c5point_A + $b6point_B + $b8point_B + $c9point_A + $b11point_A + $b12point_A)]);
    $totalpoint->where('number', 7)->update(['las_score'=>((intval($countC1) + intval($countC3) + intval($countC9) + intval($countC11) + intval($countB14) + intval($countB16) + intval($countA22) + intval($countA24)+ intval($countC26) + intval($countC28) + intval($countC34) + intval($countC36) + intval($countC38) + intval($countC40) + intval($countA46) + intval($countA48))-(intval($countC2) + intval($countC4) + intval($countC10) + intval($countC12) + intval($countB13) + intval($countB15) + intval($countA21) + intval($countA23) + intval($countC25) + intval($countC27) + intval($countC33) + intval($countC35) + intval($countC37) + intval($countC39) + intval($countA45) + intval($countA47))), 'las_point'=>($c1point_A + $c3point_A + $b4point_B + $a6point_B + $c7point_B + $c9point_B + $c10point_B + $a12point_B)]);
    $totalpoint->where('number', 8)->update(['las_score'=>((intval($countC2) + intval($countC4) + intval($countC5) + intval($countC7) + intval($countC10) + intval($countC12) + intval($countB18) + intval($countB20)+ intval($countA25) + intval($countA27) + intval($countA29) + intval($countA31) + intval($countA42) + intval($countA44) + intval($countB46) + intval($countB48))-(intval($countC1) + intval($countC3) + intval($countC6) + intval($countC8) + intval($countC13) + intval($countC15) + intval($countB17) + intval($countB19) + intval($countA25) + intval($countA27) + intval($countA30) + intval($countA32) + intval($countA41) + intval($countA43) + intval($countB45) + intval($countB47))), 'las_point'=>($c1point_B + $c2point_A + $c4point_B + $b5point_B + $a7point_B + $a8point_A + $a11point_B + $b12point_B)]);
    $totalpoint->where('number', 9)->update(['las_score'=>((intval($countC6) + intval($countC8) + intval($countC10) + intval($countC12) + intval($countC18) + intval($countC20) + intval($countC22) + intval($countC24)+ intval($countC30) + intval($countC32) + intval($countA34) + intval($countA36) + intval($countB38) + intval($countB40) + intval($countC46) + intval($countC48))-(intval($countC5) + intval($countC7) + intval($countC9) + intval($countC11) + intval($countC18) + intval($countC20) + intval($countC22) + intval($countC24) + intval($countC30) + intval($countC32) + intval($countA34) + intval($countA36) + intval($countB38) + intval($countB40) + intval($countC46) + intval($countC48))), 'las_point'=>($c2point_B + $c3point_B + $c5point_B + $c6point_B + $c8point_B + $a9point_B + $b10point_B + $c12point_B)]);
  }