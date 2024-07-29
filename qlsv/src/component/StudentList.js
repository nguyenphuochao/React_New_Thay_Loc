import React from 'react'
import { NavLink } from 'react-router-dom'

function StudentList({ items }) {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã SV</th>
                        <th>Tên</th>
                        <th>Ngày Sinh</th>
                        <th>Giới Tính</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.birthday}</td>
                            <td>{item.gender}</td>
                            <td>
                                <NavLink to={`edit/student/${item.id}`} className="btn btn-warning">Sửa</NavLink>
                            </td>
                            <td>
                                <NavLink to={`edit/student/${item.id}`} className="btn btn-danger">Xóa</NavLink>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default StudentList
