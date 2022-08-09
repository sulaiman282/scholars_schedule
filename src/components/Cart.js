import React, { useState } from 'react';
import "../css/card.css"
import {Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";




export default function Cart() {



    const [product] = React.useState({
        name: "Payment ",
        price: 0.0,
        description: "Donation"
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
   


    var p1count = window.localStorage.getItem("1")
    if (p1count === "NaN" || p1count < 1) {
        p1count = 0;

    }
    var p1count = parseInt(p1count);


    const saveToLocalStorage = word => {

        var p1count = window.localStorage.getItem("1")
        if (p1count === "NaN" || p1count < 1) {
            p1count = 0;

        }
        var p1count = parseInt(p1count);

        window.localStorage.setItem("1", p1count + 1);
        window.location.reload();
    };

    const saveToLocalStorageminus = word => {

        var p1count = window.localStorage.getItem("1")
        if (p1count === "NaN" || p1count < 1) {
            p1count = 0;

        }
        var p1count = parseInt(p1count);

        window.localStorage.setItem("1", p1count - 1);
        window.location.reload();

    };



















    var p1count2 = window.localStorage.getItem("2")
    if (p1count2 === "NaN" || p1count2 < 1) {
        p1count2 = 0;

    }
    var p1count2 = parseInt(p1count2);


    const saveToLocalStorage2 = word => {

        var p1count2 = window.localStorage.getItem("2")
        if (p1count2 === "NaN" || p1count2 < 1) {
            p1count2 = 0;

        }
        var p1count2 = parseInt(p1count2);

        window.localStorage.setItem("2", p1count2 + 1);
        window.location.reload();
    };

    const saveToLocalStorageminus2 = word => {

        var p1count2 = window.localStorage.getItem("2")
        if (p1count2 === "NaN" || p1count2 < 1) {
            p1count2 = 0;

        }
        var p1count2 = parseInt(p1count2);

        window.localStorage.setItem("2", p1count2 - 1);
        window.location.reload();

    };


















    var p1count3 = window.localStorage.getItem("3")
    if (p1count3 === "NaN" || p1count3 < 1) {
        p1count3 = 0;

    }
    var p1count3 = parseInt(p1count3);


    const saveToLocalStorage3 = word => {

        var p1count3 = window.localStorage.getItem("3")
        if (p1count3 === "NaN" || p1count3 < 1) {
            p1count3 = 0;

        }
        var p1count3 = parseInt(p1count3);

        window.localStorage.setItem("3", p1count3 + 1);
        window.location.reload();
    };

    const saveToLocalStorageminus3 = word => {

        var p1count3 = window.localStorage.getItem("3")
        if (p1count3 === "NaN" || p1count3 < 1) {
            p1count3 = 0;

        }
        var p1count3 = parseInt(p1count3);

        window.localStorage.setItem("3", p1count3 - 1);
        window.location.reload();

    };
























    var p1count4 = window.localStorage.getItem("4")
    if (p1count4 === "NaN" || p1count4 < 1) {
        p1count4 = 0;

    }
    var p1count4 = parseInt(p1count4);


    const saveToLocalStorage4 = word => {

        var p1count4 = window.localStorage.getItem("4")
        if (p1count4 === "NaN" || p1count4 < 1) {
            p1count4 = 0;

        }
        var p1count4 = parseInt(p1count4);

        window.localStorage.setItem("4", p1count4 + 1);
        window.location.reload();
    };

    const saveToLocalStorageminus4 = word => {

        var p1count4 = window.localStorage.getItem("4")
        if (p1count4 === "NaN" || p1count4 < 1) {
            p1count4 = 0;

        }
        var p1count4 = parseInt(p1count4);

        window.localStorage.setItem("4", p1count4 - 1);
        window.location.reload();

    };






    var totalcost =(p1count*50) + (p1count2*100)+(p1count3*150)+(p1count4*500) ;
   








    const [word, setWord] = useState(
        window.localStorage.getItem("word") == null
            ? ""
            : window.localStorage.getItem("word")
    );



















    return (
        <div className="shopping-cart">

            <div className="title">
                Donation Cart
            </div>


            <div className="item mt-2">
                <div className="buttons">
                    <span className=""><i className="fa-solid fa-shield  text-danger"></i></span>

                </div>

                <div className="image">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Sheikh_Zayed_Mosque_view.jpg/150px-Sheikh_Zayed_Mosque_view.jpg" className='cartimg1' alt="" />
                </div>

                <div className="description">
                    <span>Free Education</span>


                </div>

                <div className="quantity">
                    <button className="plus-btn" onClick={() => saveToLocalStorage(word)} type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value={p1count} />
                    <button className="minus-btn" onClick={() => saveToLocalStorageminus(word)} type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                    </button>
                </div>

                <div className="total-price">{p1count*50}$</div>
            </div>


            <div className="item">
                <div className="buttons">
                    <span className=""><i className="fa-solid fa-shield  text-danger"></i></span>

                </div>

                <div className="image">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Sheikh_Zayed_Mosque_view.jpg/150px-Sheikh_Zayed_Mosque_view.jpg" className='cartimg1' alt="" />
                </div>

                <div className="description">
                    <span>Distribution of food items</span>

                </div>

                <div className="quantity">
                    <button className="plus-btn" onClick={() => saveToLocalStorage2(word)} type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value={p1count2} />
                    <button className="minus-btn" onClick={() => saveToLocalStorageminus2(word)} type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                    </button>
                </div>

                <div className="total-price">{p1count2*100}$</div>
            </div>
            <div className="item">
                <div className="buttons">
                    <span className=""><i className="fa-solid fa-shield  text-danger"></i></span>

                </div>

                <div className="image">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Sheikh_Zayed_Mosque_view.jpg/150px-Sheikh_Zayed_Mosque_view.jpg" className='cartimg1' alt="" />
                </div>

                <div className="description">
                    <span>Food assistance to  victims</span>

                </div>

                <div className="quantity">
                    <button className="plus-btn" onClick={() => saveToLocalStorage3(word)} type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value={p1count3} />
                    <button className="minus-btn" onClick={() => saveToLocalStorageminus3(word)} type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                    </button>
                </div>

                <div className="total-price">{p1count3*150}$</div>
            </div>

            <div className="item">
                <div className="buttons">
                    <span className=""><i className="fa-solid fa-shield  text-danger"></i></span>

                </div>

                <div className="image">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Sheikh_Zayed_Mosque_view.jpg/150px-Sheikh_Zayed_Mosque_view.jpg" className='cartimg1' alt="" />
                </div>

                <div className="description">
                    <span>Mosque construction</span>

                </div>

                <div className="quantity">
                    <button className="plus-btn" onClick={() => saveToLocalStorage4(word)} type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" value={p1count4} />
                    <button className="minus-btn" onClick={() => saveToLocalStorageminus4(word)} type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                    </button>
                </div>

                <div className="total-price">{p1count4*500}$</div>
            </div>
            <div className='row w-100 pt-5 pb-5 '>
             <div className='col-6 d-flex justify-content-center '>
            
              <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={totalcost *100}
        name="Payment Info"
      
      />
             </div>
             <div className='col-6 d-flex justify-content-center'>
              <span to="/" > Total Cost : {totalcost} $</span>
             </div>
            </div>
        </div>
    )
}
