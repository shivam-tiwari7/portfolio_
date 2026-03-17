import { useState } from "react";
import { motion } from "motion/react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#work" },
  { name: "Contact", href: "#contact" },
];

function Navigation({ onClick }) {
  return (
    <ul className="nav-ul">
      {navItems.map((item, index) => (
        <li key={index} className="nav-li">
          <a
            href={item.href}
            onClick={onClick}
            className="relative nav-link group"
          >
            {item.name}

            {/* Underline animation */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
        </li>
      ))}
      <a
  href="/shivam.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 text-sm rounded-md bg-white text-black hover:opacity-80 transition"
>
  CV
</a>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-xl bg-black/30 border-b border-white/5">
      <div className="mx-auto c-space max-w-7xl">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3">
          
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-semibold tracking-wide text-white transition hover:opacity-80"
          >
            Shivam<span className="text-pink-400">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex sm:hidden text-neutral-300 hover:text-white"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="menu"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="sm:hidden backdrop-blur-xl bg-black/80 border-t border-white/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-6 text-center">
            <Navigation onClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;