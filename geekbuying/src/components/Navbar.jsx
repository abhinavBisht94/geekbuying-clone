import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div id="navTop">
        <div>
          <p>
            {" "}
            <img src="https://cdn-icons-png.flaticon.com/512/0/191.png" /> Save
            Big with our app!{" "}
            <img
              className="navTopArrow"
              src="https://cdn-icons-png.flaticon.com/512/892/892498.png"
            />
          </p>
        </div>

        <div>
          <p>
            Language{" "}
            <img
              className="navTopArrow"
              src="https://cdn-icons-png.flaticon.com/512/892/892498.png"
            />
          </p>
        </div>

        <div>
          <p>
            Ship to{" "}
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" />{" "}
            /INR
            <img
              className="navTopArrow"
              src="https://cdn-icons-png.flaticon.com/512/892/892498.png"
            />{" "}
          </p>
        </div>

        <div>
          <p>
            Support center{" "}
            <img
              className="navTopArrow"
              src="https://cdn-icons-png.flaticon.com/512/892/892498.png"
            />{" "}
          </p>
        </div>
      </div>

      <div id="navMid">
        <img
          id="navMidLogo"
          src="https://www.shareasale.com/images/logo2016_1.jpg"
          alt="LOGO"
        />
        <div id="navMidSearchDiv">
          <select id="navMidSelect">
            <option value="all">All Categories</option>
            <option value="home">Smart Home and Garden</option>
            <option value="phone">Phones & Accessories</option>
            <option value="computer">Computer, Tablet & Accessories</option>
            <option value="wearable">Wearable Devices</option>
            <option value="auto">Automobiles & Motorcycles</option>
            <option value="sports">Sports and Outdoors</option>
            <option value="consumer">Consumer Electronics</option>
            <option value="tv">TV Boxes & Mini PCs</option>
            <option value="toys">Toys & Hobbies</option>
            <option value="security">Security System</option>
            <option value="fashion">Fashion</option>
          </select>
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

      <div id="navBottom">
        <select id="navBottomSelect">
          <option value="all">Shop All Categories</option>
          <option value="home">Smart Home and Garden</option>
          <option value="phone">Phones & Accessories</option>
          <option value="computer">Computer, Tablet & Accessories</option>
          <option value="wearable">Wearable Devices</option>
          <option value="auto">Automobiles & Motorcycles</option>
          <option value="sports">Sports and Outdoors</option>
          <option value="consumer">Consumer Electronics</option>
          <option value="tv">TV Boxes & Mini PCs</option>
          <option value="toys">Toys & Hobbies</option>
          <option value="security">Security System</option>
          <option value="fashion">Fashion</option>
        </select>

        <button className="navBottomButton">New</button>
        <button className="navBottomButton">Top Seller</button>
        <button className="navBottomButton">Brand</button>
        <button className="navBottomButton">Clearance</button>
        <button className="navBottomButton">Deals</button>
        <button className="navBottomButton">Bargain</button>
        <button className="navBottomButton">Cupon</button>
      </div>
    </nav>
  );
};

export default Navbar;
