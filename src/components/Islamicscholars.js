import "../css/islamicscholars.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Islamicscholars(props) {
    var pathname = window.location.pathname;
    pathname = pathname.substring(1);

    if (pathname === "home") {
        document.title = "TSHOP - HOME";
    }
    else if (pathname === "all_product") {
        document.title = "TSHOP - PRODUCTS";
    }
    else if (pathname === "new-arrivals") {
        document.title = "TSHOP - NEW ARRIVALS";
    }
    else if (pathname === "trending") {
        document.title = "TSHOP - TRENDING";
    }
    else if (pathname === "products/cloths") {
        document.title = "TSHOP - CLOTHS";
    }
    else if (pathname === "products/electronics") {
        document.title = "TSHOP - ELECTRONICS";
    }
    else if (pathname === "products/furniture") {
        document.title = "TSHOP - FURNITURE";
    }
    else if (pathname === "products/shoes") {
        document.title = "TSHOP - SHOES";
    }



    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);


    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://limitless-lowlands-32082.herokuapp.com/schedule",

        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);
    return (
        <div className="container product-cart">
            <div   ><span className="titleis"> Islamic Scholar</span></div>
           
            <div className="products-container">
                {loading && (
                    <div>

                        <img src="https://i.gifer.com/YCZH.gif" alt="Loading" onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "https://i.stack.imgur.com/kOnzy.gif";
                        }} />
                    </div>
                )}

                {data.map((product) => (
                    <div key={product.id} className="card d-flex  justify-content-center">
                        <div className="cart-image d-flex  justify-content-center">


                        <a href="url"> <img src={(product.scholarImage==null)? "https://images.vexels.com/media/users/3/166422/isolated/preview/59f00cba08103cee750571a61d9f9ffd-male-graduate-avatar.png":product.scholarImage} alt="#dd"
                onError={({ currentTarget }) => {
                  currentTarget.onError = null; 
                  currentTarget.src="https://c.tenor.com/haruxnBh-T4AAAAC/mouse-mini.gif";
                }}
               /></a>
                       
                        </div>

                        <div className="card-description">

                          
                            <a href="url" className="info"><span className=" mt-2">Name : {product.scholarName}</span></a>

                            
                            <a href="url" className="info"><span className="info mt-2">City : {product.city}</span></a>
                            

                          
                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}



