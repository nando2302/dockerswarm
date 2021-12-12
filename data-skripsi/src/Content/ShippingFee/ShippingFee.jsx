export default function ShippingFee() {
  return (
    <>
      <div className="p-4 p-md-5 mb-4 text-white bg-dark jumbotron-header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/gambar/cek-ongkir.jpg"}` }}>
        <div className="col-md-12 px-0">
          <h1 className="fw-bold text-center text-jumbotron-header ">Cek Ongkirmu</h1>
        </div>
      </div>
      <div className="container" style={{ marginTop: "100px" }}>
        <h2 className="text-orange text-center fw-bold mb-3 ">Cek Ongkir</h2>
        <form action="" className="mt-5 mb-5">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="Asal" className="form-label">
                  Asal Kota
                </label>
                <input type="input" id="Asal" className="form-control" placeholder="Asal kota pakai Select" />
              </div>
              <div className="mb-3">
                <label htmlFor="tujuan" className="form-label">
                  Tujuan Kota
                </label>
                <input type="input" id="tujuan" className="form-control" placeholder="Asal kota Pakai Select" />
              </div>
              <div className="mb-3">
                <label htmlFor="Jasa" className="form-label">
                  Jasa Pengantaran
                </label>
                <select className="form-select" id="Jasa" aria-label="Default select example">
                  <option>--- Pilih Jasa Pengantaran ---</option>
                  <option>Udara</option>
                  <option>Darat</option>
                  <option>Laut</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="service" className="form-label">
                  Service
                </label>
                <select className="form-select" id="service" aria-label="Default select example">
                  <option>--- Pilih Service Dengan Layanan ---</option>
                  <option value="1">Express</option>
                  <option value="2">Regular</option>
                  <option value="3">Ekonomies</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="Berat" className="form-label">
                  Berat Barang
                </label>
                <input type="number" className="form-control" id="Berat" />
              </div>
              <div className="mt-5 text-end">
                <button className="btn btn-orange">Check Harga</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
