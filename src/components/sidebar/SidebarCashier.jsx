import React from "react";
import { useNavigate, redirect as Redirect, Link } from "react-router-dom";
import { MD5 } from "crypto-js";

const Sidebar = ({ activePage }) => {
  const navigate = useNavigate();
  const nama_user = localStorage.getItem("nama_user");
  console.log(activePage);

  const handleLogout = () => {
    localStorage.removeItem("nama_user");
    localStorage.removeItem("email_user");
    navigate("/login");
  };
  const email = localStorage.getItem("email_user");
  const avatar = 'https://gravatar.com/avatar/' + MD5(email).toString() + '?d=mm&s=300';

  return (
    <aside className="main-sidebar sidebar-base sidebar-no-expand" style={{ marginTop: 90 }}>
      {/* Sidebar */}
      <div className="sidebar sidebar-custom">
        {/* Sidebar Menu */}
        <nav className="mt-0">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" style={{ marginTop: 16 }}>
            {/* MENU */}
            <li className="nav-header">
              <p>MENU</p>
            </li>

            {/* <img
                    className="nav-icon"
                    src="./docs/assets/img/dashboard_FILL0_wght400_GRAD0_opsz48.svg"
                    alt="Dashboard Logo"
                  /> */}
            {/* Dashboard nav AKTIV */}
            <li className="nav-item menu-open">
              <Link to="/cashier" className={`nav-link ${activePage === "dashboard" ? "active" : ""}`}>
                <img className="nav-icon" src="./docs/assets/img/dashboard_FILL0_wght400_GRAD0_opsz48.svg" alt="Dashboard Logo" />
                <p>Order</p>
              </Link>
            </li>
            {/* OTHERS */}
            <li className="nav-header">
              <p>OTHER</p>
            </li>
            {/* Sign Out Nav */}
            <li className="nav-item">
              <a href="#!" className="nav-link" onClick={handleLogout}>
                <img className="nav-icon" src="./docs/assets/img/logout_FILL0_wght400_GRAD0_opsz48.svg" alt="Sign Out Logo" />
                <p>Sign Out</p>
              </a>
            </li>
          </ul>
          <div className="user-panel mt-3 pb-3 pt-3 mb-5 d-flex bg-light mr-4 ml-4" style={{ borderRadius: 10 }}>
            <Link to="/profile" className={`nav-link ${activePage === "profile" ? "active" : ""}`}>
              <div className="image">
                <img src={avatar} className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <a href="#" className="d-block" style={{ color: "black" }}>
                  {nama_user}
                </a>
              </div>
            </Link>
          </div>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
