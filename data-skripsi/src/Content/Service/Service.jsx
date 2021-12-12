export default function Service() {
  return (
    <>
     <div className="p-4 p-md-5 mb-4 text-white bg-dark jumbotron-header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/gambar/service.jpg'}` }}>
        <div className="col-md-12 px-0">
          <h1 className="fw-bold text-center text-jumbotron-header ">Produk & Layanan</h1>
        </div>
      </div>

      <div className="container mt-5">
        {/* Ini bagian udara */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card card-service" style={{ minHeight: "700px" }}>
              <div className="card-body text-center">
                {/* <img src="" alt="" /> */}
                <h3>Logo</h3>
                <h5>Tangkas Udara Express</h5>
                <p>Layanan Tangkas Paling Ngebut </p>
                <span>
                  <i className="bi bi-cart3" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Paket Unggulan Yang Gak Suka Lama-Lama</p>
                <span>
                  <i className="bi bi-clock-history" style={{ fontSize: "40px" }}></i>
                </span>
                <p> 1-2 Hari Pasti Sampai</p>
                <span>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Seluruh indonesia</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-service" style={{ minHeight: "700px" }}>
              <div className="card-body text-center">
                {/* <img src="" alt="" /> */}
                <h3>Logo</h3>
                <h5>Tangkas Udara Reguler</h5>
                <p>Layanan aman & cepat tetapi tetap santuy di kantong </p>
                <span>
                  <i className="bi bi-cart3" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Harga aman dan santuy banget</p>
                <span>
                  <i className="bi bi-clock-history" style={{ fontSize: "40px" }}></i>
                </span>
                <p> 2-3 Hari Pasti sampai tujuan</p>
                <span>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Seluruh indonesia</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-service" style={{ minHeight: "700px" }}>
              <div className="card-body text-center">
                {/* <img src="" alt="" /> */}
                <h3>Logo</h3>
                <h5>Tangkas Udara Ekonomies</h5>
                <p>Layanan Murah tapi tidak bikin kantong kering</p>
                <span>
                  <i className="bi bi-cart3" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Harga Santuy tanpa harus mikirin barang</p>
                <span>
                  <i className="bi bi-clock-history" style={{ fontSize: "40px" }}></i>
                </span>
                <p> 3-4 Hari sampai ditujuan anda</p>
                <span>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Seluruh indonesia</p>
              </div>
            </div>
          </div>
        </div>
        {/* Akhir Bagian udara */}
          {/* Ini bagian Laut */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card card-service " style={{ minHeight: "700px" }}>
              <div className="card-body text-center">
                <h3>Logo</h3>
                <h5>Tangkas Laut Reguler</h5>
                <p>Layanan Kepulau-pulau tanpa ribet dan gak mahal</p>
                <span>
                  <i className="bi bi-cart3" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Paket minimal 10kg, rekomendasi menggunakan asurasi</p>
                <span>
                  <i className="bi bi-clock-history" style={{ fontSize: "40px" }}></i>
                </span>
                <p> 12-14 Hari</p>
                <span>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Seluruh indonesia antar pulau-pulau</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-service" style={{ minHeight: "700px" }}>
              <div className="card-body text-center">
                <h3>Logo</h3>
                <h5>Tangkas Laut Ekonomies</h5>
                <p>Layanan Kepulau-pulau yang Murah Meriah</p>
                <span>
                  <i className="bi bi-cart3" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Paket ini mininal 10 kg belum termasuk asuransi, direkomendasi menggunakan asurasi </p>
                <span>
                  <i className="bi bi-clock-history" style={{ fontSize: "40px" }}></i>
                </span>
                <p> 13-15 Hari</p>
                <span>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Seluruh indonesia antar pulau-pulau</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-service" style={{ minHeight: "700px" }}>
              <div className="card-body text-center">
                <h3>Logo</h3>
                <h5>Tangkas Laut Barang Pindahan</h5>
                <p>Layanan barang Pindahan Ke pulau-pulau</p>
                <span>
                  <i className="bi bi-cart3" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Minimal Paket 200kg </p>
                <span>
                  <i className="bi bi-clock-history" style={{ fontSize: "40px" }}></i>
                </span>
                <p> 14-15 Hari</p>
                <span>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Seluruh pulau Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        {/* akhir bagian laut */}

        {/* ini darat */}
        <div className="row mt-5 mb-5">
          <div className="col-md-4">
            <div className="card card-service" style={{ minHeight: "700px" }}>
              <div className="card-body text-center">
                <h3>Logo</h3>
                <h5>Tangkas Darat Reguler</h5>
                <p>Layanan Paket antar Keplosok plosok daerah</p>
                <span>
                  <i className="bi bi-cart3" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Paket ini mininal 10 Kg ,Diskon 5% jika 200 Kg </p>
                <span>
                  <i className="bi bi-clock-history" style={{ fontSize: "40px" }}></i>
                </span>
                <p> 3-4 Hari</p>
                <span>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Seluruh Kota Indonesia</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-service" style={{ minHeight: "700px" }}>
              <div className="card-body text-center">
                <h3>Logo</h3>
                <h5>Tangkas Darat Ekonomies</h5>
                <p>Layanan Paket Keplosok-plosok Daerah</p>
                <span>
                  <i className="bi bi-cart3" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Paket ini mininal 10 Kg ,Diskon 5% jika 200 Kg </p>
                <span>
                  <i className="bi bi-clock-history" style={{ fontSize: "40px" }}></i>
                </span>
                <p> 5-6 Hari</p>
                <span>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Seluruh Kota Indonesia</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-service" style={{ minHeight: "700px" }}>
              <div className="card-body text-center">
                <h3>Logo</h3>
                <h5>Tangkas Darat Pindahan Barang</h5>
                <p>Paket Murah Meriah minimal 200kg</p>
                <span>
                  <i className="bi bi-cart3" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Paket tangkas yang gak pakai ribet </p>
                <span>
                  <i className="bi bi-clock-history" style={{ fontSize: "40px" }}></i>
                </span>
                <p> 5-6 Hari</p>
                <span>
                  <i className="bi bi-geo-alt-fill" style={{ fontSize: "40px" }}></i>
                </span>
                <p>Seluruh Kota Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        {/* ini akhir bagian darat */}
      </div>
    </>
  );
}
