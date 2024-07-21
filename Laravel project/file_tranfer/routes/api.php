<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use App\Http\Controllers\UserController;
use App\Http\Controllers\PdfController;

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('upload', [PdfController::class, 'upload']);
    Route::get('pdfs', [PdfController::class, 'index']);
    Route::get('pdfs/{id}', [PdfController::class, 'show']);
    Route::delete('pdfs/{id}', [PdfController::class, 'destroy']);
    Route::post('create-profile', [UserController::class, 'createProfile']);
    Route::put('update-profile', [UserController::class, 'updateProfile']);

});


