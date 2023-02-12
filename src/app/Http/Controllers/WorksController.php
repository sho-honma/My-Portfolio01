<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\DetailsController;
use App\Models\Work;
use App\Models\Detail;

class WorksController extends Controller
{
    // #マイページログイン時
    public function work_read(Request $request){
      $works = Work::where('user_id',1)->get()->toJson();
      return $works;
    }
    #新規作成
    public function work_make(Request $request){
        $props = $request;
        $works = new Work;
        $works->user_id = $request->user_id;
        $works->item_title = $request->item_title;
        $works ->save();
        $detail_controller = new DetailsController;
        $detail_save = $detail_controller->detail_make($props);
        $works = Work::where('user_id',2)->get()->toJson();
        return $works;
      }
// 　　#編集スタート時
    public function detail_read(Request $request){
      $detail =  Work::find(1)->detail->toJson();
      return $detail;
    }
    #詳細更新時
    public function detail_update(Request $request){
    //   $data =  Work::find(1)->detail->toJson();;
    $word= $request;
      $props = $request;
      $update_controller = new DetailsController;
      $update = $update_controller->detail_update($props);
    //   $detail =  Work::find(1)->detail->toJson();
      return $update;
    }
   
// 　　#作品削除時
    public function delete(Request $request){
        $works = Work::destroy(3); 
        $works = Work::where('user_id',1)->get()->toJson();
       
        return  $works;
    }
}
