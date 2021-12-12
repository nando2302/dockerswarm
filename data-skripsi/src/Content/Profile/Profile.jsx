import { Fragment, useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    document.title = "Tangkas Express - Tentang Kami";
  }, []);

  return (
    <Fragment>
      <div className="p-4 p-md-5 mb-4 text-white bg-dark jumbotron-header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/gambar/company-profile.jpg"}` }}>
        <div className="col-md-12 px-0">
          <h1 className="fw-bold text-center text-jumbotron-header ">Tentang Kami</h1>
        </div>
      </div>

      <section className="section-vision-mission" style={{ marginTop: "150px" }}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 text-center">
              <img src={process.env.PUBLIC_URL + "/gambar/vision-mission.png"} className="image-vison-mission" alt="" />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="fw-bolder text-orange">Visi</h1>
                </div>
                <div className="col-md-12">
                  <p>Menjadi perusahaan jasa pengiriman barang terbaik di Indonesia</p>
                </div>
              </div>

              <div className="row mt-4 row-mission">
                <div className="col-md-12">
                  <h1 className="fw-bolder text-orange">Misi</h1>
                </div>
                <div className="col-md-12">
                  <p>1. Memberikan layanan yang baik dan solusi yang bernilai positif kepada konsumen</p>
                  <p>2. Menciptakan suasana yang baik bagi karyawan sebagai kebanggaan dalam bekerja</p>
                  <p>3. Mengurangi pengangguran dan mensejahterakan masyarakat sekitar</p>
                  <p>4. Membangun inovasi Operasional Dan SDM yang kompeten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-our-value">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="fw-bolder text-orange">Our Value</h1>
              {/* <p>Kami memiliki nilai-nilai Acuan dalam Bekerja</p> */}
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, velit. Laborum laudantium beatae repellat nisi eos voluptates cum sunt at officiis, tenetur nihil obcaecati ea quis porro ad. Enim, asperiores?</p> */}
            </div>
            <div className="col-md-6">
              <div className="row mb-3">
                <div className="col-lg-1">
                  <i className="bi bi-vinyl-fill" style={{ fontSize: "30px" }}></i>
                </div>
                <div className="col-lg-11 col-point-our-value">
                  <h5 className="fw-bold">T = Tepat Waktu</h5>
                  <p>Tempat Waktu Membuat diri sendiri displin dan menjadi kita orang yang dapat dipercaya. selain itu menjadikan kita berdedikasi terhadap apapun yang dikerjakan</p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-1">
                  <i className="bi bi-vinyl-fill" style={{ fontSize: "30px" }}></i>
                </div>
                <div className="col-lg-11">
                  <h5 className="fw-bold">A = Aman</h5>
                  <p>Selalu menjaga apa yang anda percayakan kepada kami.</p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-1">
                  <i className="bi bi-vinyl-fill" style={{ fontSize: "30px" }}></i>
                </div>
                <div className="col-lg-11">
                  <h5 className="fw-bold">N = Not disappointed</h5>
                  <p>Memberikan Pelayanan terbaik kami untuk memuaskan kebutuhan anda</p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-1">
                  <i className="bi bi-vinyl-fill" style={{ fontSize: "30px" }}></i>
                </div>
                <div className="col-lg-11">
                  <h5 className="fw-bold">G = Gesit</h5>
                  <p>Selalu Cepat dalam pingiriman,pengantaran,penjemputan dan keluhan anda</p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-1">
                  <i className="bi bi-vinyl-fill" style={{ fontSize: "30px" }}></i>
                </div>
                <div className="col-lg-11">
                  <h5 className="fw-bold">K = Kreatif & Inovativ</h5>
                  <p>Selalu bekreasi dalam menyelesaikan masalah dan hal-hal baru dalam berkarya</p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-1">
                  <i className="bi bi-vinyl-fill" style={{ fontSize: "30px" }}></i>
                </div>
                <div className="col-lg-11">
                  <h5 className="fw-bold">A = Amanah</h5>
                  <p>Dapat dipercaya dalam menangani barang anda sampai tujuan</p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-1">
                  <i className="bi bi-vinyl-fill" style={{ fontSize: "30px" }}></i>
                </div>
                <div className="col-lg-11">
                  <h5 className="fw-bold">S = Sportif</h5>
                  <p>Tidak ada kecurangan dalam timbangan ataupun pengiriman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
