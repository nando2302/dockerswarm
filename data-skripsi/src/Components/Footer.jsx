// import 'bootstrap-icons/icons'

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-blue-dark text-white">
      <hr />
      <div className="container ">
        <footer className="py-5">
          <div className="row">
            <div className="col-md-3 text-white mb-5">
              <h5 className="">Informasi fitur</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                  <Link to="/contact" className="nav-link p-0 text-white-50">
                    Kontak Kami
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/privasipolicy" className="nav-link p-0 text-white-50">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/forbiddenitem" className="nav-link p-0 text-white-50">
                    Barang yang dilarang
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 text-white mb-5">
              <h5>Produk & Layanan</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2">
                  <Link to="/service" className="nav-link p-0 text-white-50">
                    Udara Express
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/service" className="nav-link p-0 text-white-50">
                    Udara Ekonomies
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/service" className="nav-link p-0 text-white-50">
                    Udara Regular
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/service" className="nav-link p-0 text-white-50">
                    Laut Ekonomies
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/service" className="nav-link p-0 text-white-50">
                    Laut Regular
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/service" className="nav-link p-0 text-white-50">
                    Darat Ekonomies
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/service" className="nav-link p-0 text-white-50">
                    Darat Reguler
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 text-white mb-5">
              <h5>Informasi Perusahaan</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item">
                  <a className="nav-link p-0 text-white-50">
                    <div className="row">
                      <div className="col-1">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <div className="col-11">
                        <p>Tanjungpinang Kepulauan Riau Kelurahan Bukir Bestari Kecamatan Seijang No 123</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0 text-white-50">
                    <div className="row">
                      <div className="col-1">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <div className="col-11">Tangkas@gmail.com</div>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0 text-white-50">
                    <div className="row">
                      <div className="col-1">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <div className="col-11">+628 2390 8990 21</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 text-end">
              <img src={process.env.PUBLIC_URL + "/gambar/logo.png"} alt="" style={{ width: "150px" }} />

              <h3 className="fw-bold text-orange mt-3">Tangkas Express</h3>

              <div className="mt-5 mb-3" style={{ fontSize: "20px" }}>
                <span className="">
                  <i className="bi bi-whatsapp px-2 "></i>
                </span>
                <span>
                  <i className="bi bi-instagram px-2"></i>
                </span>
                <span>
                  <i className="bi bi-twitter px-2"></i>
                </span>
                <span>
                  <i className="bi bi-facebook px-2"></i>
                </span>
                <span>
                  <i className="bi bi-telegram px-2"></i>
                </span>
              </div>
            </div>
          </div>

          <hr />

          <div className="d-flex">
            <p className="text-muted">&copy; {new Date().getFullYear()} Tangkas Express </p>
            <ul className="list-unstyled d-flex"></ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
