import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/information.css"
import DatePicker from "react-date-picker";

function Information() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
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
      <div className="row mt-5 mb-5 mainscholar pt-2 pb-2 ">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center ">
          <h3 className="islamicscholars text-light"> Islamic Scholars</h3>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex justify-content-center ">
          <input
            style={{ width: "80%", height: "100%" }}
            type="text"
            placeholder="Enter date : dd-mm-yy"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>


      </div>

      <div className="cccontainer text-center ">
        {loading ? (
          <h4>Loading ...</h4>
        ) : (
          posts
            .filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.bookingDate.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => <h5 key={item._id}>{



              <div className="col-3 col-md-3 col-sm-4  w-100">
                <div className="m-5">
                  <Link to={item._id}> <img src={(item.scholarImage == null) ? "https://images.vexels.com/media/users/3/166422/isolated/preview/59f00cba08103cee750571a61d9f9ffd-male-graduate-avatar.png" : item.scholarImage} alt="#dd"
                    onError={({ currentTarget }) => {
                      currentTarget.onError = null;
                      currentTarget.src = "https://c.tenor.com/haruxnBh-T4AAAAC/mouse-mini.gif";
                    }}
                    className="cartpic11 "
                  /></Link>
                </div>

<div className="w-100">
<span className=" infoc">Name: {item.scholarName}</span>

</div>
<div className="w-100">
<span className=" infoc">City:{item.city}</span>
</div>

<div className="w-100">
<span className=" infoc">Booking Date:{item.bookingDate}</span>
</div>
                
              </div>




            }</h5>)
        )}
      </div>


    </div>
  );
}

export default Information;
