import React from 'react'
import{ decrement, increment, reset,incrementby } from '../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector(state=>state.counterReducer.count)
  return (
    <div className='w-200 d-flex justify-content-center align-items-center' style={{height:'70vh'}}>
        <div className='border rounded p-5 w-250  d-flex justify-content-center align-items-center flex-column'>
            <h1 style={{color:"white"}}>{count}</h1>
            <div className='d-flex justify-content-between w-200 mt-5'>
                <button onClick={()=>dispatch(decrement())}  className='btn btn-warning me-2'>Decrement</button>
                <button onClick={()=>dispatch(reset())}  className='btn btn-danger me-2'>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-success me-2'>Increment</button>
            </div>
            <button onClick={()=>dispatch(incrementby())} className='btn btn-primary mt-3'>Increment By Amount</button>

        </div>

    </div>
  )
}

export default Counter
