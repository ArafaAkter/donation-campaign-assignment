import { useEffect, useState } from "react";
import DonationCart from "./DonationCart";
import Card from "../Card/Card";
import Cart from "../Card/Cart";



const Donation = () => {

    const [donation,setDonation] =useState([])
    const [noFound,setNofound] = useState("")

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donation'))
        if(donationItems){
            setDonation(donationItems)
        }
        else{
            setNofound('No Data Found')
        }
    },[])
    console.log(donation);

    return (
        <div >
           {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div>
              <div className="grid grid-cols-2">
                {donation.map(card=> <DonationCart key={card.id} card={card}></DonationCart>)}
              </div>

            </div>}
        </div>
    );
};

export default Donation;