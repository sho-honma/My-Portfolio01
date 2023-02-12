<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Detail;

class DetailsController extends Controller
{
    public function detail_make($props){
        for ($i = 1; $i < 41; $i++) {
            $details = new Detail;
            $details->work_id = $props->work_id ;
            $details->section_id = $i ;
            $details -> detail_title =  "";
            $details -> description = "";
            $details -> important =  50;
            $details -> date =  10;
            $details -> color =  10;
            $details ->save();
                } ;  
    }
    public function detail_update($props){
          $cond = ['work_id'=> $props->work_id, 'section_id'=> $props->section_id];
          $newdata   = Detail::where($cond)->get();
        //   ->update([
        //     'color' => $props->color,
        // ]);;
        //   $color= $props->color;
    // $data = [
    //     'description' => $request->description
    // ];
          $newdata -> description = $props->description;
        //   $newdata->update($data);  
        //   $newdata->save();
        //   $newdata->fill($props->all())->save();
        //   $newdata ->toJson();
          return ;
            
    }
}
