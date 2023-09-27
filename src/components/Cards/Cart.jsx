/* eslint-disable react/prop-types */

const Cart = ({card}) => {
    const {img,category,title,text_color,background,category_bg} = card || {}
    return (
          <div className="rounded" style={{backgroundColor: background}}>
            <div className="cards">
            <figure><img src={img}/></figure>
            <div className="card-body">
            <h2 className="card-category w-4/12 text-center rounded"style={{color: text_color, backgroundColor: category_bg}} >{category}</h2>
            <p style={{color: text_color}} > {title} </p>
           
        </div>
        </div>
        </div>
    );
};

export default Cart;