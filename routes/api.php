<?php

use App\Http\Controllers\Fruit\ShowController;
use App\Http\Controllers\User\StoreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'User', 'prefix' => 'users'], function (){
   Route::post('/', [StoreController::class, '__invoke']);
});


Route::group(['namespace' => 'Fruit', 'prefix' => 'fruits'], function (){
    Route::get('/', [ShowController::class, '__invoke']);
});
