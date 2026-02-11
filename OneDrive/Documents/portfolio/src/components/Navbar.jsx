import React, { useState, useEffect } from 'react';

const NAV_OFFSET = 40; // navbar height + top spacing (px)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact', isCta: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + NAV_OFFSET + 50;

      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          el.offsetTop + el.offsetHeight > scrollPosition
        ) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    setIsOpen(false);

    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      NAV_OFFSET;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-between gap-6 shadow-2xl">

          {/* Brand */}
          <div className="hidden md:flex flex-col pl-6 pr-4 leading-none group cursor-pointer">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')}>
              <span className="font-bold text-lg text-white">MHS</span>
              <span className="block text-[9px] text-zinc-500 uppercase mt-0.5">
                Aspiring Engineer
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(
              (link) =>
                !link.isCta && (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-5 py-2 rounded-full text-xs font-medium transition-all
                      ${
                        activeSection === link.href.substring(1)
                          ? 'text-white bg-white/10'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.name}
                  </a>
                )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block pr-1">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 transition-transform md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-2xl font-bold ${
                activeSection === link.href.substring(1)
                  ? 'text-white'
                  : 'text-zinc-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
