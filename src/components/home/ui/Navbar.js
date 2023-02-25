/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "../../vendors/navbar.css";
import "../../vendors/feather.css";
import "../../vendors/vendor.bundle.base.css";
import "../../vendors/dataTables.bootstrap4.css";

import $ from "jquery";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigator = useNavigate();

  useEffect(() => {
    var body = $("body");
    $('[data-toggle="offcanvas"]').on("click", function () {
      $(".sidebar-offcanvas").toggleClass("active");
    });
    $('[data-toggle="minimize"]').on("click", function () {
      if (
        body.hasClass("sidebar-toggle-display") ||
        body.hasClass("sidebar-absolute")
      ) {
        body.toggleClass("sidebar-hidden");
      } else {
        body.toggleClass("sidebar-icon-only");
      }
    });
  }, []);

  return (
    <>
      <body>
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a className="navbar-brand brand-logo mr-5" href="/home">
              <img
                src="https://asthetech.com/images/logo/logo.png"
                className="mr-2"
                style={{ height: "50px" }}
                alt="logo"
              />
            </a>
            <a className="navbar-brand brand-logo-mini" href="/">
              <img
                style={{ height: "50px" }}
                src="https://asthetech.com/images/logo/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            {/* <button
              className="navbar-toggler navbar-toggler align-self-center"
              type="button"
              data-toggle="minimize"
            >
              <i className="ri-menu-line"></i>
            </button> */}
            <button
              className="navbar-toggler navbar-toggler-right  align-self-center"
              type="button"
              data-toggle="offcanvas"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>
        </nav>
      </body>
    </>
  );
};

export default Navbar;
