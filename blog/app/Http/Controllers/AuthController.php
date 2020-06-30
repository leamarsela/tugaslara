<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register() {
        return view('form');
    }
    
    public function register_post (Request $request) {
        
        $first_name = $request['first_name'];
        $last_name = $request['last_name'];
        $gender = $request->input('gender');
        $nationality = $request->input('nasionalisme');
        $bahasa = $request->input('bahasa');
        $textarea = $request->input('textarea');

        return view('welcomenew', ['first_name' => $first_name,
                                  'last_name' => $last_name,
                                  'gender' => $gender,
                                  'nationality' => $nationality,
                                  'bahasa' => $bahasa,
                                  'textarea' => $textarea,
                                ]);
    }

}
