import React from 'react'
import Car from './Car'

function App() {
    const carSendMessage = (value) => {
        console.log(`Chiếc xe đang ${value}`);
    }
    return (
        <>
            <Car type="BMW" color="red" handleX={carSendMessage} />
        </>
    )
}

export default App
