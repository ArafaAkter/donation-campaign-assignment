/* eslint-disable react/prop-types */

import Cart from "./Cart";



const Cards = ({cards}) => {
    console.log(cards);
    
    return (
        <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                 // eslint-disable-next-line react/prop-types
                  cards?.map(card=><Cart key={card.id} card={card} ></Cart>)
                }
            </div>
        </div>
    );
};

export default Cards;