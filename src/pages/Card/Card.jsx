import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cart from "./Cart";


const Card = () => {
    const[card,setCard] = useState()
    const { id } = useParams()
   
    const cards = useLoaderData()
    useEffect(()=>{
        const findCard = cards?.find(card => card.id === id)
        setCard(findCard)
    },[id,cards])
    
    return (
        <div>
            <Cart card ={card}></Cart>
        </div>
    );
};

export default Card;