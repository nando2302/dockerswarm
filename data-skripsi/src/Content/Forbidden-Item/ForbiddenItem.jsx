import { Fragment } from "react";

export default function Forbiddenitem() {
  return (
    <Fragment>
      <div class="p-4 p-md-5 mb-4 text-white bg-dark jumbotron-header" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/gambar/caution.jpg"}` }}>
        <div class="col-md-12 px-0">
          <h1 class="fw-bold text-center text-jumbotron-header ">Tentang Kami</h1>
        </div>
      </div>
      <div className="container mt-5 text-center"style={{marginTop:'150px'}}>
        <h2 className="text-orange">Barang yang di larang</h2>
            <img src={process.env.PUBLIC_URL+"/gambar/dangerItems.jpg"} alt="" className="rounded mt-5 mb-5" style={{width:'380px'}} />
      </div>
    </Fragment>
  );
}
