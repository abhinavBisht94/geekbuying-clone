import React,{useState,useEffect} from 'react'
import './desc.css'
import Clock from './timer'

function Desc() {
    const obj = {
        image:"https://img.gkbcdn.com/s3/p/2022-03-10/SENBONO-MAX2-Smartwatch-for-Men-Brwon-Leather-497706-0.jpg",
        title:"SENBONO Max2 Smartwatch for Men Touch Screen 24 Sports Modes Waterproof Fitness Tracker for iOS Android Brwon Leather",
        brand:"Senbono",
        itemCode:"497706",
        offerPrice:2751.02,
        price:3222.76,
        shipFrom:"China",
        off:"15%",
        qty:0,
    }

    // const obj = {
    //     image:"https://images.unsplash.com/photo-1533228100845-08145b01de14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     title:"Xiaomi Redmi 9A CN Version 4G LTE Smartphone 6.53 Inch HD DotDrop Screen MediaTek Helio G25 4GB RAM 64GB ROM MIUI 12 13MP AI Rear Camera 5000mAh Battery Dual SIM Dual Standby - Green",
    //     brand:"Redmi",
    //     itemCode:"467336",
    //     offerPrice:11006.43,
    //     price:12578.89,
    //     shipFrom:"Nepal",
    //     off:"13%",
    //     qty:0,

    // }
  
    const unfilledLike = "https://cdn-icons-png.flaticon.com/128/535/535285.png"
    const filledLike = "https://cdn-icons-png.flaticon.com/128/7299/7299756.png"

    const[timer,setTimer] = useState({
        h1:0,
        m1:0,
        s1:0
    })

    const[counter,setcounter] = useState(1)

    function add(){
        if(counter<10){
          setcounter(prev=>prev+1)
        }
    }

    function remove(){
        if(counter>0){
            setcounter(prev=>prev-1)
        }
    }

    const[liked,setliked] = useState(false)

    function handleLike(){
        setliked(prev=>!prev)
    }

    


  return (
    <div className='biggy'>
      
        <div className='main'>
            <img className='headerImg' src="https://img.gkbcdn.com/s3/bn/2205/1500x125-6271031b2b40c930d0488be9.jpg" alt="" />
            <div className="subMain">
                <div className="mainImgBox">
                    <img  src={obj.image} alt="watch" />
                </div>
                <div className="rightMain">
                    <p className='title'>{obj.title}</p>
                    <div className='forSpans'>
                        <span>Brand: <span>{obj.brand}</span> </span>
                        <span>Item Code: <span>{obj.itemCode}</span>
                        </span>
                    </div>
                    <div className='timer'>
                        <div className='timerLeft'>
                            <img src="https://cdn-icons-png.flaticon.com/128/3601/3601695.png" alt="" />
                            <span>
                                FLASH DEAL
                            </span>

                        </div>
                        <div className="timerRight">
                         <span style={{marginRight:20}}>Sales Ends in 2 hours </span>
                         <div className='clock11'>
                           <Clock />

                         </div>
                        </div>

                    </div>
                    <div className="data">
                        <div className="price">
                            <span className='label'>Price:</span><span className='price1'>&#8377;{obj.offerPrice}</span><span className='price2'><s>&#8377;{obj.price}</s></span><span className="price3">{obj.off}OFF</span>
                        </div>
                        <div className="shipFrom">
                            <span className="label">Ship From: </span><span className='shipName'>{obj.shipFrom}</span>
                        </div>
                        <div className="qty">
                            <span className="label">QTY:</span>
                            <button className='counter' onClick={remove}>-</button>
                            <span className='counterBox'>{counter}</span>
                            <button className='counter' onClick={add}>+</button>
                        </div>
                    </div>
                    <div className="buttons">
                            <div className="buyNow pointer">Buy Now </div>
                            <div className="addToCart pointer">Add to Cart </div>
                            <div onClick={handleLike} className="wishList pointer">
                                <img src={liked ? filledLike : unfilledLike} />
                                <p className="wishTxt">
                                    Add to WishList
                                </p>
                            </div>
                            
                    </div>
                    <div className="paypal">
                        <span className="label">
                            Payment:
                        </span>
                        <img src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="" />
                    </div>
                   

                </div>
            </div>
            <div class="footer">
       <div class="four">
           <img src="https://cdn-icons-png.flaticon.com/128/2438/2438078.png" alt=""/>
           <p class="text">SECURE PAYMENTS</p>
       </div>
       <div class="four">
        <img src="https://cdn-icons-png.flaticon.com/128/4766/4766928.png" alt=""/>
        <p class="text">CASH ON DELIVERY</p>
    </div>
    <div class="four">
        <img src="https://cdn-icons-png.flaticon.com/128/1212/1212158.png" alt=""/>
        <p class="text">ASSURED QUALITY</p>
    </div>
    <div class="four">
        <img src="https://cdn-icons-png.flaticon.com/128/2271/2271113.png" alt=""/>
        <p class="text">EASY RETURNS</p>
    </div>
                    </div>
        </div>
       
    </div>
  )
}

export default Desc