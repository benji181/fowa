import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Thematic Focus", path: "/thematic-focus" },
    {
      label: "Events",
      dropdown: [
        { label: "Festival of Waters & Arts", path: "/events/fowa" },
        { label: "Water Heritage Awards", path: "/events/twha" },
      ],
    },
    {
      label: "Leadership",
      dropdown: [
        { label: "Festival Director", path: "/leadership/director" },
        { label: "Patrons & Chairmen", path: "/leadership/patrons" },
      ],
    },
    { label: "Partners", path: "/partners" },
    { label: "Gallery", path: "/gallery" },
    { label: "Curator", path: "/curator" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/client/public" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/20 group-hover:scale-105 transition-transform">
              <span className="font-serif font-bold text-primary text-xl">FW</span>
            </div>
            <span className={`font-serif font-bold text-xl tracking-wide ${scrolled ? "text-white" : "text-white drop-shadow-md"}`}>
              FOWA & TWHA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <button className={`flex items-center gap-1 font-medium hover:text-accent transition-colors ${scrolled ? "text-white/90" : "text-white drop-shadow-sm"}`}>
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link href={link.path!} className={`font-medium hover:text-accent transition-colors ${scrolled ? "text-white/90" : "text-white drop-shadow-sm"} ${location === link.path ? "text-accent" : ""}`}>
                    {link.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-border/50 py-2 min-w-[240px] overflow-hidden">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.path}
                          className="block px-5 py-3 text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/register" className="px-6 py-2.5 rounded-full bg-accent text-primary font-bold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-0.5">
              Register
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary shadow-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <div className="text-white/50 text-sm font-semibold uppercase tracking-wider px-2">{link.label}</div>
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={link.path!}
                      onClick={() => setIsOpen(false)}
                      className="block px-2 py-2 text-white font-medium hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/register" onClick={() => setIsOpen(false)} className="w-full text-center px-6 py-3 rounded-xl bg-accent text-primary font-bold">
                  Register Now
                </Link>
                <Link href="/donate" onClick={() => setIsOpen(false)} className="w-full text-center px-6 py-3 rounded-xl border-2 border-white/20 text-white font-bold hover:bg-white/10">
                  Donate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
