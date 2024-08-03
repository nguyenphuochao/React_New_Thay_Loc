import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import slugify from 'react-slugify'
import ConfirmDialog from './ConfirmDialog';

export default function SubjectList({ items, handleConfirmDialog }) {

    const [currentId, setCurrentId] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const handleCloseDialog = () => {
        setShowModal(false);
    }

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
                            <td>
                                <Link to={`/subject/${slugify(item.name)}-${item.id}.html`}>{item.name}</Link>
                            </td>
                            <td>{item.number_of_credit}</td>
                            <td>
                                <Link to={`/subject/edit/${slugify(item.name)}-${item.id}.html`} className="btn btn-warning">Sửa</Link>
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
