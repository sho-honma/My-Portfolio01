<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\DetailsController;
use App\Models\Work;
use App\Models\Detail;
use Illuminate\Support\Facades\Auth;

class WorksController extends Controller
{
    public function work_make(Request $request){
        $props = $request;
        $works = new Work;
        $works->user_id = $request->user_id;
        $works->item_title = $request->item_title;
        $works ->save();
        $workid = $works->id;
        $detail_controller = new DetailsController;
        $detail_save = $detail_controller->detail_make($workid);
        return $workid;
      }

    public function detail_read(Request $request){
      $workid = $request->work_id;
      $details =  Work::find($workid)->detail;
      return $details;
    }

    public function detail_update(Request $request){
    $word= $request;
      $props = $request;
      $update_controller = new DetailsController;
      $update = $update_controller->detail_update($props);
      return $update;
    }
    public function work_delete(Request $request){
        $deleteid = $request->id;
      $detail =  Work::find($deleteid);
      $detail->delete();
        return  $detail;
    }


    public function title_set(Request $request){
      $details = Work::where('id', $request->work_id)->first();
      $details -> item_title = $request->item_title;
      $details ->save();
      return $request;
    }
}
