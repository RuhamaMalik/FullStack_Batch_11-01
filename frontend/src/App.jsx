// import Login from './pages/Login'
// import Register from './pages/Register'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      {/* <Login />
      <Register /> */}
      <Navbar />
      <Hero />
      <Featured />
      {/* <div className='bg-red-200 mt-5 pt-5 pb-5 text-center font-bold'>App</div> */}
    </>
  )
}

export default App