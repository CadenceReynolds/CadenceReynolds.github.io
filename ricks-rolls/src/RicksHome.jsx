import React from 'react';
import './index.css';
import ItemCounter from "./ItemCounter.jsx"; // Update this path if necessary

export default function RicksHome(){
    return (
        <>
            <h1>Ricks Rolls</h1>
            <h2>The best rolls on this side of Armstrong's classroom</h2>
            <h3>Fan favorite:</h3>
            <div className='shop'>
            <ItemCounter>
                <img src="https://bromabakery.com/wp-content/uploads/2022/01/Perfect-Cinnamon-Rolls-10.jpg"
                     alt="Cinnamon Rolls" width="300" height="300"/>
                <p>Cinnamon Rolls</p>
            </ItemCounter>
            <ItemCounter>
                <img src="https://iamhomesteader.com/wp-content/uploads/2023/03/egg-rolls.jpg" alt="Egg Rolls"
                     width="300" height="300"/>
                <p>Egg Rolls</p>
            </ItemCounter>
            <ItemCounter>
                <img src="https://www.manusmenu.com/wp-content/uploads/2015/01/1-Chicken-Spring-Rolls-9-1-of-1.jpg"
                     alt="Chicken Spring Rolls" width="300" height="300"/>
                <p>Chicken Spring Rolls</p>
            </ItemCounter>
            </div>
        </>
    );
};

// export default RicksHome;
