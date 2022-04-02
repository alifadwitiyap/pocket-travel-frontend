import React from "react";
import bgRegister from "../../assets/sign_up_background.jpg";

export default function Register() {
  return (
    <div className="grid grid-cols-2">
      <div className="mx-36 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-5">Sign Up</h1>
        <form action="">
          <p className="text-sm mb-12">
            Selamat datang di Travel Pocket! Isi kolom di bawah dengan lengkap
            untuk sign up
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
            id="username"
            name="username"
            type="text"
            required
            className="appearance-none rounded-2xl relative block w-full px-3 py-2 mb-5 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Username"
          />
          <input
            id="password"
            name="password"
            type="password"
            required
            className="appearance-none rounded-2xl relative block w-full px-3 py-2 mb-5 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            className="appearance-none rounded-2xl relative block w-full px-3 py-2 mb-12 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
          />
          <button
            type="button"
            className="w-full items-center px-4 py-2 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
      <img className="h-screen" src={bgRegister} alt="" />
    </div>
  );
}
