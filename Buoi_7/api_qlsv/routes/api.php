<?php

use App\Http\Controllers\ApiStudentController;
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

/*
http://localhost/api_qlsv/api/students  // api lấy danh sách sinh viên

*/
Route::resource('students', ApiStudentController::class);
