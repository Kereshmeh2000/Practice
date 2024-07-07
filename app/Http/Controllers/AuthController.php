<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function register(Request $request): bool
    {

        $data = $request->validate([
            // 'birthday' => 'required|date',
            // 'gender' => 'required', Rule::in(['male', 'female', 'other']),
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string',
        ]);
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            // 'birthday' => $data['birthday'],
            // 'gender' => $data['gender'],
        ]);
        $messaagesuccuss = Auth::attempt([
            'email' => $user->email,
            'password' => $data['password'],
        ], true);
        if (!$messaagesuccuss) {
            throw ValidationException::withMessages([
                'password' => __('Your provided credentials could not be verified.')
            ]);
        }
        session()->regenerate();
        return $messaagesuccuss;
    }


    public function login(Request $request)
    {
        $attributes = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if (
            !$success = Auth::attempt([
                'email' => strtolower($attributes['email']),
                'password' => $attributes['password'],
            ], true)
        ) {
            throw ValidationException::withMessages([
                'password' => __('Your provided credentials could not be verified.')
            ]);
        }

        session()->regenerate();

        return $success;
    }

    public function logout(Request $request)
    {
        Auth::logout();
        Session::flush();
        return response()->json(['message' => 'Successfully logged out'], 200);
    }
    public function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
            ? back()->with(['status' => __($status)])
            : back()->withErrors(['email' => __($status)]);
    }
    public function reset(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET
            ? redirect()->route('login')->with('status', __($status))
            : back()->withErrors(['email' => [__($status)]]);
    }
}
