import React from 'react';
import styles from './CheckOut.module.css';

export const CheckOut = () => {

  const[showcredit,setShowCredit]=React.useState(false);
  const[card,setCard]=React.useState("");
  const[month,setMonth]=React.useState("");
  const[cvv,setCvv]=React.useState("");

    const seeChange=(e)=>{
        setShowCredit(true);
    }
    const handleChange=(e)=>{
        setShowCredit(false);
    }
    const showMessage=()=>{
      if(card==="123456789"  && month==="01/24" && cvv==="257"){
        alert("Order Successful");
      }else{
        alert("Invalid Credentials");
      }
    }

    let amount=JSON.parse(localStorage.getItem("total"));

  return (
    <div>
    <div className={styles.header}>
    <img src='/geek_buying.jpg' alt={"name"}/>
    </div>
    <h3>Payment Method</h3>
    <div className={styles.main_box}>
    <div className={styles.box1}>
    <input type={"radio"} id="paypal" name={"buy"} onChange={handleChange} />
    <img src='/paypal.jpg' alt='name' className={styles.paypalImg}/>
    <p className={styles.para}>The safer,easier way to pay</p>
    <input type={"radio"} id="credit" name={"buy"} onChange={seeChange} value={"on"}/>
    <img src='/credit.jpg' alt='name' className={styles.credit}/>
    <p className={styles.para}>Pay by credit/debit card directly</p>
    {showcredit && <div>
      <input placeholder='Card Number' value={card} className={styles.card} onChange={(e)=> setCard(e.target.value)} />
      <div className={styles.two_inputs}>
      <input placeholder='MM/YY'  value={month} className={styles.month} onChange={(e)=> setMonth(e.target.value)} />
      <input placeholder='CVV/CVC' value={cvv}  className={styles.cvv}  onChange={(e)=> setCvv(e.target.value)} />
      </div>
      </div>}
    </div>
    <div className={styles.box2}>
    <div className={styles.right_box1}>
    <p>Order No : {25794}</p>
    <br/>
    <p>Grand Total : {amount}</p>
    <p>Payable Amount : ₹​ {amount}</p>
    <input className={styles.order} type={"button"} onClick={showMessage} value={"Pay"} />
    </div>
    </div>
    </div>
    </div>
  )
}
