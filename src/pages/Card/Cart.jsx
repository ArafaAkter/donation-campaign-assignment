

const Cart = ({card}) => {
    
    const {img,title,description,donate} = card || {}
    return (
        <div className="p-10">
         <div className="w-9/12 relative mx-auto ">
           <img className="w-11/12 rounded" src={img} />
           <div>
           <button className="bg-[#FF444A] text-white p-3 w-2/12 rounded absolute -my-20 mx-5"> Donate : {donate}</button>
           </div>
            <p className="text-3xl font-bold mt-10">{title}</p>
            <p className="mt-5">{description}</p>
         </div>
        </div>
    );
};

export default Cart;