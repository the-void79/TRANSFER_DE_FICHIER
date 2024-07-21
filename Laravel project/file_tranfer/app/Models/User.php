<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'matricule', 'nom', 'prenom', 'email', 'mot de passe', 'filière',
    ];

    protected $hidden = [
        'mot de passe', 'remember_token',
    ];
}
