<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Detail;

class DetailsController extends Controller
{
    public function detail_make($workid){
        for ($i = 1; $i < 45; $i++) {
            $details = new Detail;
            $details->work_id = $workid ;
            $details->section_id = $i ;
            $details -> detail_title =  "";
            $details -> description = "";
            $details -> important =  50;
            $details -> date =  10;
            $details -> color =  "rgba(184, 223, 224, 1)";
            $details ->save();
                } ;  
        
    }
    public function detail_update(Request $request){  
          $param = ['work_id'=>$request->work_id, 'section_id'=>$request->section_id];
          $details = Detail::where($param)->first();
          $details -> detail_title =  $request->detail_title;
          $details -> description = $request->description;
          $details -> important =  $request->important;
          $details -> date =  $request->date;
          $details -> color =  $request->color;
          $details ->save();
          return $details;
            
    }
}
