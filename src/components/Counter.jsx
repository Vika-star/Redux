import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/actions/counter';

const Counter = () => {
    const count = useSelector((state) => state.zolupa.count);
    const color = useSelector((state) => state.zhopa.color);
    const dispatch = useDispatch();
  
    return (
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>

        <div>
            <h1 style={{backgroundColor : color}}>Counter: {count}</h1>
        </div>
        <div>
            <h2 style={{backgroundColor : color}}>Counter: {count}</h2>
        </div>
      </div>
    );
  };
  
  export default Counter;