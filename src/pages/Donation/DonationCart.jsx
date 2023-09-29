
const DonationCart = ({card}) => {
    const {id,img,title,text_color,category,category_bg,background,donate} = card || {}
    return (
        <div>
        <div className="flex justify-center items-center gap-10 " >
            <div className="flex gap-4 mb-5 rounded w-10/12"  style={{backgroundColor:background}}>
          <div>
          <img className="" src={img} />
          </div>
          <div className="text-left mt-4" >
            <p className="w-8/12 text-center rounded"style={{color: text_color,backgroundColor: category_bg}}>{category} </p>
            <p className="text-xl font-bold">{title}</p>
            <p style={{color: text_color}}>{donate}</p>
          <button className=" text-white p-2 w-10/12 rounded " style={{backgroundColor: text_color}}>View Details</button>
          
          </div>
          </div>
          
        </div>
       </div>
    );
};

export default DonationCart;