export default function Tracking() {
  return (
    <>
      <div className="p-4 p-md-5 mb-4 text-white bg-dark jumbotron-header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/gambar/cek-resi.jpg"}` }}>
        <div className="col-md-12 px-0">
          <h1 className="fw-bold text-center text-jumbotron-header ">Temukan Paket Mu</h1>
        </div>
      </div>
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 className="text-center text-orange fw-bold ">Cek Resi</h2>
        <div className="mt-5">
          <form action="">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="input-group mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="No Resi Anda" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{ borderRight: "none" }} />
                  <span className="input-group-text" id="basic-addon2" style={{ background: "none" }}>
                  <i className="bi bi-receipt-cutoff"></i>
                  </span>
                </div>
              </div>
              <div className="col-md-6 offset-md-3 mt-3">
                <button className="btn btn-orange btn-orange btn-lg">Temukan</button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-5" style={{ marginTop: "100px" }}>
          <h3 className="text-center">Bagian Time line</h3>
        </div>
      </div>
    </>
  );
}
