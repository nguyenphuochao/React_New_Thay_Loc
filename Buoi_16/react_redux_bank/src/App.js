import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {

  // dùng hook useDispatch để lấy action lên store
  const dispatch = useDispatch();
  const deposit = () => {
    const action = { type: 'deposit' };
    dispatch(action);
  }
  // rule: useSelector((state) => state): bước subcriber
  // render lại khi dispatch
  const moneyState = useSelector((state) => state);

  return (
    <>
      <div className="container">
        <button className="btn btn-primary" data="deposit" onClick={deposit}>deposit $10</button>
        <button className="btn btn-warning" data="withraw">widthraw $10</button>
        <div>
          Result : $ <span className="badge badge-primary" id="result">{moneyState}</span>
        </div>
      </div>
    </>
  )
}
