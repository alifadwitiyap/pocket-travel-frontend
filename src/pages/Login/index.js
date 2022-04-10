import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import bgLogin from "../../assets/login_background.jpg";
import getBackendUrl from "../../utils/getBackendUrl";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const dataFormUser = {
      email: email,
      password: password,
    };

    const dataUser = await axios
      .post(`${getBackendUrl()}/login`, dataFormUser)
      .then((response) => response.data)
      .catch((error) => console.error(error.message));

    if (dataUser) {
      const { user_id, name, email } = dataUser.user;
      const { token } = dataUser;
      const payload = {
        user_id: user_id,
        name: name,
        email: email,
        token: token,
      };

      dispatch(
        login({
          user_id,
          name,
          email,
          token,
        })
      );

      localStorage.setItem("user", JSON.stringify(payload));
    }

    navigate("/");
  };

  return (
    <div className="grid grid-cols-2">
      <div className="mx-36 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-5">Login</h1>
        <form onSubmit={handleSubmitForm}>
          <p className="text-sm mb-12">
            Selamat datang di Pocket Travel, Masukkan username dan password Anda
            pada kolom di bawah untuk login.
          </p>
          <input
            id="email-address"
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="appearance-none rounded-2xl relative block w-full px-3 py-2 mb-5 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="appearance-none rounded-2xl relative block w-full px-3 py-2 mb-5 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full items-center px-4 py-2 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
      <img className="h-screen" src={bgLogin} alt="" />
    </div>
  );
}
