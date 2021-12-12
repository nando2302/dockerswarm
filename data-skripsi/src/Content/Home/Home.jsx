import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "../../Components/Banner";
export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Banner />
      {/* bagian Tracking dan Shipping fee */}
      <div className="container" style={{ marginTop: "-150px" }}>
        <div className="mt-5">
          <div className="row g-3">
            <div className="col-md-6 ">
              <div className="card shadow">
                <div className="card-header bg-orange">
                  <h5 className="text-white text-center fw-bold">Tracking</h5>
                </div>
                <div className="card-body">
                  <div className="row g-5">
                    <div className="col-md-6 ">
                      <input type="input" className="form-control" placeholder="No resi" />
                    </div>
                    <div className="col-md-3 d-grid">
                      <button className="btn btn-orange text-white">Check</button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="card shadow">
                <div className="card-header bg-orange">
                  <h5 className="text-white text-center fw-bold">Shipping Fee</h5>
                </div>
                <div className="card-body">
                  <form action="" className="">
                    <div className="row g-5">
                      <div className="col-md-6">
                        <input type="input" placeholder="Kota Asal" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <input type="input" placeholder="Kota Tujuan" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <input type="number" placeholder="kg" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <select className="form-select">
                          <option>--- Pilih Layanan ---</option>
                          <option>Udara</option>
                          <option>Darat</option>
                          <option>Laut</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select className="form-select">
                          <option>--- Pilih Service ---</option>
                          <option>Express</option>
                          <option>Ekonomies</option>
                          <option>Reguler</option>
                        </select>
                      </div>
                      <div className="col-md-6 d-grid">
                        <button className="btn btn-orange text-white">Check Harga</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange" style={{ height: "500px", marginTop: "100px" }}>
        <h3 className="text-center text-white fw-bold p-5">Service Yang Ada</h3>
        <div className="container">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .10"
            transitionDuration={4000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            renderButtonGroupOutside={true}
            arrows={true}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
          >
            <div className="card me-3" style={{ height: "300px" }}>
              <div className="card-body ">
                <div className="bg-orange-pudar rounded-pill text-center my-3 mx-auto" style={{ width: "80px", height: "80px" }}>
                  <span className="material-icons md-48 " style={{ fontSize: "50px", lineHeight: "80px", color: "#FC6D00" }}>
                    flight_takeoff
                  </span>
                </div>
                <div>
                  <h4 className="text-center fw-bold"> Udara</h4>
                  <p className="text-center"> Paket anda Terbang bersama Tangkas</p>
                </div>
              </div>
            </div>
            <div className="card me-3" style={{ height: "300px" }}>
              <div className="card-body ">
                <div className="bg-orange-pudar rounded-pill text-center my-3 mx-auto" style={{ width: "80px", height: "80px" }}>
                  <span className="material-icons md-48 " style={{ fontSize: "50px", lineHeight: "80px", color: "#FC6D00" }}>
                    directions_boat_filled
                  </span>
                </div>
                <div>
                  <h4 className="text-center fw-bold"> Laut</h4>
                  <p className="text-center"> Percayakan Cargomu Berlayar Bersama Tangkas</p>
                </div>
              </div>
            </div>
            <div className="card me-3" style={{ height: "300px" }}>
              <div className="card-body ">
                <div className="bg-orange-pudar rounded-pill text-center my-3 mx-auto" style={{ width: "80px", height: "80px" }}>
                  <span className="material-icons md-48 " style={{ fontSize: "50px", lineHeight: "80px", color: "#FC6D00" }}>
                    local_shipping
                  </span>
                </div>
                <div>
                  <h4 className="text-center fw-bold"> Darat</h4>
                  <p className="text-center"> Paket anda terantarkan sampai kepelosok plosok daerah</p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="container-fluid p-5" style={{ marginTop: "100px" }}>
        <h2 className="text-center text-orange fw-bold">Temui Kami Disini</h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sid!4v1636122102976!5m2!1sen!2sid!6m8!1m7!1sZ4hTc19hlqg8ro1bYKAemg!2m2!1d0.906782825492696!2d104.4683234547794!3f233.24339227465!4f4.747486509497065!5f0.7820865974627469"
          style={{ marginTop: "100px", width: "100%", height: "400px" }}
        ></iframe>
      </div>
    </>
  );
}
