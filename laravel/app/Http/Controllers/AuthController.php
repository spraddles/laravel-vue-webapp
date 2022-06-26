<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller {

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request $request
     *
     * @return Response
     */

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'     => 'required|email',
            'password'  => 'required'
        ]);

        /* if ($validator->fails()) {
            return response()->json($validator->messages()->all()[0])->withInput();
        } */

        $email = $request->email;
        $password = $request['password'];

        $user = User::where('email', $email)->first();
    
        if (!$user || !Hash::check($password, $user->password)) {
            return response([
                'message' => ['Error.']
            ], 404);
        }
    
        $token = $user->createToken('token')->plainTextToken;
    
        $response = [
            'user'  => $user,
            'token' => $token
        ];
    
        return response($response, 201);
    }

    public function logina(Request $request) {

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
            //'device_name' => 'required',
        ]);

        // find user
        $user = User::where('email', $request->email)->first();

        if (Auth::attempt($credentials)) {

            // revoke old tokens
            $user->tokens()->delete();

            // create new token
            $user->createToken('Web');

            return response()->json([
                // login success
                'message' => 'Login success'
            ], 202);
        }
        else {
            return response()->json([
                // login fail
                'message' => 'Login fail'
            ], 401);
        }
    }

    public function logout(Request $request) {

        $credentials = $request->validate([
            'email' => 'required|email'
        ]);

        // find user
        $user = User::where('email', $request->email)->first();

        if ($user) {

            // revoke old tokens
            $user->tokens()->delete();

            return response()->json([
                // logout success
                'message' => 'Logged out'
            ], 202);

            return redirect('/home');
        }
        else {
            return response()->json([
                // logout fail
                'message' => 'User details invalid'
            ], 401);
        }
    }

    public function passwordResetEmailRequest(Request $request) {

        $credentials = $request->validate([
            'email' => 'required|email'
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        $status === Password::RESET_LINK_SENT;

        // success
        if ($status == 'passwords.sent') {
            $status = 'email link sent';

            return response()->json([
                'message' => $status
            ], 202);
        };

        // hitting route too many times
        if ($status == 'passwords.throttled') {
            $status = 'too many attempts, please wait 1 minute & try again';

            return response()->json([
                'message' => $status
            ]);
        };

        // invalid user
        if ($status == 'passwords.user') {
            $status = 'user not found';

            return response()->json([
                'message' => $status
            ], 401);
        };
    }

    public function passwordReset(Request $request) {

        // token
        // email

        $credentials = $request->validate([
            'email' => 'required|email'
        ]);

        // 202 success
        // 401 fail
    }

}