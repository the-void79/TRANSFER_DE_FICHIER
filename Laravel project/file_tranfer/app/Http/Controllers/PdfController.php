<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pdf;
use Illuminate\Support\Facades\Auth;

class PdfController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'module' => 'required',
            'filière' => 'required',
            'date' => 'required|date',
            'fichier' => 'required|file|mimes:pdf|max:2048',
        ]);

        $filePath = $request->file('fichier')->store('pdfs');

        $pdf = Pdf::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'module' => $request->module,
            'filière' => $request->field,
            'date' => $request->date,
            'chemain' => $filePath,
        ]);

        return response()->json(['message' => 'pdf telecharger avec succès'], 201);
    }

    public function index()
    {
        $pdfs = Pdf::all();
        return response()->json($pdfs, 200);
    }

    public function show($id)
    {
        $pdf = Pdf::findOrFail($id);
        return response()->json($pdf, 200);
    }

    public function destroy($id)
    {
        $pdf = Pdf::findOrFail($id);
        $pdf->delete();
        return response()->json(['message' => 'pdf supprimé avec succès'], 200);
    }
}

