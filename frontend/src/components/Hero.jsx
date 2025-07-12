
const Hero = () => {

    return (
        <>
            <div className="max-w-screen-xl bg-white flex flex-wrap items-center justify-center gap-5 mx-auto p-1">

                <div className="lg:w-[73%] sm:w-full bg-gray-100 p-3 lg:h-[530px] ">
                    <div className="">
                        <video
                            className="w-full h-full object-cover pointer-events-none" autoPlay muted loop playsInline >
                            <source src="/videoplayback.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className="lg:w-[20%] sm:w-full  flex flex-wrap gap-5 justify-center items-center p-2">

                    <div className="hidden lg:flex md:h-[250px] md:w-[350px]  w-[200px] h-[200px]  overflow-hidden bg-gray-100 sm:mb-3 lg:mb-3 border lg:p-0 sm:p-1">
                        <div className="flex flex-col justify-center items-center h-full">
                            <img src="https://img.pikbest.com/origin/06/06/76/332pIkbEsTRat.jpg!w700wp" alt="Sale" className="img-fluid" />
                        </div>
                    </div>

                    <div className="hidden lg:flex md:h-[245px] md:w-[350px]  w-[200px] h-[200px]  overflow-hidden bg-gray-100 sm:mb-3 lg:mb-3 border lg:p-0 sm:p-1">
                        <div className="flex flex-col justify-center items-center h-full">
                            <img src="https://i.pinimg.com/originals/72/03/a7/7203a7f0a594c54a82ef2a0c2b3c1cd3.gif" alt="Sale" className="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Hero