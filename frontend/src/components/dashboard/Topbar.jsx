import { GiHamburgerMenu } from "react-icons/gi";

function Topbar({ setIsMobileOpen }) {
  return (
    <div className="md:hidden bg-black text-white px-4 py-3 flex justify-between items-center shadow">
      <button onClick={() => setIsMobileOpen(true)}>
        <GiHamburgerMenu className="text-2xl" />
      </button>
      <h2 className="text-lg font-semibold">Admin Panel</h2>
      <div></div> {/* Placeholder for future user icon etc. */}
    </div>
  );
}

export default Topbar;
