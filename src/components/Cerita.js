import React from "react";
import arah from "../assets/img/arah.png";

function Cerita(props) {
  return (
    <>
      <div className="text-2xl font-bold">Cerita Kerabat AGROS</div>
      <div className="mt-7 flex md:flex-row flex-col items-center md:justify-center md:space-x-8">
        <div className="md:w-1/3 w-10/12">
          <img src={arah} alt="" />
        </div>
        <div className="md:w-2/3 w-full md:mt-0 mt-5 text-base">
          <div className="lg:w-5/6 w-full leading-relaxed">
            Terinspirasi dari arah mata angin yang membawa pada satu destinasi,
            Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga
            bisa menjadi penghubung para stakeholders dalam aktivitas muatan
            berat, mulai dari shipper, transporter, driver, mitra pemeliharan,
            seller dan buyer intermoda yang menjangkau seluruh penjuru
            Nusantara.
          </div>
        </div>
      </div>
    </>
  );
}

export default Cerita;
