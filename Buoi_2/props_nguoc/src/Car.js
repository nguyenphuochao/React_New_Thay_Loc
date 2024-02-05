import React from 'react'

function Car(props) {
    const handleX = props.handleX;
    handleX('chạy');
    return (
        <p>
            Hãng xe {props.type} , màu {props.color}
        </p>
    )
}

export default Car
