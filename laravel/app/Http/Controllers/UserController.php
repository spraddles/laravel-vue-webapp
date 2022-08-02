<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\UserMeta;

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

    public function update($id, Request $request) {

        UserMeta::where('user_id', $id)->update($request->all());

        return response()->json(200);
    }
}