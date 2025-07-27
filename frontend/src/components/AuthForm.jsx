import { useState } from "react";
import { useNavigate , NavLink} from "react-router-dom";
import axios from "axios";

import { setToken, setUser } from "../utils/auth";
import ForgotPswd from "../pages/ForgotPswd";

const AuthForm = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: ""
  });


  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value,
      }
    )
  }


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {

      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, formData)
      if (data.success) {
        console.log("signup data >>>>>>>>>>>>>>>>> ", data);
        setToken(data.token);
        setUser(data.user)
        /// reset form
        setFormData(
          {
            name: "",
            email: "",
            contact: "",
            password: ""
          }
        );
        navigate("/")

      } else {
        console.log("Signup Fail ", data.message);
      }

    } catch {
      (e) => {
        console.log("Signup Failed : ", e);

      }
    }
  }




  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signin`,
        { email: formData.email, password: formData.password })
      if (data.success) {
        setToken(data.token);
        setUser(data.user)
        /// reset form
        setFormData(
          {
            name: "",
            email: "",
            contact: "",
            password: ""
          }
        );
        navigate("/")

      } else {
        console.log("Login Fail ", data.message);
      }

    } catch {
      (e) => {
        console.log("Login Failed : ", e);

      }
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${activeTab === "login"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-600 hover:text-red-600"
              }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${activeTab === "create"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-600 hover:text-red-600"
              }`}
          >
            Create Account
          </button>
        </div>

        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <div className="relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter your password"
                />
                <button
                  type="submit"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600 hover:text-red-600"
                >
                  Show
                </button>
              </div>
            </div>
         
         <NavLink to="/forgot-password"  >
          <button
              className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
             Forgot Password
            </button>
         </NavLink>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </form>
        )}

        {activeTab === "create" && (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Contact</label>
              <input
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your Number"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
