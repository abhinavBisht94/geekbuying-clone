import React from 'react'
import {ProductInfo} from '../styled'
import {Link} from 'react-router-dom'
export const MobileCard = (item) => {
    console.log(item.item.price)
    return (
        <>
          <div key={item.id} className="gridC">
            {/* display item info here  */}
            <img src={item.item.image_url} alt="product" className="imgProduct"/>
            <Link to='/mobileDetail' className="aLinkM"><ProductInfo>{item.item.name} </ProductInfo> </Link>
            <ProductInfo>{item.item.brand}</ProductInfo>
            <h3 className="priceProduct">Rs. {item.item.price}</h3> <span className="strikedoffprice">{item.item.strikedoffprice}</span>
            <p className="ratingP">{item.item.rating}</p>
          </div>
        </>
      );
}
