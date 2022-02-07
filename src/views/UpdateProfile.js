import axios from "axios";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Cerita from "../components/Cerita";
import { DataUser } from "../store/auth";
import Main from "./Main";

function UpdateProfile(props) {
  const user = useRecoilValue(DataUser);
  const [values, setValues] = useState({
    nama: user.nama,
    asal_kota: user.asal_kota,
    email: user.email,
    password: "",
  });
  const [error, setError] = useState("");

  const submitHadler = async (e) => {
    e.preventDefault();
    try {
      await axios.put("auth/update/profile", values);
      setValues({
        nama: "",
        asal_kota: "",
        email: "",
        password: "",
      });
    } catch (e) {
      setError(e.response.data.errors);
    }
  };
  return (
    <Main>
      <div className="mt-14">
        <div className="text-4xl font-bold">Perbarui Profil</div>
        <div className="mt-6">
          <form autoComplete="off" onSubmit={submitHadler}>
            <div className="flex md:flex-row flex-col flex-wrap -mx-4">
              <div className="md:w-1/2 w-full px-4 py-2">
                <label htmlFor="nama" className="text-sm font-semibold ">
                  Nama Lengkap Kerabat
                </label>
                <input
                  defaultValue={values.nama}
                  onChange={(e) =>
                    setValues({ ...values, nama: e.target.value })
                  }
                  type="text"
                  className="w-full mt-2 py-3 px-4 rounded-md transition duration-150 focus:ring-green-500 capitalize"
                  placeholder="Masukan Nama Lengkap"
                />
                {error.nama && (
                  <div className="mt-1 text-xs text-red-600">{error.nama}</div>
                )}
              </div>
              <div className="md:w-1/2 w-full px-4 py-2">
                <label htmlFor="asal_kota" className="text-sm font-semibold ">
                  Asal Kota
                </label>
                <input
                  defaultValue={values.asal_kota}
                  onChange={(e) =>
                    setValues({ ...values, asal_kota: e.target.value })
                  }
                  type="text"
                  className="w-full mt-2 py-3 px-4 rounded-md transition duration-150 focus:ring-green-500 capitalize"
                  placeholder="Masukan  Asal Kota"
                />
                {error.asal_kota && (
                  <div className="mt-1 text-xs text-red-600">
                    {error.asal_kota}
                  </div>
                )}
              </div>
              <div className="md:w-1/2 w-full px-4 py-2">
                <label htmlFor="email" className="text-sm font-semibold ">
                  Email
                </label>
                <input
                  defaultValue={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  type="text"
                  className="w-full mt-2 py-3 px-4 rounded-md transition duration-150 focus:ring-green-500 "
                  placeholder="Masukan Email"
                />
                {error.email && (
                  <div className="mt-1 text-xs text-red-600">{error.email}</div>
                )}
              </div>
              <div className="md:w-1/2 w-full px-4 py-2">
                <label htmlFor="password" className="text-sm font-semibold ">
                  Password
                </label>
                <input
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  type="text"
                  className="w-full mt-2 py-3 px-4 rounded-md transition duration-150 focus:ring-green-500 "
                  placeholder="Masukan Password"
                />
                {error.password && (
                  <div className="mt-1 text-xs text-red-600">
                    {error.password}
                  </div>
                )}
              </div>
              <div className="mt-4 px-4 md:w-1/2 w-full">
                <button className="bg-[#459467] transition duration-150 hover:bg-green-700 w-full py-3 rounded-lg text-left pl-[1.0625rem]">
                  <span className="text-white text-base font-bold ">
                    Masuk Sekarang
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-[3.75rem]">
          <Cerita />
        </div>
      </div>
    </Main>
  );
}

export default UpdateProfile;
