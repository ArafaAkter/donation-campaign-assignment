
import swal from 'sweetalert';
const Cart = ({card}) => {
    
    const {id,img,title,description,donate,text_color} = card || {}

    const hadleDonateToDonation =() =>{
        const addedDonationArray=[];
        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if(!donationItems){
            addedDonationArray.push(card)
            localStorage.setItem('donation',JSON.stringify(addedDonationArray))
            alert("added")
        }
        else{
            addedDonationArray.push(...donationItems,card)
            localStorage.setItem('donation',JSON.stringify(addedDonationArray))
            swal("Good job!", "Successfully donate", "success");
            
        }
       
       
    }
    return (
        <div className="p-10">
         <div className="w-9/12 relative mx-auto ">
           <img className="w-11/12 rounded" src={img} />
           <div>
           <button onClick={hadleDonateToDonation} className=" text-white p-3 lg:w-2/12 rounded absolute -my-20 mx-5" style={{backgroundColor: text_color}}> Donate : {donate}</button>
           </div>
            <p className="text-3xl font-bold mt-10">{title}</p>
            <p className="mt-5">{description}</p>
         </div>
        </div>
    );
};

export default Cart;