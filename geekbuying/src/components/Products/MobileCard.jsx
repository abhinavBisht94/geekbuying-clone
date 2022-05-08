import React from 'react'
import {ProductInfo,MobLink} from '../styled'
import {Link} from 'react-router-dom'
export const MobileCard = (item) => {
   const mainID = item.item.id
  //  console.log(item.item.id)
    
    return (
        <>
        <Link to={`/mobile/${mainID}`}>
          <div key={item.id} className="gridC">
            {/* display item info here  */}
            <img src={item.item.image_url} alt="product" className="imgProduct"/>
            <MobLink to='/mobileDetail' className="aMobLinkM"><ProductInfo>{item.item.name} </ProductInfo> </MobLink>
            <ProductInfo>{item.item.brand}</ProductInfo>
            <h3 className="priceProduct">Rs. {item.item.price}</h3> <span className="strikedoffprice">{item.item.strikedoffprice}</span>
            <p className="ratingP">{item.item.rating} <span className="rand">{Math.floor(Math.random() * (18 - 5 + 1)) + 5}</span></p>
          </div>
          </Link>
        </>
      );
}
