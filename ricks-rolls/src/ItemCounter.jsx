import { useState } from 'react';

const ItemCounter = ({ children }) => {
    const [count, setCounter] = useState(0);


    function decrement() {
        setCounter(count - 1);
    }

    return (
        <div>
            <button onClick={decrement}>
                {children}
                <div>{count}</div>
            </button>
        </div>
    );
}

export default ItemCounter;
