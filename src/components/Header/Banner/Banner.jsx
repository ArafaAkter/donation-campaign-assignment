
const Banner = () => {
    return (
        <div className="h-[70vh] items- bg-white">
         <h1 className="flex justify-center items-center font-bold text-4xl my-20">I Grow By Helping People In Need</h1> 
         <div className="form-control ">
        <div className="input-group flex justify-center items-center">
            <input type="text" placeholder="Search…" className="input input-bordered" />
            <button className="bg-[#FF444A] text-white h-12 px-5 text-center">
           Button 
            </button>
        </div>
        </div>
        </div>
    );
};

export default Banner;