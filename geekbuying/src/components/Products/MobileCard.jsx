import React from 'react'
import {ProductInfo} from '../styled'
export const MobileCard = (item) => {
    console.log(item.item.price)
    return (
        <>
          <div key={item.id} className="gridC">
            {/* display item info here  */}
            <img src={item.item.image_url} alt="product" className="imgProduct"/>
            <ProductInfo>{item.item.name} </ProductInfo>
            <ProductInfo>{item.item.brand}</ProductInfo>
            <h3 className="priceProduct">Rs. {item.item.price}</h3> <span className="strikedoffprice">{item.item.strikedoffprice}</span>
          </div>
        </>
      );
}
