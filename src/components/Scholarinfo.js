import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/scholarinfo.css"



function Islamicscholars() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
var l1link =window.location.href;

  var pathname = window.location.pathname;
  pathname = pathname.substring(18);
  document.body.scrollTop = document.documentElement.scrollTop = 0;



  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://limitless-lowlands-32082.herokuapp.com/schedule"
      );
      setPosts(response.data);
      setLoading(false);

    };

  

    loadPosts();
  }, []);

  return (
    <div className=" container ">






      <div className=" ">
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          posts
            .filter((value) => {
              if (pathname === value._id) {
                return value;
              }
            })
            .map((item) => <h5 key={item._id}>{



              <div className="row m-5">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6  d-flex justify-content-center">
                  <img src={(item.scholarImage == null) ? "https://images.vexels.com/media/users/3/166422/isolated/preview/59f00cba08103cee750571a61d9f9ffd-male-graduate-avatar.png" : item.scholarImage} alt="#dd"
                    onError={({ currentTarget }) => {
                      currentTarget.onError = null;
                      currentTarget.src = "https://c.tenor.com/haruxnBh-T4AAAAC/mouse-mini.gif";
                    }}
                    className=" infoclassp1"
                  />
                </div >

                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6  mt-5 d-flex align-items-center ">
                  <span className="infocc ">
                    Name: {item.scholarName}<br />
                    Email: {item.scholarEmail}<br />
                    Phone: {item.phone}<br />
                    City: {item.city}<br />
                    Upazila: {item.upazila}<br />
                    PostCode: {item.postCode}<br /><br /><br /><br />
                    <Link to="take_schedule" className="reqschedule ">
                      <span className="ps-2 pe-2"> Request Schedule</span>
                    </Link>
                  </span>

                </div>



              </div>




            }</h5>)
        )}
      </div>


    </div>
  );
}

export default Islamicscholars;
