import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Main from "./Main";

import Cerita from "../components/Cerita";
import Layanan from "../components/Layanan";
import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { getAuth, getUserAuth } from "../store/auth";
import { DataUser } from "../store/user";
import axios from "axios";
import LoadMitra from "../components/LoadMitra";
import Delete from "../assets/icons/Delete";

function Home(props) {
  const auth = useRecoilValueLoadable(getUserAuth);
  const setUser = useSetRecoilState(DataUser);
  const [mitra, setMitra] = useState("");
  const [loadMitra, setLoadMitra] = useState(false);
  const setAuht = useSetRecoilState(getAuth);
  const history = useHistory();

  useEffect(() => {
    if (auth.contents && auth.state === "hasValue") {
      const getMitra = async () => {
        try {
          let response = await axios.get("auth/mitra");
          setMitra(response.data);
          setLoadMitra(true);
        } catch (error) {
          // console.log(error);
        }
      };
      getMitra();
    }
  }, [auth.contents, auth.state]);

  useEffect(() => {
    setUser(auth.contents);
  }, [setUser, auth.contents]);

  const [deleteid, setDeleteid] = useState({
    id: "",
  });
  const DeleteHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`auth/me/${deleteid.id}`);
      window.location = "https://agrosindonesia.vercel.app/";
    } catch (e) {
      // console.log(e);
    }
  };

  const LogoutHandler = async () => {
    try {
      await axios.post(`auth/logout`);
      // console.log(response);
      setAuht({ check: false });
      localStorage.removeItem("token");
      history.push("/masuk");
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <Main>
      <div className="w-full bg-agros rounded-xl h-[236px]">
        <div className="px-9 py-7 text-white ">
          <div className="lg:text-[2rem] text-2xl font-bold">
            Selamat datang, Kerabat!
          </div>
          <div className="lg:mt-4 md:mt-2 md:w-3/4 w-full sm:mt-3 mt-4 lg:text-base sm:text-sm text-xs">
            <span className="block">
              Kami hadir dengan membawakan solusi terbaik untuk kebutuhan
              logistik Anda.
            </span>
            <span>
              Melayani dengan sepenuh hati untuk kenyaman Anda dan keamanan
              barang sampai pada tujuan. Silakan melakukan pendaftaran untuk
              dapat menikmati layanan kami.
            </span>
          </div>
          {auth.state === "loading" ? (
            <div></div>
          ) : auth.contents && auth.state === "hasValue" ? (
            <div className="lg:mt-6 md:mt-4 mt-5  flex flex-row items-center space-x-3">
              <div>
                <button
                  onClick={LogoutHandler}
                  className="px-4 py-2 lg:text-base sm:text-sm text-xs rounded-md border-white border"
                >
                  Keluar
                </button>
              </div>
            </div>
          ) : (
            <div className="lg:mt-6 md:mt-4 mt-5  flex flex-row items-center space-x-3">
              <div>
                <Link
                  to="/masuk"
                  className="px-4 py-2 lg:text-base sm:text-sm text-xs rounded-md border-white border"
                >
                  Masuk
                </Link>
              </div>
              <div>
                <Link
                  to="/daftar"
                  className="px-4 py-2 lg:text-base sm:text-sm text-xs rounded-md bg-white text-[#79C375]"
                >
                  Daftar
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-20">
        <div className="text-[2rem] font-bold">
          Mengenal AGROS Indonesia Lebih Dekat
        </div>
        <div className="mt-6 text-base text-justify">
          Agros adalah sistem terpadu satu pintu—one stop service yang berfokus
          pada pelayanan jasa logistik muatan berat. Agros menawarkan mitra
          terlatih, efisiensi dan transparansi sistem transportasi, kemudahan
          akses untuk layanan pemeliharaan hingga fitur transaksi.
        </div>
        <Layanan />
      </div>
      <div className="mt-14">
        <Cerita />
      </div>
      <div className="mt-14">
        <div className="text-[2rem] font-bold">Mitra AGROS</div>
        <div className="text-base mt-6 md:w-11/12 w-full">
          Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan
          keamanan kepada para pelanggan setia AGROS Indonesia. Untuk melihat
          daftar pelanggan kami, silakan melakukan pendaftaran.
        </div>
        {auth.state === "loading" ? (
          <div></div>
        ) : auth.contents && auth.state === "hasValue" ? (
          loadMitra ? (
            <div className="mt-6 flex flex-row flex-wrap -mx-2">
              {mitra.mitra.map((get, index) => (
                <div
                  key={index}
                  className="md:w-1/4 sm:w-2/4 w-full py-3 px-2 relative"
                >
                  {auth.contents.role_id === 1 && (
                    <form onSubmit={DeleteHandler}>
                      <button
                        onClick={(e) =>
                          setDeleteid({
                            ...deleteid,
                            id: get.uuid,
                          })
                        }
                        className="absolute right-0 top-0"
                      >
                        <Delete />
                      </button>
                    </form>
                  )}

                  <div className="bg-white  w-full p-5 rounded-lg  transition duration-150 hover:shadow-lg">
                    <div className="text-lg font-bold capitalize">
                      {get.nama}
                    </div>
                    <button className="capitalize bg-[#63BA73]  py-1 px-2 rounded-lg mt-5 text-sm font-bold text-white pointer-events-none cursor-default">
                      {get.asal_kota}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 flex flex-row flex-wrap -mx-2">
              <LoadMitra />
              <LoadMitra />
              <LoadMitra />
              <LoadMitra />
              <LoadMitra />
              <LoadMitra />
              <LoadMitra />
              <LoadMitra />
            </div>
          )
        ) : (
          <div className="mt-11 flex justify-center">
            <Link
              to="/daftar"
              className="bg-[#459467] transition duration-150 hover:bg-green-700 py-2 px-4 rounded-xl text-white text-base font-bold"
            >
              Gabung Sekarang
            </Link>
          </div>
        )}
      </div>
    </Main>
  );
}

export default Home;
