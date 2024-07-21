<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'matricule' => 'required|unique:users',
            'nom' => 'required',
            'prenom' => 'required',
            'email' => 'required|email|unique:users',
            'mot de passe' => 'required',
            'filière' => 'required',
        ]);

        $user = User::create([
            'matricule' => $request->matricule,
            'nom' => $request->name,
            'prenom' => $request->surname,
            'email' => $request->email,
            'mot de passe' => Hash::make($request->password),
            'filière' => $request->field,
        ]);

        return response()->json(['message' => ' Utilisateur enregistrer avec succès'], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'mot de passe' => 'required',
        ]);

        if (Auth::attempt($request->only('email', 'mot de passe'))) {
            $token = Auth::user()->createToken('auth_token')->plainTextToken;
            return response()->json(['access_token' => $token], 200);
        }

        return response()->json(['message' => 'information non valide'], 401);
    }

    public function createProfile(Request $request)
    {
    $request->validate([
        'matricule' => 'required|unique:users',
        'nom' => 'required',
        'prenom' => 'required',
        'email' => 'required|email|unique:users',
        'mot de passe' => 'required',
        'filière' => 'required',
    ]);

    $user = User::create([
        'matricule' => $request->matricule,
        'nom' => $request->name,
        'prenom' => $request->surname,
        'email' => $request->email,
        'mot de passe' => Hash::make($request->password),
        'filière' => $request->field,
    ]);

    return response()->json(['message' => ' Utilisateur enregistrer avec succès'], 201);
    }

    public function updateProfile(Request $request)
{
    $request->validate([
        'nom' => 'required',
        'prenom' => 'required',
        'email' => 'required|email|unique:users,email,' . Auth::id(),
        'mot de passe' => 'nullable',
        'filière' => 'required',
    ]);

    $user = Auth::user();
    $user->update([
        'nom' => $request->name,
        'prenom' => $request->surname,
        'email' => $request->email,
        'mot de passe' => $request->password ? Hash::make($request->password) : $user->password,
        'filière' => $request->field,
    ]);

    return response()->json(['message' => 'Profile mise à jour avec succès'], 200);
}


}



