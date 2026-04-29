import { useState } from "react";
import icons8Menu from "../assets/icons/icons8Menu.svg";
import icons8Close from "../assets/icons/icons8Close.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-4 z-50 text-white">
        <h1 className="text-lg font-bold tracking-widest">ALOHA</h1>

        <button onClick={() => setOpen(!open)}>
          <img
            src={open ? icons8Close : icons8Menu}
            alt="menu"
            className="w-6 h-6 opacity-80 hover:opacity-100 transition duration-200"
          />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-white text-black z-40 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-8 text-2xl font-light">
            <a href="#" onClick={() => setOpen(false)}>Home</a>
            <a href="#" onClick={() => setOpen(false)}>About</a>
            <a href="#" onClick={() => setOpen(false)}>Work</a>
            <a href="#" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </>
  );
}