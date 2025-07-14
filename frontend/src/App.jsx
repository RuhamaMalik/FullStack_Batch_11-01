
import Featured from './components/Featured';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
      <Hero />
      <Featured />
    </>
  )
}

export default App

