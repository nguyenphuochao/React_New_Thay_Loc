import React from 'react'

export default function SubjectList({items}) {
    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã MH</th>
                        <th>Tên</th>
                        <th>Số tín chỉ</th>
                        <th colSpan={2}>Tùy Chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.number_of_credit}</td>
                            <td><a href="edit.html">Sửa</a></td>
                            <td><a className="delete" data={1} type="subject" href="list.html">Xóa</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
