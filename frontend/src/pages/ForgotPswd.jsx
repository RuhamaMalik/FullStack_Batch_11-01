import axios from 'axios'
import React, { useState } from 'react'

const ForgotPswd = () => {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleForgotPswd = async (e) => {
    e.preventDefault();
    try {
     const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forgot-pswd`, { email })
      setEmail("");
      // setMessage("Password reset link has been sent to your gmail account");
      setMessage(data.message);
      
    } catch {
      (e) => {
        console.log("Forgot session Failed : ", e);

      }
    }
  }

  return (

    <div className="flex items-center justify-center h-[400px] bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <form onSubmit={handleForgotPswd} className="space-y-4">
          {message && <p className='text-green-500'>{message}</p>}
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your email"
            />
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

export default ForgotPswd