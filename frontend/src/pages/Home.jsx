import Featured from "../components/Featured"
import Hero from "../components/Hero"
import CardSlider from "../components/cardSlider"
import TopProducts from "../components/TopProducts"
import { Outlet } from 'react-router-dom';



const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <CardSlider/>
            <TopProducts/>
            <Outlet/>
        </>
    )
}

export default Home