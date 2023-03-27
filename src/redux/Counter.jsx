import { useSelector, useDispatch } from "react-redux"
import { increment,decrement, reset, incrementByAmount } from "./counterSlice"
import { useState } from "react"

const Counter = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch();
   
    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;
    const resetAll= ()=> {
        setIncrementAmount(0)
        dispatch(reset())
    }

    return ( 
        <section>
            <h1>{count}</h1>
            <div>
                <button className='btn' onClick={()=> dispatch(increment())}>+</button>
                <button className='btn' onClick={()=> dispatch(decrement())}>-</button>
            </div>
            <input type="text" value={incrementAmount} onChange={(e)=> setIncrementAmount(e.target.value)}/>
            <div><button className='btn' onClick={()=> dispatch(incrementByAmount(addValue))}>Add Amount</button></div>
            <div><button className='btn' onClick={()=> resetAll()}>Reset</button></div>
        </section>
        )
}

export default Counter