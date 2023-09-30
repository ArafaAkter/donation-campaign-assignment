import { useEffect, useState } from "react";
import DonationCart from "./DonationCart";
import Card from "../Card/Card";
import Cart from "../Card/Cart";



const Donation = () => {

    const [donation,setDonation] =useState([])
    const [noFound,setNofound] = useState("");
    const[isShow,setIsShow] = useState(false)

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
                {
                    isShow ? donation.map((card)=>(
                        <DonationCart key={card.id} card={card}></DonationCart>))

                        : donation.slice(0,4).map((card)=>(
                     <DonationCart key={card.id} card={card}></DonationCart>))
                }
              </div>

              <button onClick={()=> setIsShow(!isShow)} className="p-3 rounded bg-[#009444] text-white block mx-auto">See All</button>

            </div>}
        </div>
    );
};

export default Donation;