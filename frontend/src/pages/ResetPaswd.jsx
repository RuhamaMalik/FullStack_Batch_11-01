import React, { useState } from 'react'

const ResetPaswd = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");


  const handleResetPswd = async () => {
    e.preventDefault();
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <h1>Reset Password</h1>
        <form onSubmit={handleResetPswd} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <div className="relative">
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div>
            <label className="block mb-1 text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                name="password"
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value);   }}
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Confirm your password"
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
            Reset
          </button>
        </form>
      </div></div>
  )
}

export default ResetPaswd