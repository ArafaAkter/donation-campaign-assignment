/* eslint-disable react/prop-types */

const Cart = ({card}) => {
    const {img,name,title} = card || {}
    return (
          <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src={img}/></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{title}</p>
           
        </div>
        </div>
        </div>
    );
};

export default Cart;