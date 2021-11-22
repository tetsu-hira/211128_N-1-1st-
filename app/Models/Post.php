<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = ['sum_point', 'sum_score']; //保存したいカラム名が複数の場合
    protected $casts = [
      'pre_point' => 'integer',
      'pre_score' => 'integer',
      'mid_point' => 'integer',
      'mid_score' => 'integer',
      'las_point' => 'integer',
      'las_score' => 'integer',
      'sum_point' => 'integer',
      'sum_score' => 'integer',
    ];
}