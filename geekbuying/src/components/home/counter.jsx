import React from 'react'
import { useState,useEffect } from 'react'
import { Home } from './Home'
export const Counter = () => {

    const [counter, setcounter] = useState()
    const [state, setstate] = useState()
 var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


var x = setInterval(function() {


    var now = new Date().getTime();

      

    var distance = countDownDate - now;
      

    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
  
    setstate(hours + "h "
    + minutes + "m " + seconds + "s ")
      
   
    if (distance < 0) {
      clearInterval(x);
      setstate("EXPIRED");
    }
  }, 1000);

  return (
    <div>
       <p>
            
           </p>
           <button>asdfgv</button>
           <Home props={state}/>
    </div>

  )
}
