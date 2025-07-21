import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between md:justify-end">
      <button className="md:hidden text-2xl" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <GiHamburgerMenu />
      </button>
      {/* You can add profile/avatar etc. here */}
    </header>
  );
};

export default Header;
