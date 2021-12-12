import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css"

export default function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      // alert();
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav className={colorChange ? "navbar colorChange navbar-expand-lg navbar-light sticky-top" : "navbar navbar-expand-lg navbar-light sticky-top"}>
      <div className="container-fluid">
        <Link className="navbar-brand text-orange" to="/">
          <img src={process.env.PUBLIC_URL+"/gambar/logo.png"} alt="" className=" me-2" style={{width:"50px"}}/>
          <span className="fw-bold name-brand" style={{ color: '#666666' }}>Tangkas Express</span>
        </Link>
        <button className="navbar-toggler bg-orange" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-orange">
                Halaman Utama
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-link text-orange">
                Layanan
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tracking" className="nav-link text-orange ">
                Cek Resi
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/shipping-fee" className="nav-link text-orange">
                Cek Harga
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile" className="nav-link text-orange ">
                Profile Perusahaan
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link text-orange">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
