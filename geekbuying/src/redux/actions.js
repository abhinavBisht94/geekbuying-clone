// import axios from "axios";
import {GET_DATA_REQ,GET_DATA_FAIL,GET_DATA_SUCC} from './actionTypes'

async function getProductsData(dispatch) {
    try{
       let res= await fetch("http://localhost:8080/products");
       let products = await res.json()
    //    console.log(products);
       dispatch({
           type: GET_DATA_SUCC,
           payload: products
       })
    }
    catch(e){
       dispatch({
           type: GET_DATA_FAIL
       })
    }
}

export { getProductsData };
