import './wireframes.css';
import React from 'react';
import { Link } from 'react-scroll';
import homePage from './homePage.png';
import storePage from './storePage.png';
import checkout from './checkout.png';
import orderStatus from './orderStatus.png';

function Wireframes() {
  return (
    <div className="App-section" id="wireframes">
      <div className="wireframes-top-left-corner">Wireframes</div>

      <div className="wireframes-container">

      <div className="box">
      <h1 className="wireframes-title">Home</h1>
      <img className="wireframes-item" src={homePage} alt="Home page wireframe"></img>
      </div>

      <div className="box">
      <h1 className="wireframes-title">Store</h1>
      <img className="wireframes-item" src={storePage} alt="Store page wireframe"></img>
      </div>

      <div className="box">
      <h1 className="wireframes-title">Checkout</h1>
      <img className="wireframes-item" src={checkout} alt="Checkout page wireframe"></img>
      </div>

      <div className="box">
      <h1 className="wireframes-title">Order</h1>
      <img className="wireframes-item" src={orderStatus} alt="Order status page"></img>
      </div>

      </div>

      <div className="wireframes-description">
      <p>
        In the images above, you will see wireframes for four different screens made using Balsamiq to demonstrate how the interface of the app will look. Below are some
        descriptions of the design choices made for each screen
      </p>
      <p>
        <b>Home Page:</b> The home page is intentionally made with less text and more images to make instructions clear to the user.
      </p>

      <p>
        <b>Store Page:</b> The store page characterizes all of its content in row format. This is done so all of the store items
        are organized and efficient for a user wanting to purchase groceries.
      </p>
      <p>
        <b>Checkout Page:</b> The checkout page lists all items being purchased in a column and clearly states price, delivery location,
        and payment information.
      </p>

      <p>
        <b>Order Page:</b> The order page shows a clear timeline for users to track the status of their order.
      </p>

      </div>

      <Link className="bottom-right" activeClass="active" to="prototype-crit" spy={true} smooth={true}>
        <div className="wireframes-bottom-right-corner">Next: Initial Prototype (Mockup Crit)</div>
      </Link>
    </div>
  );
}

export default Wireframes;
  
