import React, { useState } from 'react'

function App() {
    const [soA, setSoA] = useState(0);
    const [soB, setSoB] = useState(0);
    const [sum, setSum] = useState(0);
    const handleSum = () => {
        setSum(Number(soA) + Number(soB));
    }
    return (
        <div className='container'>
            <div className='form-group'>
                Số A: <input type='number' className='form-control' onChange={(e) => { setSoA(e.target.value) }} />
            </div>
            <div className='form-group'>
                Số B: <input type='number' className='form-control' onChange={(e) => { setSoB(e.target.value) }} />
            </div>
            <div className='form-group alert alert-success'>
                {sum}
            </div>
            <div>
                <button className='btn btn-primary' onClick={() => handleSum()}>Tính Tổng</button>
            </div>
        </div>
    )
}

export default App
