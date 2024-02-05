import React from 'react'
import Car from './Car'

function App() {
    const handleX = (value) => {
        console.log(`Chiếc xe đang ${value}`);
    }
    return (
        <>
            <Car type="BMW" color="red" handleX={handleX} />
        </>
    )
}

export default App
