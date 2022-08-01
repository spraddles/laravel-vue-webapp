<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller {

    /**
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */

    public function get(Request $request) {

        $user = User::where('email', $request->email)->first();

        return new UserResource($user);
    }
}