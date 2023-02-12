<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function work_read(Request $request){
        // $userid = $request->user_id->toJson();
        // $userid= 1;
        $user = Auth::user();
        $id = $user-> id;
        $works = User::find($id)->work;
        // $works = Work::->get()->toJson();
        return  $works;
      }
}
