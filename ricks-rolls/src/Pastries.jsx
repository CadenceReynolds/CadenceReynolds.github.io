import React from 'react';
import './index.css';
import ItemCounter from "./ItemCounter.jsx"; // Update this path if necessary

const Pastries = () => {
    return (
        <>
            <div id="root"></div>
            <script type="module" src="/src/main.jsx"></script>
            <h1>Ricks Sweets:</h1>
            <div className='shop'>
            <ItemCounter>
                <img
                    src="https://bromabakery.com/wp-content/uploads/2022/01/Perfect-Cinnamon-Rolls-10.jpg"
                    alt="Cinnamon Rolls"
                    width="300"
                    height="300"
                />
                <p>Cinnamon Rolls</p>
            </ItemCounter>
            <ItemCounter>
                <img
                    src="https://assets.epicurious.com/photos/65f8973526372cdbf112c90f/1:1/w_3353,h_3353,c_limit/Caramel-Rolls_HERO.jpg"
                    alt="Caramel Rolls"
                    width="300"
                    height="300"
                />
                <p>Caramel Rolls</p>
            </ItemCounter>
            </div>
        </>
    );
};

export default Pastries;
