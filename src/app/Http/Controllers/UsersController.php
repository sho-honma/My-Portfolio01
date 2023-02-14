<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function work_read(Request $request){
        $user = Auth::user();
        $id = $user-> id;
        $works = User::find($id)->work;
        return  [$user,$works];
      }
}
