import React, { useState } from "react";
import "../css/navbar.css";
import mlogo from "../images/mlogo.png";
import { Link } from "react-router-dom";

import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function () {
  const [product] = React.useState({
    name: "Payment ",
    price: 0.0,
    description: "Donation",
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://ry7v05l6on.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
   
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
      window.location = "/Home";
      window.localStorage.clear();
    } else {
      window.location = "/Home";
      window.localStorage.clear();
      toast("Something went wrong", { type: "error" });
    }
  }










  var p1count = window.localStorage.getItem("1");
  if (p1count === "NaN" || p1count < 1) {
    p1count = 0;
  }
  var p1count = parseInt(p1count);

  const saveToLocalStorage = (word) => {
    var p1count = window.localStorage.getItem("1");
    if (p1count === "NaN" || p1count < 1) {
      p1count = 0;
    }
    var p1count = parseInt(p1count) + 1;

    window.localStorage.setItem("1", p1count);
    document.getElementById("Cou11").value = p1count;
     document.getElementById("Cou12").value = p1count*50;
     
  totalcost=totalcost+50;
  document.getElementById("Cou50").value = (totalcost);
  };

  const saveToLocalStorageminus = (word) => {
    var p1count = window.localStorage.getItem("1");
    if (p1count === "NaN" || p1count < 1) {
      p1count = 0;
    }
    if(p1count>0)
    var p1count = parseInt(p1count)-1;

    window.localStorage.setItem("1", p1count );
    document.getElementById("Cou11").value = p1count;
     document.getElementById("Cou12").value = p1count*50;
     
  totalcost=totalcost-50;
  document.getElementById("Cou50").value = (totalcost);
  };




















  var p1count2 = window.localStorage.getItem("2");
  if (p1count2 === "NaN" || p1count2 < 1) {
    p1count2 = 0;
  }
  var p1count2 = parseInt(p1count2);

  const saveToLocalStorage2 = (word) => {
    var p1count2 = window.localStorage.getItem("2");
    if (p1count2 === "NaN" || p1count2 < 1) {
      p1count2 = 0;
    }
    var p1count2 = parseInt(p1count2)+1;

    window.localStorage.setItem("2", p1count2 );
    document.getElementById("Cou21").value = p1count2;
     document.getElementById("Cou22").value = p1count2*100;
    
  totalcost=totalcost+100;
  document.getElementById("Cou50").value = (totalcost);
  };

  const saveToLocalStorageminus2 = (word) => {
    var p1count2 = window.localStorage.getItem("2");
    if (p1count2 === "NaN" || p1count2 < 1) {
      p1count2 = 0;
    }
    if(p1count2>0)
    var p1count2 = parseInt(p1count2)-1;

    window.localStorage.setItem("2", p1count2);
    document.getElementById("Cou21").value = p1count2;
    document.getElementById("Cou22").value = p1count2*100;
    
    
  totalcost=totalcost-100;
  document.getElementById("Cou50").value = (totalcost);
  };










  var p1count3 = window.localStorage.getItem("3");
  if (p1count3 === "NaN" || p1count3 < 1) {
    p1count3 = 0;
  }
  var p1count3 = parseInt(p1count3);

  const saveToLocalStorage3 = (word) => {
    var p1count3 = window.localStorage.getItem("3");
    if (p1count3 === "NaN" || p1count3 < 1) {
      p1count3 = 0;
    }
    var p1count3 = parseInt(p1count3)+1;

    totalcost=totalcost+150;
    document.getElementById("Cou50").value = (totalcost);

    window.localStorage.setItem("3", p1count3 );
    document.getElementById("Cou31").value = p1count3;
    document.getElementById("Cou32").value = p1count3*150;
  };

  const saveToLocalStorageminus3 = (word) => {
    var p1count3 = window.localStorage.getItem("3");
    if (p1count3 === "NaN" || p1count3 < 1) {
      p1count3 = 0;
    }
    if(p1count3>0)
    var p1count3 = parseInt(p1count3)-1;

    window.localStorage.setItem("3", p1count3 );
    document.getElementById("Cou31").value = p1count3;
    document.getElementById("Cou32").value = p1count3*100;

    totalcost=totalcost-150;
    document.getElementById("Cou50").value = (totalcost);
  };











  var p1count4 = window.localStorage.getItem("4");
  if (p1count4 === "NaN" || p1count4 < 1) {
    p1count4 = 0;
  }
  var p1count4 = parseInt(p1count4);

  const saveToLocalStorage4 = (word) => {
    var p1count4 = window.localStorage.getItem("4");
    if (p1count4 === "NaN" || p1count4 < 1) {
      p1count4 = 0;
    }

    var p1count4 = parseInt(p1count4)+1;

    totalcost=totalcost+500;
    document.getElementById("Cou50").value = (totalcost);

    window.localStorage.setItem("4", p1count4 );
    document.getElementById("Cou41").value = p1count4;
    document.getElementById("Cou42").value = p1count4*500;
  };

  const saveToLocalStorageminus4 = (word) => {
    var p1count4 = window.localStorage.getItem("4");
    if (p1count4 === "NaN" || p1count4 < 1) {
      p1count4 = 0;
    }

    if(p1count4>0)
    var p1count4 = parseInt(p1count4)-1;

    window.localStorage.setItem("4", p1count4 );
    document.getElementById("Cou41").value = p1count4;
    document.getElementById("Cou42").value = p1count4*500;


    



  totalcost=totalcost-500;
  document.getElementById("Cou50").value = (totalcost);


     
 
    


  };

var totalcost=((p1count*50)+(p1count2*100)+(p1count3*150)+(p1count4*500));


  const [word, setWord] = useState(
    window.localStorage.getItem("word") == null
        ? ""
        : window.localStorage.getItem("word")
);







  return (
    <div className="mnavbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img src={mlogo} className="mlogo" alt="Scholars Academy" />
          </Link>
         

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggle-button">
              <i className="fa-solid fa-bars text-danger"></i>
            </span>
           
          </button>

          <div
            className="collapse navbar-collapse links"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active  text-white expand"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active  text-white expand"
                  aria-current="page"
                  to="/information"
                >
                  Informain
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active  text-white expand"
                  aria-current="page"
                  to="/islamic_scholars"
                >
                  Scholar Schedule
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active  text-white expand"
                  aria-current="page"
                  to="/donation"
                >
                  Donation
                </Link>
              </li>
              <li className="nav-item">
                <li
                  className="nav-link active  text-white expand"
                  aria-current="page"
                >
                  <button
                    type="button"
                    className="ct1001"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    Cart
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable " >
                      <div className="modal-content ">
                        <div className="modal-header">
                          <h5
                            className="modal-title text-dark"
                            id="exampleModalLabel"
                          >
                            Your Cart
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className=" text-dark">
                          <div className="shopping-cart">
                            

                            <div className="item mt-2">
                              <div className="buttons">
                                <span className="">
                                  <i className="fa-solid fa-shield  text-danger"></i>
                                </span>
                              </div>

                             

                              <div className="description">
                                <span>Free Education</span>
                              </div>

                              <div className="quantity">
                                <button
                                  className="plus-btn"
                                  onClick={() => saveToLocalStorage(word)}
                                  type="button"
                                  name="button"
                                >
                                  <img
                                    src="https://designmodo.com/demo/shopping-cart/plus.svg"
                                    alt=""
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="name"
                                  id="Cou11"
                                  defaultValue={p1count}
                                />
                                <button
                                  className="minus-btn"
                                  onClick={() => saveToLocalStorageminus(word)}
                                  type="button"
                                  name="button"
                                >
                                  <img
                                    src="https://designmodo.com/demo/shopping-cart/minus.svg"
                                    alt=""
                                  />
                                </button>
                              </div>

                              <div className="total-price d-lex">
                                 <input
                                  type="text"
                                  name="name"
                                  disabled
                                  id="Cou12"
                                  className="bd11"
                                  defaultValue={p1count*50}
                                /></div>
                            </div>

                            <div className="item">
                              <div className="buttons">
                                <span className="">
                                  <i className="fa-solid fa-shield  text-danger"></i>
                                </span>
                              </div>

                             

                              <div className="description">
                                <span>Distribution of food items</span>
                              </div>

                              <div className="quantity">
                                <button
                                  className="plus-btn"
                                  onClick={() => saveToLocalStorage2(word)}
                                  type="button"
                                  name="button"
                                >
                                  <img
                                    src="https://designmodo.com/demo/shopping-cart/plus.svg"
                                    alt=""
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="name"
                                  id="Cou21"
                                  defaultValue={p1count2}
                                />
                                <button
                                  className="minus-btn"
                                  onClick={() => saveToLocalStorageminus2(word)}
                                  type="button"
                                  name="button"
                                >
                                  <img
                                    src="https://designmodo.com/demo/shopping-cart/minus.svg"
                                    alt=""
                                  />
                                </button>
                              </div>

                              <div className="total-price">
                              <input
                                  type="text"
                                  name="name"
                                  disabled
                                  id="Cou22"
                                  className="bd11"
                                  defaultValue={p1count2*100}
                                />
                              </div>
                            </div>
                            <div className="item">
                              <div className="buttons">
                                <span className="">
                                  <i className="fa-solid fa-shield  text-danger"></i>
                                </span>
                              </div>

                             

                              <div className="description">
                                <span>Food assistance to victims</span>
                              </div>

                              <div className="quantity">
                                <button
                                  className="plus-btn"
                                  onClick={() => saveToLocalStorage3(word)}
                                  type="button"
                                  name="button"
                                >
                                  <img
                                    src="https://designmodo.com/demo/shopping-cart/plus.svg"
                                    alt=""
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="name"
                                  id="Cou31"
                                  defaultValue={p1count3}
                                />
                                <button
                                  className="minus-btn"
                                  onClick={() => saveToLocalStorageminus3(word)}
                                  type="button"
                                  name="button"
                                >
                                  <img
                                    src="https://designmodo.com/demo/shopping-cart/minus.svg"
                                    alt=""
                                  />
                                </button>
                              </div>

                              <div className="total-price">
                              <input
                                  type="text"
                                  name="name"
                                  disabled
                                  id="Cou32"
                                  className="bd11"
                                  defaultValue={p1count3*150}
                                />
                              </div>
                            </div>

                            <div className="item">
                              <div className="buttons">
                                <span className="">
                                  <i className="fa-solid fa-shield  text-danger"></i>
                                </span>
                              </div>

                             

                              <div className="description">
                                <span>Mosque construction</span>
                              </div>

                              <div className="quantity">
                                <button
                                  className="plus-btn"
                                  onClick={() => saveToLocalStorage4(word)}
                                  type="button"
                                  name="button"
                                >
                                  <img
                                    src="https://designmodo.com/demo/shopping-cart/plus.svg"
                                    alt=""
                                  />
                                </button>
                                <input
                                  type="text"
                                  name="name"
                                  id="Cou41"
                                  defaultValue={p1count4}
                                />
                                <button
                                  className="minus-btn"
                                  onClick={() => saveToLocalStorageminus4(word)}
                                  type="button"
                                  name="button"
                                >
                                  <img
                                    src="https://designmodo.com/demo/shopping-cart/minus.svg"
                                    alt=""
                                  />
                                </button>
                              </div>

                              <div className="total-price">
                              <input
                                  type="text"
                                  name="name"
                                  disabled
                                  id="Cou42"
                                  className="bd11"
                                  defaultValue={p1count4*500}
                                />
                              </div>
                            </div>
                            <div className="row w-100 pt-5 pb-5 ">
                              
                              <div className="col-10  d-flex justify-content-end">
                                <span to="/"> Total Cost : $<input
                                  type="text"
                                  name=""
                                  disabled
                                  id="Cou50"
                                  className="bd11"
                                  defaultValue={totalcost}
                                /> </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                         
                          <StripeCheckout
                                  stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
                                  token={handleToken}
                                  amount={totalcost * 100}
                                  name="Payment Info"
                                />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
