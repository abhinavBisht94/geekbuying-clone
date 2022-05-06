import {GET_DATA_REQ,GET_DATA_FAIL,GET_DATA_SUCC} from './actionTypes'

const initState = {
    isLoading: false,
    isError: false,
    products: [],
  };
  
  const reducer = (state = initState, { type, payload }) =>{
   switch(type){
     case GET_DATA_REQ:{
       return {
        ...state,
         isLoading:true,
         isError:false,
         products:[]
       }
     }
     case GET_DATA_SUCC:{
       return {
        ...state,
         isLoading:false,
         isError:false,
         products:payload
       }
     }
     case GET_DATA_FAIL:{
       return {
         ...state,
         isLoading:false,
         isError:true,
         products:[]
       }
     }
     default: return state
   }
  };
  export { reducer };
  