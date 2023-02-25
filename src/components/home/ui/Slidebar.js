import { Link, useNavigate } from "react-router-dom";
import React from "react";
// import './vendors/ti-icons/css/themify-icons.css'
import "../../vendors/feather.css";
import "../../vendors/vendor.bundle.base.css";
import "../../vendors/dataTables.bootstrap4.css";
const Slidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("user");
    return navigate("/login");
  };

  React.useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (!user) {
      return navigate("/login");
    }
  }, []);
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <span
              onClick={logout}
              style={{ cursor: "pointer" }}
              className="nav-link"
            >
              <i className="ri-logout-circle-r-line"></i>&nbsp;
              <span className="menu-title">Logout</span>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Slidebar;
