import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button';
import ConfirmDialog from './ConfirmDialog';
import slugify from 'react-slugify';

export default function RegisterList({ items, handleConfirmDialog }) {

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
                                <Link to={`/register/edit/${slugify(item.student_name)}-${slugify(item.subject_name)}-${item.id}.html`} className='btn btn-warning'>Cập nhật điểm</Link>
                            </td>
                            <td>
                                <Button onClick={() => { setCurrentId(item.id); setShowModal(true)} } className="btn btn-danger">Xóa</Button>
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
