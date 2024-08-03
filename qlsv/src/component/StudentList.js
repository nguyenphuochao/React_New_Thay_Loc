import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import slugify from 'react-slugify';

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
                            <td>
                                <Link to={`/student/${slugify(item.name)}-${item.id}.html`}>{item.name}</Link>
                            </td>
                            <td>{item.birthday}</td>
                            <td>{item.gender}</td>
                            <td>
                                <Link to={`/student/edit/${slugify(item.name)}-${item.id}.html`} className="btn btn-warning">Sửa</Link>
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
