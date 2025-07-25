import  { useState } from "react";

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setActiveTab("login")}
            className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${
              activeTab === "login"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-600 hover:text-red-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`px-4 py-2 font-semibold rounded-full transition duration-300 ${
              activeTab === "create"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-600 hover:text-red-600"
            }`}
          >
            Create Account
          </button>
        </div>

        {activeTab === "login" && (
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600 hover:text-red-600"
                >
                  Show
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </form>
        )}

        {activeTab === "create" && (
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
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
