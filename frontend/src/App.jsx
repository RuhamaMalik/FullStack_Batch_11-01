import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useAuthContext } from "./context/AuthContext"

const App = () => {
  const { loading} = useAuthContext();
  if(loading){
     return (
    <>
     <h1> Loading... </h1>
    </>
  )
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App

