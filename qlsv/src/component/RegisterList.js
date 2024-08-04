import React from 'react'

export default function RegisterList({ items }) {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã SV</th>
                        <th>Tên SV</th>
                        <th>Mã MH</th>
                        <th>Tên MH</th>
                        <th>Điểm</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>

                    {items.map((item, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.student_id}</td>
                            <td>{item.student_name}</td>
                            <td>{item.subject_id}</td>
                            <td>{item.subject_name}</td>
                            <td>{item.score}</td>
                            <td>
                                <a href="edit.html">Cập nhật điểm</a>
                            </td>
                            <td>
                                <a onclick="return confirm('Bạn muốn xóa đăng ký này phải không?')" href="list.html">Xóa</a>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </>
    )
}
