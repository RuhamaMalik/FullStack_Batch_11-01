

const Featured = () => {
    // featured 
    const features = [
        {
            title: "Technologies",
            color: "bg-blue-200",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                    <path fill="none" stroke="#0e0d0d" strokeWidth="1.5" d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4z" />
                </svg>
            )
        },
        {
            title: "Design",
            color: "bg-pink-200",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                    <path fill="none" stroke="#0e0d0d" strokeWidth="1.5" d="M3 6l3 3-3 3 3 3-3 3h18l-3-3 3-3-3-3 3-3z" />
                </svg>
            )
        },
        {
            title: "Development",
            color: "bg-green-200",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                    <path fill="none" stroke="#0e0d0d" strokeWidth="1.5" d="M2 3h20v18H2zM7 14h10M7 10h10" />
                </svg>
            )
        },
        {
            title: "Security",
            color: "bg-yellow-200",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                    <path fill="none" stroke="#0e0d0d" strokeWidth="1.5" d="M12 2l8 4v6c0 5.5-3.8 10.2-8 10.9C7.8 22.2 4 17.5 4 12V6z" />
                </svg>
            )
        },
        {
            title: "Performance",
            color: "bg-purple-200",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                    <path fill="none" stroke="#0e0d0d" strokeWidth="1.5" d="M12 2v20m8-10H4" />
                </svg>
            )
        }
    ];

    return (
        <>
            <div className="  mt-5  flex flex-wrap items-center justify-center gap-5 mx-auto p-1">
                <div className="flex flex-wrap gap-6 p-6 justify-center">
                    {features.map(({ title, icon, color }, idx) => (
                        <div key={idx} className="w-[235px] bg-gray-100 rounded-xl shadow-lg overflow-hidden pt-10   text-center">
                            <div className="flex flex-col items-center pb-6">{icon}</div>
                            <hr className={`${color} border-0 h-2`} />
                            <div className="flex flex-col items-center pb-5 bg-gray-200 hover:bg-white ">
                                <p className="hover:text-red-500 font-bold mt-5">{title}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Featured