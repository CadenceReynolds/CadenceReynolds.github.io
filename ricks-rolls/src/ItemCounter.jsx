import { useState } from 'react';

const ItemCounter = ({ children }) => {
    const [count, setCounter] = useState(0);


    function increment() {
            setCounter(count + 1);
    }

    return (
        <div>
            <button onClick={increment}>
                {children}
                <div>{count}</div>
            </button>
        </div>
    );
}

export default ItemCounter;