import React, { useState } from "react";
import "./css/navbarMid.css";

const NavbarMid = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    console.log("show:", show);
    setShow(!show);
    console.log("show:", show);
  };

  return (
    <div id="navMid">
      <img
        id="navMidLogo"
        src="https://www.shareasale.com/images/logo2016_1.jpg"
        alt="LOGO"
      />

      <button id="navMidSelectButton" onClick={handleShow} value="all">
        All Categories{" "}
        <img src="https://cdn-icons-png.flaticon.com/512/57/57055.png" />
      </button>

      <div id="navMidSearchDiv">
        <div>
          <input
            type="text"
            id="navMidInput"
            placeholder="Search by keywords"
          />
        </div>
        <button id="navMidSearchButton">
          <img
            id="navMidSearchImage"
            src="https://i.ibb.co/LtfYhmG/search.png"
          />
        </button>
      </div>

      {show ? (
        <div id="navMidSelect">
          <div>
            <p value="home">Smart Home and Garden</p>
            <p value="phone">Phones & Accessories</p>
            <p value="computer">Computer, Tablet & Accessories</p>
            <p value="wearable">Wearable Devices</p>
            <p value="auto">Automobiles & Motorcycles</p>
            <p value="sports">Sports and Outdoors</p>
          </div>
          <div>
            <p value="consumer">Consumer Electronics</p>
            <p value="tv">TV Boxes & Mini PCs</p>
            <p value="toys">Toys & Hobbies</p>
            <p value="security">Security System</p>
            <p value="fashion">Fashion</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div id="navMidRightButton">
        {/* <img src="https://i.ibb.co/jr8y62h/user.png"> */}
        <button>
          <img src="https://i.ibb.co/jr8y62h/user.png" />
          Sign in
        </button>

        <button>
          <img src="https://i.ibb.co/F3LgrPd/heart.png" />
          Wishlist
        </button>

        <button>
          <img src="https://i.ibb.co/k4H1jZq/shopping-cart.png" />
          Cart
        </button>
      </div>
    </div>
  );
};

export default NavbarMid;
