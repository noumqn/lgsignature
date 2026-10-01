import { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Sticky Header - always visible */}
      <header className={"fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-secondary/80 via-white/80 to-accent/80 backdrop-blur-sm shadow-sm transition-all duration-300 translate-y-0 opacity-100"}>
        <div className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="h-20 md:h-24 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/lglogo.png"
                alt="LG Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <h1 className="font-abril text-foreground text-xl md:text-2xl lg:text-[28px] font-normal tracking-wider">
                LG SIGNATURE SUITES BOUTIQUE HOTEL
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#rooms" className="text-foreground/80 hover:text-foreground transition-colors tracking-wide text-sm md:text-base font-medium">Rooms</a>
              <a href="#suites" className="text-foreground/80 hover:text-foreground transition-colors tracking-wide text-sm md:text-base font-medium">Suites</a>
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors tracking-wide text-sm md:text-base font-medium">About</a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors tracking-wide text-sm md:text-base font-medium">Contact</a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Panel - full width dropdown under header */}
          {isMobileMenuOpen && (
            <div id="mobile-menu" role="menu" aria-label="Mobile navigation" className="md:hidden absolute left-0 right-0 top-full z-50 bg-white/95 backdrop-blur-md shadow-lg ring-1 ring-black/5">
              <div className="flex flex-col divide-y divide-black/5">
                <a
                  href="#rooms"
                  className="w-full px-6 py-3 text-center text-foreground/90 hover:text-foreground hover:bg-foreground/10 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Rooms
                </a>
                <a
                  href="#suites"
                  className="w-full px-6 py-3 text-center text-foreground/90 hover:text-foreground hover:bg-foreground/10 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Suites
                </a>
                <a
                  href="#about"
                  className="w-full px-6 py-3 text-center text-foreground/90 hover:text-foreground hover:bg-foreground/10 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="w-full px-6 py-3 text-center text-foreground/90 hover:text-foreground hover:bg-foreground/10 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Floating Social Media Icons */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <Twitter size={24} />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* Background video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="https://video.wixstatic.com/video/11062b_0e4938c49fdf49ec80c5ce38ce70a2d0/1080p/mp4/file.mp4"
            className="absolute inset-0 w-full h-full scale-150 object-cover pointer-events-none"
            style={{
              transform: 'scale(1.2)',
              transformOrigin: 'center center'
            }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Overlay Image */}
        <div className="relative z-20 w-full h-full flex items-center justify-center px-4">
          <div className="w-3/4 h-3/4 max-w-4xl max-h-4xl relative">
            <img
              src="/Minimalistic Creative Agency Business Banner.png"
              alt="Creative Agency Banner"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            transform: `translateY(${(scrollY - window.innerHeight) * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-6xl md:text-8xl font-light tracking-widest mb-8">
            SUITES
          </h2>
          <button className="border-2 border-white px-8 py-3 text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300">
            View
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            transform: `translateY(${(scrollY - window.innerHeight * 2) * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-blue-400/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-6xl md:text-8xl font-light tracking-widest mb-8">
            ABOUT
          </h2>
          <button className="border-2 border-white px-8 py-3 text-lg tracking-wider hover:bg-white hover:text-blue-400 transition-all duration-300">
            View
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            transform: `translateY(${(scrollY - window.innerHeight * 3) * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-6xl md:text-8xl font-light tracking-widest mb-8">
            CONTACT
          </h2>
          <button className="border-2 border-white px-8 py-3 text-lg tracking-wider hover:bg-white hover:text-black transition-all duration-300">
            View
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8">
        <p className="text-sm">
          2025 by LG Signature Suites Boutique Hotel. Powered and secured by <span className="underline">Sea Socials</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;


