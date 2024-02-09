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
http://localhost/api_qlsv/api/students                      // api lấy danh sách sinh viên   GET
http://localhost/api_qlsv/api/students                      // api thêm sinh viên            POST
http://localhost/api_qlsv/api/students/{student}/edit       // api xem chi tiết sinh viên    GET
http://localhost/api_qlsv/api/students/{student}            // api xóa sinh viên             DELETE
http://localhost/api_qlsv/api/students/{student}            // api cập nhật sinh viên        PUT
*/
Route::resource('students', ApiStudentController::class);
