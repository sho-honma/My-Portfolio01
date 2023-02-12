<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\DetailsController;
use App\Models\Work;
use App\Models\Detail;
use Illuminate\Support\Facades\Auth;

class WorksController extends Controller
{
    
    #新規作成
    public function work_make(Request $request){
        // $props = $request;
        $works = new Work;
        $works->user_id = $request->user_id;
        $works->item_title = $request->item_title;
        $works ->save();
        $workid = $works->id;
        $detail_controller = new DetailsController;
        $detail_save = $detail_controller->detail_make($workid);
        $detail =  Work::find($workid)->detail->toJson();
        // $works = Work::find()->detail->toJson();
        // $works = [1,2,3,4,5];
        // return redirect('dashboard/eit');
        return $detail;
      }



// 　　#編集スタート時
    public function detail_read(Request $request){
      $workid = $request->work_id;
      $detail =  Work::find($workid)->detail->toJson();
      // $detail =  $request;
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
    public function work_delete(Request $request){
        $deleteid = $request->id;
      $detail =  Work::find($deleteid);
      $detail->delete();
        
        // $works = Work::where('user_id',4)->get(); 
        // $works = Work::find($deleteid)->delete();
        // $new = $works->delete(); 
        // return  response()->redirectTo('/dashboard/read');
        return  $detail;
    }
}
