import "./Banner.css";
export default function Banner() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel " style={{marginTop:'-65px'}}>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={process.env.PUBLIC_URL + "/gambar/tetanik.jpg"} className="bannercok " alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
        <img src={process.env.PUBLIC_URL + "/gambar/tetanik.jpg"} className="bannercok " alt="..." />
        </div>
        <div className="carousel-item" date-bs-interval="5000">
        <img src={process.env.PUBLIC_URL + "/gambar/tetanik.jpg"} className="bannercok " alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
