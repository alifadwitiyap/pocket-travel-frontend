import React from "react";
import bgLogin from "../../assets/login_background.jpg";

export default function Login() {
  return (
    <div className="grid grid-cols-2">
      <div className="mx-36 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-5">Login</h1>
        <form action="">
          <p className="text-sm mb-12">
            Selamat datang di Pocket Travel, Masukkan username dan password Anda
            pada kolom di bawah untuk login.
          </p>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            className="appearance-none rounded-2xl relative block w-full px-3 py-2 mb-5 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
          <input
            id="password"
            name="password"
            type="password"
            required
            className="appearance-none rounded-2xl relative block w-full px-3 py-2 mb-5 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />

          <button
            type="button"
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
