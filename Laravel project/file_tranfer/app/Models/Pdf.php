<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pdf extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_utilisateur', 'titre', 'module', 'filière', 'date', 'chemin',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

