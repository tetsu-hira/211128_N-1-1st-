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
    $totalpoint->where('number', 3)->update(['mid_score'=>((intval($countE1) + intval($countE3) + intval($countE6) + intval($countE8) + intval($countE14) + intval($countE16) + intval($countE17) + intval($countE19) + intval($countE25) + intval($countE27) + intval($countE30) + intval($countE32) + intval($countE37) + intval($countE39) + intval($countE41) + intval($countE43))-(intval($countE2) + intval($countE4) + intval($countE5) + intval($countE7) + intval($countE14) + intval($countE16) + intval($countE17) + intval($countE19) + intval($countE25) + intval($countE27) + intval($countE30) + intval($countE32) + intval($countE37) + intval($countE39) + intval($countE41) + intval($countE43))), 'mid_point'=>($e1point_A + $e2point_B + $e4point_B + $e5point_A + $e7point_A + $e8point_B + $e10point_A + $e11point_A)]);
    $totalpoint->where('number', 4)->update(['mid_score'=>((intval($countE2) + intval($countE4) + intval($countE9) + intval($countE11) + intval($countE21) + intval($countE23) + intval($countE33) + intval($countE35) + intval($countE42) + intval($countE44))-(intval($countE1) + intval($count3) + intval($countE10) + intval($countE12) + intval($countE22) + intval($countE24) + intval($countE34) + intval($countE36) + intval($countE41) + intval($countE43))), 'mid_point'=>($e1point_B + $e3point_A + $e6point_A+ $e9point_A+ $e11point_B)]);
    $totalpoint->where('number', 5)->update(['mid_score'=>((intval($countE22) + intval($countE24) + intval($countE26) + intval($countE28) + intval($countE45) + intval($countE47))-(intval($countE21) + intval($countE23) + intval($countE25) + intval($countE27) + intval($countE46) + intval($countE48))), 'mid_point'=>($e6point_B + $e7point_B + $e12point_A)]);
    $totalpoint->where('number', 6)->update(['mid_score'=>((intval($countE10) + intval($countE12) + intval($countE18) + intval($countE20) + intval($countE34) + intval($countE36) + intval($countE34) + intval($countE36) + intval($countE38) + intval($countE40) + intval($countE46) + intval($countE48))-(intval($countE9) + intval($countE11) + intval($countE17) + intval($countE19) + intval($countE33) + intval($countE35) + intval($countE37) + intval($countE39) + intval($countE45) + intval($countE47))), 'mid_point'=>($e3point_B + $e5point_B + $e9point_B + $e10point_B + $e12point_B)]);
  }
