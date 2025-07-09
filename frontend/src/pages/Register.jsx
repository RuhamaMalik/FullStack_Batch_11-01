import React from 'react'
import { useForm } from "react-hook-form"
import { AiOutlineTeam } from "react-icons/ai";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm()

    const fields = [
        {
            title: "firstName",
            placeholder: "First Name",
            type: "text",
            icon: <AiOutlineTeam />,
            validation: {
                required: "First Name is required",
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only alphabets allowed",
                }
            },

        },
        {
            title: "flastName",
            placeholder: "Last Name",
            type: "text",
            icon: <IoMdContacts />,
            validation: {
                required: "Last Name is required",
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only alphabets allowed",
                }
            },
        },
        {
            title: "password",
            placeholder: "Password",
            type: "password",
            icon: <RiLockPasswordLine />,
            validation: {
                required: "Password is required",
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only alphabets allowed",
                }
            },

        },
        {
            title: "confirmPassword",
            placeholder: "Confirm Password",
            type: "text",
            icon: <RiLockPasswordFill />,
            validation: {
                required: "Confirm Password is required",
                pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only alphabets allowed",
                }
            },

        },
        {
            title: "contactInfo",
            placeholder: "Contact Info",
            type: "number",
            icon: <MdContactPhone />
        },

    ]
    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Confirm password must be same as "
            })
            return;
        }
    }
    return (
       <div
  className="h-screen w-full bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: "url('https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp')",
  }}
>
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="p-6 shadow-md space-y-5 bg-white/30 backdrop-blur-md w-full max-w-md"
  >
    <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Signup</h3>

    {fields.map((userInput, index) => (
      <div key={index} className="relative shadow-md px-3 py-2 bg-white/60 backdrop-blur-sm">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-lg">
          {userInput.icon}
        </span>

        <input
          type={userInput?.type || "text"}
          placeholder={userInput?.placeholder || "Fill the field"}
          {...register(userInput.title, userInput.validation)}
          className="w-full pl-10 pr-3 py-2 bg-transparent text-gray-800 focus:outline-none focus:ring-0 border-none placeholder:text-gray-500"
          autoComplete="off"
        />

        {errors[userInput.title] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[userInput.title]?.message}
          </p>
        )}
      </div>
    ))}

    <button
      type="submit"
      className="w-full bg-pink-700 hover:bg-pink-900 text-white font-medium py-2 px-4 tracking-wide transition duration-200"
    >
      Submit
    </button>
    <p>Already have an Account? <a href="">Login</a></p>
  </form>
</div>


    )
}
export default Register