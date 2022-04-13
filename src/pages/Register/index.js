import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgRegister from "../../assets/sign_up_background.jpg";
import getBackendUrl from "../../utils/getBackendUrl";
import { notifyError, notifySuccess } from "../../utils/notify";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post(`${getBackendUrl()}/register`, data)
      .then(() => {
        notifySuccess("Account successfully created.");
        navigate('/login');
      })
      .catch(() => notifyError("Account creation failed."));
  };

  return (
    <div className="bg-white grid grid-cols-2">
      <div className="mx-36 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-5">Sign Up</h1>
        <form onSubmit={handleRegisterForm}>
          <p className="text-sm mb-12">
            Selamat datang di Travel Pocket! Isi kolom di bawah dengan lengkap
            untuk sign up
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
            id="name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            className="appearance-none rounded-2xl relative block w-full px-3 py-2 mb-5 border border-black placeholder-gray-300 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="name"
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
            Sign Up
          </button>
        </form>
        <p className="mt-5">Already have an account? <Link to="/login" className="text-indigo-600 hover:text-indigo-800">Login</Link></p>
      </div>
      <img className="h-screen" src={bgRegister} alt="" />
    </div>
  );
}
