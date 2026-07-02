import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <ul className="navList">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className="nav-toggle"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <ul className="mobileNavList">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Nav
