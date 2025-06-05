import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(0);
    const handleClick = (x) => {
        setCount(x + 1);
    }
    return (
        <>
            <div>{count}</div>
            <button onClick={() => handleClick(count)}>Đếm</button>
        </>
    )
}

export default App

