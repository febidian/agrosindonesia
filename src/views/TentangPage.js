import React from "react";
import Main from "./Main";
import arah from "../assets/img/arah.png";
import Layanan from "../components/Layanan";

function TentangPage(props) {
  return (
    <Main>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[24rem] h-[23.0625rem]">
          <img src={arah} alt="" className="w-full h-full" />
        </div>
        <div className="mt-6 text-center text-base leading-relaxed">
          Terinspirasi dari arah mata angin yang membawa pada satu destinasi,
          Agros akan terus bergerak menciptakan pemerataan ekonomi sehingga bisa
          menjadi penghubung para stakeholders dalam aktivitas muatan berat,
          mulai dari shipper, transporter, driver, mitra pemeliharan, seller dan
          buyer intermoda yang menjangkau seluruh penjuru Nusantara.
        </div>
      </div>

      <div className="mt-[3.75rem]">
        <Layanan />
      </div>
    </Main>
  );
}

export default TentangPage;
