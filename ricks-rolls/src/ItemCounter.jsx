import { useState } from 'react';

const ItemCounter = ({ children }) => {
    const [count, setCounter] = useState(2);


    function decrement() {
        if(count > 0) {
            setCounter(count - 1);
        }

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
