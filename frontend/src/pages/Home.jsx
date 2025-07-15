import Featured from "../components/Featured"
import Hero from "../components/Hero"
import CardSlider from "../components/cardSlider"
import TopProducts from "../components/TopProducts"


const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <CardSlider/>
            <TopProducts/>
        </>
    )
}

export default Home