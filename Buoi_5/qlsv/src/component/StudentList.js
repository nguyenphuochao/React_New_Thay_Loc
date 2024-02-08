import React from 'react'

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
                            <td>{++index}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.birthday}</td>
                            <td>{item.gender}</td>
                            <td><a href="edit.html">Sửa</a></td>
                            <td><a data={1} className="delete" href="list.html" type="student">Xóa</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default StudentList
