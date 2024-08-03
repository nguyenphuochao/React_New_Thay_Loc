import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'react-slugify';
import ConfirmDialog from './ConfirmDialog';
import Button from 'react-bootstrap/esm/Button';


function StudentList({ items, handleConfirmDialog }) {

    // Lấy id của sinh viên cần xóa
    const [currentId, setCurrentId] = useState(null);

    // không hiển thị modal khi vào trang web
    const [showModal, setShowModal] = useState(false);

    // Đóng dialog
    const handleCloseDialog = () => {
        setShowModal(false);
    }

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
                                <Button onClick={() => { setShowModal(true); setCurrentId(item.id) }} className="btn btn-danger">Xóa</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <ConfirmDialog
                showModal={showModal}
                handleCloseDialog={handleCloseDialog}
                handleConfirmDialog={handleConfirmDialog}
                currentId={currentId} />

        </>
    )
}

export default StudentList
