import {useState} from 'react';

const ItemCounter = ({children}) => {
    const [count, setCounter] = useState(0);


    function increment() {
        setCounter(count + 1);
    }

    function decrement() {
        if (count > 0) {
            setCounter(count + -1);
        }

    }

    return (
        <button className='item'>
            <div>{children}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <div>{count}</div>
        </button>
    );
}

export default ItemCounter;
