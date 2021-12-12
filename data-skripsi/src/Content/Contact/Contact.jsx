import { useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";

export default function Contact() {

  useEffect(() => {
    document.title = "Tangkas Express - Kontak Kami"
  }, [])

  return (
    <Fragment>
      <div className="p-4 p-md-5 mb-4 text-white bg-dark jumbotron-header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/gambar/contact-us.jpg'}` }}>
        <div className="col-md-12 px-0">
          <h1 className="fw-bold text-center text-jumbotron-header ">Kontak Kami</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center fw-bold text-orange mt-5">
              Kontak
            </h2>
            <div className="mb-5">
              <form>
                <div className="mb-3">
                  <label className="form-label" for="Name">
                    Name:
                  </label>
                  <input type="input" id="Name" className=" form-control" placeholder="Masukkan Nama Anda" />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="Email">
                    Email:
                  </label>
                  <input type="email" id="Email" className="form-control" placeholder="example@email.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="Telp">
                    No Telp:
                  </label>
                  <input type="input" id="Telp" className="form-control" placeholder="08123xxxxxx" />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="Resi">
                    No Resi:
                  </label>
                  <input type="input" id="Resi" className="form-control" placeholder="9034-xxxx-xxx" />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="Pesan">
                    Pesan/Keterangan
                  </label>
                  <textarea class="form-control" id="Pesan" rows="5" type="input" placeholder="Pesan"></textarea>
                </div>
                <div className="mt-4 text-center">
                  <button className="btn btn-orange text-white btn-block rounded-pill shadow-sm fw-bold" style={{ minWidth: '200px' }}>Kirim Pesan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
