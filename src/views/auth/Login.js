import axios from "axios";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import Cerita from "../../components/Cerita";
import { getAuth } from "../../store/auth";
import Main from "../Main";

function Login(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const setAuth = useSetRecoilState(getAuth);

  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("auth/login", values);
      localStorage.setItem("token", response.data.token);
      if (response.data.status === 200) {
        setAuth({
          check: true,
        });
        window.location = "https://agrosindonesia.vercel.app/";
      }
      setValues({
        password: "",
      });
      setError("");
    } catch (e) {
      setError(e.response.data.errors);
    }
  };

  return (
    <Main>
      <div className="mt-14">
        <div className="text-4xl font-bold">Masuk Sekarang</div>
        <div className="mt-4 text-lg font-medium">
          Masuk dan nikmati fitur kami
        </div>
        <div className="mt-6">
          <form autoComplete="off" onSubmit={submitHandler}>
            <div className="flex md:flex-row flex-col flex-wrap -mx-4">
              <div className="md:w-1/2 w-full px-4 py-2">
                <label htmlFor="email" className="text-sm font-semibold ">
                  Email
                </label>
                <input
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  name="email"
                  id="email"
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
                  name="password"
                  id="password"
                  type="password"
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

export default Login;
