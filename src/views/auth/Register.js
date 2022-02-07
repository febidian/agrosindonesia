import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Cerita from "../../components/Cerita";
import Main from "../Main";

function Register(props) {
  const [values, setValues] = useState({
    nama: "",
    asal_kota: "",
    email: "",
    password: "",
    role_id: "",
  });
  const [datarole, setDatarole] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  useEffect(() => {
    const Role = async () => {
      try {
        let response = await axios.get("auth/role");
        setDatarole(response.data.role);
        setError("");
      } catch (error) {
        console.log(error);
      }
    };
    Role();
  }, []);

  const submitHadler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("auth/register", values);
      setValues({
        nama: "",
        asal_kota: "",
        email: "",
        password: "",
        role_id: "",
      });
      history.push("masuk");
    } catch (e) {
      setError(e.response.data.errors);
    }
  };
  return (
    <Main>
      <div className="mt-14">
        <div className="text-4xl font-bold">Daftar Sekarang</div>
        <div className="mt-4 text-lg font-medium">
          Mari bergabung bersama Kerabat AGROS Indonesia lainnya.
        </div>
        <div className="mt-6">
          <form autoComplete="off" onSubmit={submitHadler}>
            <div className="flex md:flex-row flex-col flex-wrap -mx-4">
              <div className="md:w-1/2 w-full px-4 py-2">
                <label htmlFor="nama" className="text-sm font-semibold ">
                  Nama Lengkap Kerabat
                </label>
                <input
                  name="nama"
                  id="nama"
                  value={values.nama}
                  onChange={(e) =>
                    setValues({ ...values, nama: e.target.value })
                  }
                  type="text"
                  className="w-full mt-2 py-3 px-4 rounded-md transition duration-150 focus:ring-green-500 "
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
                  name="asal_kota"
                  id="asal_kota"
                  value={values.asal_kota}
                  onChange={(e) =>
                    setValues({ ...values, asal_kota: e.target.value })
                  }
                  type="text"
                  className="w-full mt-2 py-3 px-4 rounded-md transition duration-150 focus:ring-green-500 "
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
                  name="email"
                  id="email"
                  value={values.email}
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
                  name="password"
                  id="password"
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
              <div className="md:w-1/2 w-full px-4 py-2">
                <label htmlFor="role_id" className="text-sm font-semibold ">
                  Role
                </label>
                <select
                  value={values.role_id}
                  onChange={(e) =>
                    setValues({ ...values, role_id: e.target.value })
                  }
                  name="role_id"
                  id="role_id"
                  className="w-full mt-2 py-3 px-4 rounded-md transition duration-150 focus:ring-green-500 "
                >
                  <option value="">Pilih Role</option>
                  {datarole &&
                    datarole.map((get) => (
                      <option
                        key={get.id}
                        value={get.id}
                        className="capitalize"
                      >
                        {get.name_role}
                      </option>
                    ))}
                </select>
                {error.role_id && (
                  <div className="mt-1 text-xs text-red-600">
                    {error.role_id}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-[#459467] md:w-1/2 w-full py-2 rounded-lg text-left pl-[1.0625rem]">
                <span className="text-white text-base font-bold ">
                  Gabung Sekarang
                </span>
              </button>
            </div>
            <div className="mt-6">
              <span className=" text-sm ">
                Sudah memiliki Akun?{" "}
                <Link className="text-green-600 font-medium" to="ds">
                  Masuk sekarang
                </Link>
              </span>
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

export default Register;
