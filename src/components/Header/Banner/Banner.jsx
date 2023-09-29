
const Banner = () => {
    return (
        <div className="h-[50vh] -mt-20 ">
         <h1 className="flex justify-center items-center font-bold text-4xl m-">I Grow By Helping People In Need</h1> 
         <div className="form-control">
        <div className="input-group flex justify-center items-center my-10">
            <input type="text" placeholder="Search…" className="input input-bordered" />
            <button className="bg-[#FF444A] text-white h-12 px-5 text-center">
          Search 
            </button>
        </div>
        </div>
        </div>
    );
};

export default Banner;