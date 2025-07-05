import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => {
    const commonClasses = "flex items-center ";
    return location.pathname === path
      ? commonClasses + "text-secondary font-semibold"
      : commonClasses +
          "text-white font-light hover:text-secondary transition-colors";
  };

  const isActiveMobile = (path: string) => {
    return `block ${location.pathname === path ? "text-secondary font-semibold" : "text-white font-light"} px-3 py-2 hover:text-primary hover:bg-gray-50 rounded-md transition-colors`
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        buttonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/marca-3on-projetos-inteligentes-transparente-site.png"
                alt="Marca 3on Projetos Inteligentes"
                className="h-12 object-contain"
              />
            </Link>
            <span className="ml-2 text-white font-semibold">Projetos Inteligentes</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={isActive("/")}
            >
              Home
            </Link>
            <Link
              to="/residencial"
              className={isActive("/residencial")}
            >
              Residencial
            </Link>
            {/** 
            <Link
              to="/corporativo"
              className={isActive("/corporativo")}
            >
              Corporativo
            </Link>
            */}
            <Link
              to="/profissionais"
              className={isActive("/profissionais")}
            >
              Profissionais
            </Link>
            <Link to="/contato" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors">
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-white font-semibold`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden bg-primary border-t border-secondary ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={isActiveMobile("/")}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/residencial"
              className={isActiveMobile("/residencial")}
              onClick={closeMobileMenu}
            >
              Residencial
            </Link>
            {/** 
            <Link
              to="/corporativo"
              className={isActiveMobile("/corporativo")}
              onClick={closeMobileMenu}
            >
              Corporativo
            </Link>
            */}
            <Link
              to="/profissionais"
              className={isActiveMobile("/profissionais")}
              onClick={closeMobileMenu}
            >
              Profissionais
            </Link>
            <Link
              to="/contato"
              className={isActiveMobile("/contato")}
              onClick={closeMobileMenu}
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
