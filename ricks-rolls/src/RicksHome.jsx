import React from 'react';
import './index.css'; // Update this path if necessary

const RicksHome = () => {
    return (
        <>
            <h1>Ricks Rolls</h1>
            <h2>The best rolls on this side of Armstrong's classroom</h2>
            <h3>Fan favorite:</h3>
            <div>
                <img src="https://bromabakery.com/wp-content/uploads/2022/01/Perfect-Cinnamon-Rolls-10.jpg"
                     alt="Cinnamon Rolls" width="300" height="300"/>
                <label>Cinnamon Rolls</label>
            </div>
            <div>
                <img src="https://iamhomesteader.com/wp-content/uploads/2023/03/egg-rolls.jpg" alt="Egg Rolls"
                     width="300" height="300"/>
                <label>Egg Rolls</label>
            </div>
            <div>
                <img src="https://www.manusmenu.com/wp-content/uploads/2015/01/1-Chicken-Spring-Rolls-9-1-of-1.jpg"
                     alt="Chicken Spring Rolls" width="300" height="300"/>
                <label>Chicken Spring Rolls</label>
            </div>
        </>
    );
};

export default RicksHome;
