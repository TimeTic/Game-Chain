import "./Check1.css";

export default function CheckX() {
  return (
    <div class="container">
      <div class="card-body">
        <div class="breadcrumb">
          <div class="confirmed">Sign In</div>
          <div class="confirmed">Shipping Details</div>
          <div class="active">Payment Method</div>
          <div class="next">Confirm Order</div>
        </div>

        <div class="payment">
          <div class="creditcard">
            <div class="thecard">
              <div class="top-card">
                <div class="circle"></div>
                <div class="card-title">The Card</div>
              </div>
              <div class="card-info">
                <div class="card-number">1234 5678 9012 3456</div>
                <div class="exp-date">01 / 2018</div>
                <div class="card-holder">John Doe</div>
              </div>
            </div>
          </div>

          <div class="form">
            <form action="" method="get">
              <div>
                {" "}
                <label for="cardnumber">Card Number</label>
                <input
                  type="text"
                  id="cardnumber"
                  placeholder="1234 5678 9012 3456"
                />
                <label for="cardholder">Card Holder</label>
                <input type="text" id="cardholder" placeholder="John Doe" />
                <br />
                <label for="exp">Expiration Date</label>
              </div>
              <div class="date">
                <select name="month" id="month">
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
                <select name="Year">
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
              <div class="small">
                <div class="cvc">
                  <label for="cvc">CVC</label>
                  <input
                    type="text"
                    id="cvc"
                    maxlength="3"
                    size="4"
                    placeholder="123"
                  />
                </div>
                <p>
                  Three or four digits, usually found on the back of the card
                </p>
              </div>
              <button>Proceed</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
