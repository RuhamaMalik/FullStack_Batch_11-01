import Featured from "../components/Featured"
import Hero from "../components/Hero"
import CardSlider from "../components/cardSlider"
import TopProducts from "../components/TopProducts"
import CouponModal from "../components/CouponModal"
import Modal from "../components/Modal"



const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <CardSlider />
            <TopProducts />
            <CouponModal />      
            <Modal /> 
        </>
    )
}

export default Home