import React, { useState } from 'react';
import './index.css';
import ItemCounter from "./ItemCounter.jsx";

const Cart = () => {
    const [itemNum, setItem] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    function decrement(index){
        setCounter(count.index - 1)
    }

    return (
        <>
            <div id="root"></div>
            <div className='shop'>
                <ItemCounter>
                    <img src="https://thecozycook.com/wp-content/uploads/2023/11/Dinner-Rolls-f2.jpg" alt="Dinner Rolls"
                         width="300px" height="300px"/>
                    <p>Dinner Rolls</p>
                </ItemCounter>
                <button>
                    <img src="https://www.flourarrangements.org/wp-content/uploads/2021/03/French-Bread-Rolls-6.jpg"
                         alt="French Bread Rolls" width="300" height="300"/>
                    <p>French Bread Rolls</p>
                    <span className="French-count">0</span>
                </button>
                <button>
                    <img src="https://vikalinka.com/wp-content/uploads/2021/03/Garlic-Butter-Dinner-Rolls-11-Edit.jpg"
                         alt="Garlic Butter Dinner Rolls" width="300" height="300"/>
                    <p>Garlic Butter Dinner Rolls</p>
                    <span className="Garlic-count">0</span>
                </button>
                <button>
                    <img src="https://badbatchbaking.com/wp-content/uploads/2023/12/IMG_3397-2.jpg" alt="Sausage Rolls"
                         width="300" height="300"/>
                    <p>Sausage Rolls</p>
                    <span className="Sausage-count">0</span>
                </button>
                <button>
                    <img src="https://www.manusmenu.com/wp-content/uploads/2015/01/1-Chicken-Spring-Rolls-9-1-of-1.jpg"
                         alt="Chicken Spring Rolls" width="300" height="300"/>
                    <p>Chicken Spring Rolls</p>
                    <span className="Spring-count">0</span>
                </button>
                <button>
                    <img src="https://iamhomesteader.com/wp-content/uploads/2023/03/egg-rolls.jpg" alt="Egg Rolls"
                         width="300" height="300"/>
                    <p>Egg Rolls</p>
                    <span className="Egg-count">0</span>
                </button>
                <button>
                    <img src="https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4-500x375.jpg"
                         alt="Vegetable Spring Rolls" width="300" height="300"/>
                    <p>Vegetable Spring Rolls</p>
                    <span className="Vegetable-count">0</span>
                </button>
                <button>
                    <img src="https://www.freutcake.com/wp-content/uploads/2021/09/Pepperoni-Rolls-9-735x1103.jpg"
                         alt="Pepperoni Rolls" width="300" height="300"/>
                    <p>Pepperoni Rolls</p>
                    <span className="Pepperoni-count">0</span>
                </button>
                <button>
                    <img
                        src="https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Mutton-rolls-c70a28c.jpg?quality=90&crop=6px,1448px,2837px,1220px&resize=556,505"
                        alt="Mutton Rolls" width="300px" height="300px"/>
                    <p>Mutton Rolls</p>
                    <span className="Mutton-count">0</span>
                </button>
                <button>
                    <img src="https://life-in-the-lofthouse.com/wp-content/uploads/2023/05/Chicken-Egg-Rolls10.jpg"
                         alt="Chicken Egg Rolls" width="300" height="300"/>
                    <p>Chicken Egg Rolls</p>
                    <span className="Chicken-count">0</span>
                </button>
                <button>
                    <img
                        src="https://bromabakery.com/wp-content/uploads/2022/01/Perfect-Cinnamon-Rolls-10.jpg"
                        alt="Cinnamon Rolls"
                        width="300"
                        height="300"
                    />
                    <p>Cinnamon Rolls</p>
                    <span className="Cinnamon-count">0</span>
                </button>
                <button>
                    <img
                        src="https://assets.epicurious.com/photos/65f8973526372cdbf112c90f/1:1/w_3353,h_3353,c_limit/Caramel-Rolls_HERO.jpg"
                        alt="Caramel Rolls"
                        width="300"
                        height="300"
                    />
                    <p>Caramel Rolls</p>
                    <span className="Caramel-count">0</span>
                </button>
            </div>
            <p>This Is Cart</p>
            <script type="module" src="/src/main.jsx"></script>
        </>
    );
};

export default Cart;
