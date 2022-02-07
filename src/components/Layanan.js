import React from "react";
import layanan1 from "../assets/img/layanan1.png";
import layanan2 from "../assets/img/layanan2.png";
import layanan3 from "../assets/img/layanan3.png";

function Layanan(props) {
  return (
    <>
      <div className="mt-6 text-2xl font-bold">Layanan AGROS Indonesia</div>
      <div className="mt-6 flex sm:flex-row flex-col items-center sm:space-x-4 sm:space-y-0 space-y-5">
        <div className="h-80 sm:w-2/6 w-full bg-white rounded-xl overflow-hidden transition duration-150 hover:shadow-lg">
          <div className="w-full object-center">
            <img src={layanan1} alt="" className="object-cover w-full" />
          </div>
          <div className="px-4">
            <div className="text-lg font-bold mt-4">AGROS Shipper</div>
            <div className="mt-3 text-sm w-11/12 ">
              Agros adalah sistem terpadu satu pintu—one stop service yang
              berfokus pada pelayanan jasa logistik muatan berat. Agros
              menawarkan mitra terlatih, efisiensi dan transparansi sistem
              transportasi.
            </div>
          </div>
        </div>
        <div className="h-80 sm:w-2/6 w-full bg-white rounded-xl overflow-hidden transition duration-150 hover:shadow-lg">
          <div className="w-full object-center">
            <img src={layanan2} alt="" className="object-cover w-full" />
          </div>
          <div className="px-4">
            <div className="text-lg font-bold mt-4">AGROS Transporter</div>
            <div className="mt-3 text-sm w-11/12">
              Tidak ada yang tidak mungkin. Kini, Perusahaan bisa dengan cepat
              mendapatkan keuntungan tanpa harus melakukan hal berat.
            </div>
          </div>
        </div>
        <div className="h-80 sm:w-2/6 w-full bg-white rounded-xl overflow-hidden transition duration-150 hover:shadow-lg">
          <div className="w-full object-center">
            <img src={layanan3} alt="" className="object-cover w-full" />
          </div>
          <div className="px-4">
            <div className="text-lg font-bold mt-4">AGROS Driver</div>
            <div className="mt-3 text-sm w-11/12">
              AGROS menawarkan keleluasaan untuk memilih proyek sehingga
              peningkatan pendapatan bukan lagi jadi impian.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layanan;
