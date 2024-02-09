<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class ApiStudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // sleep(5);
        $students = Student::orderBy('id', 'DESC')->get();
        return response()->json([
            'data' => $students,
            'status' => 200,
            'mess' => 'Thành công'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|unique:students',
                'birthday' => 'required',
                'gender' => 'required'
            ],
            [
                'name.required' => 'Vui lòng nhập họ tên',
                'name.unique' => 'Họ tên bị trùng',
                'birthday.required' => 'Vui lòng nhập ngày sinh',
                'gender.required' => 'Vui lòng chọn giới tính'
            ]
        );
        $student = new Student();
        $student->name = $request->input('name');
        $student->birthday = $request->input('birthday');
        $student->gender = $request->input('gender');
        $student->save();
        return response()->json([
            'data' => $student,
            'status' => 201,
            'mess' => 'Thêm mới thành công'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $student = Student::find($id);
        return response()->json([
            'data' => $student,
            'status' => 200,
            'mess' => 'Success'
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
