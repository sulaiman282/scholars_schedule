import React, { useState } from 'react';
import "../css/donation.css";

import {Link } from "react-router-dom";


export default function Donation() {

    const saveToLocalStorage = word => {
       
        var p1count = window.localStorage.getItem("1")
        if (p1count==="NaN" || p1count<1){
            p1count=0;
           
        }
       var p1count=parseInt(p1count);
       
        window.localStorage.setItem("1",p1count+  1)
      
        
    };


    const saveToLocalStorage2 = word => {
       
        var p1count2 = window.localStorage.getItem("2")
        if (p1count2==="NaN" || p1count2<1){
            p1count2=0;
           
        }
       var p1count2=parseInt(p1count2);
       
        window.localStorage.setItem("2",p1count2+  1)
      
        
    };



    const saveToLocalStorage3 = word => {
       
        var p1count3 = window.localStorage.getItem("3")
        if (p1count3==="NaN" || p1count3<1){
            p1count3=0;
           
        }
       var p1count3=parseInt(p1count3);
       
        window.localStorage.setItem("3",p1count3+  1)
      
        
    };


    const saveToLocalStorage4 = word => {
       
        var p1count4 = window.localStorage.getItem("2")
        if (p1count4==="NaN" || p1count4<1){
            p1count4=0;
           
        }
       var p1count4=parseInt(p1count4);
       
        window.localStorage.setItem("4",p1count4+  1)
      
        
    };


    const [word, setWord] = useState(
        window.localStorage.getItem("word") == null
            ? ""
            : window.localStorage.getItem("word")
    );





    return (
        <div className='container mt-5 ' >
            <div className='d-flex justify-content-between'>

            <span className='h4 fw-bold'>Our projects</span>
            
          
         
            </div>
            
            <div className='row mt-5'>

                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card mt-4">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Sheikh_Zayed_Mosque_view.jpg/150px-Sheikh_Zayed_Mosque_view.jpg" alt="Bologna" />
                        <div className="card-body">
                            <h4 className="card-title">Free Education</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Donate: 50 $</h6>
                            <p className="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                            <button type="button" onClick={() => saveToLocalStorage(word)} className='addtocart'>Add to Cart</button>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card mt-4">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Sheikh_Zayed_Mosque_view.jpg/150px-Sheikh_Zayed_Mosque_view.jpg" alt="Bologna" />
                        <div className="card-body">
                            <h4 className="card-title">Distribution of food items,</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Donate: 100 $</h6>
                            <p className="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                            <button type="button" onClick={() => saveToLocalStorage2(word)} className='addtocart'>Add to Cart</button>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card mt-4">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Sheikh_Zayed_Mosque_view.jpg/150px-Sheikh_Zayed_Mosque_view.jpg" alt="Bologna" />
                        <div className="card-body">
                            <h4 className="card-title">Food assistance to  victims,</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Donate: 150$</h6>
                            <p className="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan asdaa because if ths aa</p>
                            <button type="button" 
                            onClick={() => saveToLocalStorage3(word)}
                            className='addtocart'>Add to Cart</button>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                    <div className="card mt-4">
                        <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Sheikh_Zayed_Mosque_view.jpg/150px-Sheikh_Zayed_Mosque_view.jpg" alt="Bologna" />
                        <div className="card-body">
                            <h4 className="card-title">Mosque construction</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Donate: 500 $</h6>
                            <p className="card-text">It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people. </p>
                            <button type="button" className='addtocart'
                            onClick={() => saveToLocalStorage4(word)}>Add to Cart</button>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}
