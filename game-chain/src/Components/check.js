import "./check.css";
import ReactDOM from "react-dom";
import React from "react";
import Navbar from "./Navbar";
import { Link, Route, Router, Routes } from "react-router-dom";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Check() {
  return (
    <div className="maincontainer">
      {/* <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
          <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
          <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="#">Features</a>
            <a class="p-2 text-dark" href="#">Enterprise</a>
            <a class="p-2 text-dark" href="#">Support</a>
            <a class="p-2 text-dark" href="#">Pricing</a>
          </nav>
          <a class="btn btn-outline-primary" href="#">Sign up</a>
        </div> */}
      <br />
      <br />

      <div>
        <Navbar />
      </div>
      <div class="container">
        <div class="py-5 text-center">
          <h2></h2>
          <p class="lead"></p>
        </div>
        <br />
        <br />
        <br />

        <div class="row">
          <div class="col-md-4 order-md-2 mb-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-muted">Your cart</span>
              <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Product name</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$12</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Second product</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$8</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 class="my-0">Third item</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between bg-light">
                {/* <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div> */}
                <span class="text-success">-$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
            <form class="card p-2">
              {/* <div class="input-group">
                  <input type="text" class="form-control" placeholder="Promo code"/>
                  <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">Redeem</button>
                  </div>
                </div> */}
            </form>
          </div>
          <div class="col-md-8 order-md-1">
            <h3>Checkout form</h3>
            <h4 class="mb-3">Billing address</h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="username">Username</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Username"
                    required
                  />
                  <div class="invalid-feedback">Your username is required.</div>
                </div>
              </div>
              <div class="mb-3">
                <label for="email">
                  Email <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div class="mb-3">
                <label for="address">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              <div class="mb-3">
                <label for="address2">
                  Address 2 <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>
              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Country</label>
                  <select
                    class="custom-select d-block w-100"
                    id="country"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <select
                    class="custom-select d-block w-100"
                    id="state"
                    required
                  >
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div class="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Zip code required.</div>
                </div>
              </div>
              <hr class="mb-4" />
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="same-address"
                />
                <label class="custom-control-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="save-info"
                />
                <label class="custom-control-label" for="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr class="mb-4" />
              <h4 class="mb-3">Payment</h4>
              <div class="d-block my-3">
                <div class="custom-control custom-radio">
                  <input
                    id="credit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    checked
                    required
                  />
                  <label class="custom-control-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div class="custom-control custom-radio">
                  <input
                    id="paypal"
                    name="paymentMethod"
                    type="radio"
                    class="custom-control-input"
                    required
                  />
                  <label class="custom-control-label" for="paypal">
                    Paypal
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name">Name on card</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name"
                    placeholder=""
                    required
                  />
                  <small class="text-muted">
                    Full name as displayed on card
                  </small>
                  <div class="invalid-feedback">Name on card is required</div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number">Credit card number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">Expiration</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Expiration date required</div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration">CVV</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">Security code required</div>
                </div>
              </div>
              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="button">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
        <footer class="my-5 pt-5 text-muted text-center text-small">
          <p class="mb-1">&copy; 2020-2021 therichpost.com</p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

// export default function Check() {
//   class App extends React.Component {
//     render()  {
//       return (

//         <div className="app-container">
//           <div className="row">
//             {/* <div className="col">
//               <Item name="Instax Mini 90 Neo Classic" price="$144.99" img="http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg" />
//             </div> */}
//             <div className="col no-gutters">
//               <Checkout />
//               <Cancel />
//               {/* <Navbar /> */}
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

//   const Item = (props) => (
//     <div className="item-container">
//       <div className="item-image">
//         <img src={props.img} />
//         <div className="item-details">
//           <h3 className="item-name"> {props.name} </h3>
//           <h2 className="item-price"> {props.price} </h2>
//         </div>
//       </div>
//     </div>
//   );

//   const Checkout = (props) => (
//     <div className="checkout">
//       <div className="checkout-container">
//         <h3 className="heading-3">Credit card checkout</h3>
//         <Input label="Cardholder's Name" type="text" name="name" />
//         <Input
//           label="Card Number"
//           type="number"
//           name="card_number"
//           imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
//         />

//         <div className="row">
//           <div className="col">
//             <Input label="Expiration Date" type="month" name="exp_date" />
//           </div>
//           <div className="col">
//             <Input label="CVV" type="number" name="cvv" />
//           </div>
//         </div>
//         <Button text="Place order" />
//       </div>
//     </div>
//   );

//   const CancelOrder = (props) => (
//     <div className="Cancel">
//       <div className="Cancel-container">
//         <h3 className="heading-3">Credit card checkout</h3>
//         <Input label="Cardholder's Name" type="text" name="name" />
//         <Input
//           label="Card Number"
//           type="number"
//           name="card_number"
//           imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
//         />

//         {/* <div className="row">
//           <div className="col">
//             <Input label="Expiration Date" type="month" name="exp_date" />
//           </div>
//           <div className="col">
//             <Input label="CVV" type="number" name="cvv" />
//           </div>
//         </div> */}
//         <Button text="Cancel Order" />
//       </div>
//     </div>
//   );

//   const Input = (props) => (
//     <div className="input">
//       <label>{props.label}</label>
//       <div className="input-field">
//         <input type={props.type} name={props.name} />
//         <img src={props.imgSrc} />
//       </div>
//     </div>
//   );

//   const Button = (props) => (
//     <button className="checkout-btn" type="button">
//       {props.text}
//     </button>
//   );

//   const Cancel = (props) => (
//     <button className="Cancel-btn" type="button">
//       {props.text}
//     </button>
//   );

//   ReactDOM.render(<App />, document.getElementById("root"));
// }
