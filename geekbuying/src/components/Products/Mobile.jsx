import { ProductTitle,ProductSpan, Grid } from "../styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Product.css';
import { MobileCard } from './MobileCard'
import { getProductsData } from '../../redux/actions'
export const Mobile = () => {

const [product, sortProducts]=React.useState([])
  const prod = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {

    getProductsData(dispatch);
  }, []);

  const handleSort = (e) => {
    // dispatch sort products on change
    let val=e.target.value;
    sortProducts(prod.products,dispatch,val);
  };
  return (
    <>
      <h2>Products</h2>
     <div className="img-out" >
      <img src="https://img.gkbcdn.com/s3/bn/2205/1500x125-6271031b2b40c930d0488be9.jpg" alt="" className="img-stuck"  />
     </div>
     <div className="sortProducts">
       <span>Sort By :</span>
        <select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc" onClick={(e)=>handleSort(e)}>Low to High</option>
        <option value="desc" onClick={(e)=>handleSort(e)}>High to Low</option>
      </select>
        </div>
      <div className="parentProduct">


        <div className="sidebarProduct">

          <div>
            <ProductTitle> Phones &amp; Accessories </ProductTitle> 
            <div><input type="checkbox" /> <ProductSpan>Cell Phone</ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>
              Apple Accessories
            </ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>Android Accessories</ProductSpan></div>
          </div>

          <div>
            <ProductTitle className="productTitle"> Operating System:</ProductTitle>
            <div>
              <input type="checkbox" /> <ProductSpan>Android 11.0</ProductSpan>
            </div>
            <div>
              <input type="checkbox" /> <ProductSpan>Android 10.0</ProductSpan>
            </div>
            <input type="checkbox" /> <ProductSpan>Android 9.0</ProductSpan>
          </div>
          <div>
            <ProductTitle>R.A.M</ProductTitle>
            <div><input type="checkbox" /> <ProductSpan>16</ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>8</ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>6</ProductSpan></div>
          </div>
          <div>
            <ProductTitle>R.O.M</ProductTitle>
            <div><input type="checkbox" /> <ProductSpan>128</ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>64</ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>256</ProductSpan></div>
          </div>
          <div>
            <ProductTitle>Resolution</ProductTitle>
            <div><input type="checkbox" /> <ProductSpan>2340*1080 (FHD+) </ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>2560*1440 (2K+)</ProductSpan></div>
          </div>
          <div>
            <ProductTitle>CPU Cores</ProductTitle>
            <div><input type="checkbox" /> <ProductSpan>Octa cores </ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>Hexa cores</ProductSpan></div>
          </div>
          <div>
            <ProductTitle>By Sim Card Slot</ProductTitle>
            <div><input type="checkbox" /> <ProductSpan>Single Sim </ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>Dual Sim</ProductSpan></div>
  
          </div>
        </div>
        <Grid className="grid">
          {prod.products.map(item => <MobileCard key={item.id} item={item} />)}
        </Grid>
      </div>
    </>
  );
};

