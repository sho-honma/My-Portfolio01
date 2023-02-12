<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Detail;

class DetailsController extends Controller
{
    public function detail_make($workid){
        for ($i = 1; $i < 41; $i++) {
            $details = new Detail;
            $details->work_id = $workid ;
            $details->section_id = $i ;
            $details -> detail_title =  "";
            $details -> description = "";
            $details -> important =  50;
            $details -> date =  10;
            $details -> color =  10;
            $details ->save();
                } ;  
    }
    // public function detail_delete(Request $request) {
    //   // $deleteid = $props;
    //   $details = Detail::where('work_id', 64)->get()->delete();
    //   // $details->delete();
    //   return 111;
    // }
    public function detail_update(Request $request){
          
          $cond = ['work_id'=> $request->work_id, 'section_id'=> $request->section_id];
          $newdata   = Detail::where($cond)->get();
        //   ->update([
        //     'color' => $props->color,
        // ]);;
        //   $color= $props->color;
    // $data = [
    //     'description' => $request->description
    // ];
          // $newdata -> description = $props->description;
        //   $newdata->update($data);  
        //   $newdata->save();
        //   $newdata->fill($props->all())->save();
        //   $newdata ->toJson();
          return 1111;
            
    }
}
