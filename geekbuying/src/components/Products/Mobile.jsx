import { ProductTitle,ProductSpan, Grid } from "../styled";
<<<<<<< Updated upstream
import React, { useEffect,useState } from "react";
import './Product.css';
import { MobileCard } from './MobileCard'
// import {products} from '.../'
export const Mobile = () => {
  const[sortPrice, setSortPrice]= useState("")
  const[category, setCategory]= useState("")
  const [filterBrand, setFilterBrand] = useState("");
  const[item,setItem]=useState([])
  useEffect(()=>{
    const getItem=async() =>{
     let response = await fetch("http://localhost:8080/products")
     let data = await response.json()
    //  console.log(data)
     setItem(data)
    }
    getItem()
   
  },[])

=======
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
>>>>>>> Stashed changes
  return (
    <>
      <h2>Products</h2>
     <div className="img-out" >
      <img src="https://img.gkbcdn.com/s3/bn/2205/1500x125-6271031b2b40c930d0488be9.jpg" alt="" className="img-stuck"  />
     </div>
     <div className="sortProducts">
<<<<<<< Updated upstream
       <span className="SortP">Sort By :</span>
        <select onClick={(e)=>setSortPrice(e.target.value)}>
        <option>Sort by--</option>
        <option value="dsc">Low to High</option>
        <option value="asc">High to Low</option>
      </select>
        </div>
        <div className="filterP">
          <img src="https://img.gkbcdn.com/s3/b/xiaomi.jpg" alt="Xiaomi" onClick={(e)=>setFilterBrand(e.target.alt) }/>
          <img src="https://img.gkbcdn.com/s3/b/Logo/Pocophone.jpg" alt="POCO" onClick={(e)=>setFilterBrand(e.target.alt)}/>
          <img src="https://img.gkbcdn.com/s3/b/mpow-65q6Gtkb.jpg" alt="Mpow" onClick={()=>setFilterBrand("Mpow")}/>
          <img src="https://img.gkbcdn.com/s3/b/Logo/oneplus.jpg" alt="OnePlus" onClick={()=>setFilterBrand("OnePlus")}/>
          <img src="https://img.gkbcdn.com/s3/b/2007/realme.jpg?v=-661689452" alt="Realme" onClick={()=>setFilterBrand("")}/>
          <img src="https://img.gkbcdn.com/s3/b/Logo/samsung.jpg" alt="samsung" />
          <img src="https://img.gkbcdn.com/s3/b/Logo/huawei.jpg" alt="Huawai" />
          <img src="https://img.gkbcdn.com/s3/b/Logo/other.jpg" alt="iphone" onClick={()=>setFilterBrand("iphone")}/>
        </div>
        
=======
       <span>Sort By :</span>
        <select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc" onClick={(e)=>handleSort(e)}>Low to High</option>
        <option value="desc" onClick={(e)=>handleSort(e)}>High to Low</option>
      </select>
        </div>
>>>>>>> Stashed changes
      <div className="parentProduct">


        <div className="sidebarProduct">

          <div>
            <ProductTitle> Phones &amp; Accessories </ProductTitle> 
<<<<<<< Updated upstream
            <div><input type="checkbox" value="cell" onClick={(e)=>setCategory(e.target.value) } /> <ProductSpan>Cell Phones</ProductSpan></div>
            <div><input type="checkbox"  value="accessories" onClick={(e)=>setCategory(e.target.value) }/> <ProductSpan>
             Accessories
=======
            <div><input type="checkbox" /> <ProductSpan>Cell Phone</ProductSpan></div>
            <div><input type="checkbox" /> <ProductSpan>
              Apple Accessories
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          {item.filter((brnd) => {
            if(filterBrand === ""){
                return brnd;
            }
            else{
                return brnd.brand=== filterBrand;
            }
        })
        .sort((a,b) => {
          if(sortPrice === "dsc"){
              return a.price-b.price;
          }
          else if(sortPrice === "asc"){
              return b.price-a.price
          }
          else{
              return 0;
          }
      })
      .filter((cat) => {
        if(category === ""){
            return cat;
        }
        else{
            return cat.category=== category;
        }
    })
      .map(item => <MobileCard key={item.id} item={item} />)}
          {/* {updatedList.products.map(item => <MobileCard key={item.id} item={item} />)} */}
=======
          {prod.products.map(item => <MobileCard key={item.id} item={item} />)}
>>>>>>> Stashed changes
        </Grid>
      </div>
    </>
  );
};

