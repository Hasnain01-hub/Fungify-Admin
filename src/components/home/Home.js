/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React from "react";
import Navbar from "./ui/Navbar";
import Slidebar from "./ui/Slidebar";
import { useNavigate } from "react-router-dom";
import "./card.css";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (!user) {
      return navigate("/login");
    }
  }, []);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    loadnft();
  }, []);
  const loadnft = async () => {
    const data = await axios.get(
      "http://localhost:8000/api/admin/get_nft_data"
    );

    console.log(data.data);
    setloading(true);
    return setData(data.data);
  };
  const handleremove = (id) => {
    fetch(`http://localhost:8000/api/admin/delete_nft_data/${id}`, {
      method: "GET",
    }).then((res) => {
      if (res.status == 200) {
        loadnft();
      }
    });
  };
  const updatestatus = async (e, id, status) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:8000/api/admin/approve_nft/${id}`, {
        approved: status,
      })
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          loadnft();
        }
      });
  };
  return (
    <>
      {console.log(data)}
      <Navbar />
      <Slidebar />
      {data.length <= 0 ? (
        <center>
          <h2>No NFT present</h2>
        </center>
      ) : loading == false ? (
        <center>
          <h2>Loading</h2>
        </center>
      ) : (
        <div className="container box">
          {data.map((item) => {
            return (
              <div data-aos="zoom-in" key={item._id} className="product-box">
                <div className="product">
                  <span className="product__price">{item.price}</span>
                  <img
                    className="product__image"
                    src={item.image}
                    alt="Images"
                  />
                  <h1 className="product__title">NFT DATA</h1>

                  <p>
                    <strong>Name: </strong>
                    {item.name}
                  </p>
                  <p style={{ lineBreak: "anywhere" }}>
                    <strong>Wallet Id: </strong>
                    {item.user.walletAddress}
                  </p>
                  <p>
                    <strong>Balance: </strong>
                    {item.user.balance}
                  </p>
                  <p>
                    <strong>Email: </strong> {item.user["email"]}
                  </p>
                  <p>
                    <strong>Approved: </strong>
                    {item.approved}
                  </p>
                  <p>
                    <strong>Total Shares:</strong> {item.shares}
                  </p>

                  {item.approved == true ? (
                    <span
                      onClick={(e) => {
                        updatestatus(e, item._id, false);
                      }}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "red",
                        color: "white",
                      }}
                      className="product__bttn btn1"
                    >
                      Reject
                    </span>
                  ) : (
                    <span
                      onClick={(e) => {
                        updatestatus(e, item._id, true);
                      }}
                      style={{
                        cursor: "pointer",
                        backgroundColor: "green",
                        color: "white",
                      }}
                      className="product__bttn btn1"
                    >
                      Accept
                    </span>
                  )}

                  <button
                    onClick={() => {
                      handleremove(item.id);
                    }}
                    className="mb-3  custumbt"
                    style={{
                      background: "red",
                      color: "white",
                      outline: "none",
                      border: "none",
                      padding: "8px",
                      cursor: "pointer",
                    }}
                  >
                    <i className="ri-delete-bin-2-line"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
