/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setUserName] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (user) {
      return navigate("/");
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        email === process.env.REACT_APP_USER_NAME &&
        password == process.env.REACT_APP_PASSWORD
      ) {
        window.localStorage.setItem("user", JSON.stringify({ email }));
        toast.success("Login Success");
        return navigate("/");
      } else {
        toast.error("Wrong Credentials");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="profile-authentication-area">
        <div className="d-table1">
          <div className="container">
            <div className="signin-form">
              <h2 style={{ fontWeight: "bold" }}>Login</h2>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type={passwordShown ? "text" : "password"}
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordShown ? (
                    <i
                      style={{
                        position: "absolute",
                        marginTop: "10px",
                        marginLeft: "-20px",
                      }}
                      onClick={togglePasswordVisiblity}
                      className="ri-eye-line"
                    >
                      {" "}
                    </i>
                  ) : (
                    <i
                      style={{
                        position: "absolute",
                        marginTop: "10px",
                        marginLeft: "-20px",
                      }}
                      onClick={togglePasswordVisiblity}
                      className="ri-eye-off-line"
                    ></i>
                  )}
                </div>
                <div className="row align-items-center"></div>
                <button onClick={handleSubmit}>Sign In</button>
                <span className="dont-account">
                  Dont'nt have an account?{" "}
                  <Link to="/register">Sign UP Now!</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
