import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { User, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-primary shadow-lg border-none' 
        : 'bg-transparent border-b border-white/10'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src={logo} alt="iLink by Asia Network" className="h-12 md:h-14" />
          </NavLink>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <NavLink 
              to="/" 
              className="text-sm font-bold text-white/90 transition-all hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
              activeClassName="text-white"
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-sm font-bold text-white/90 transition-all hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
              activeClassName="text-white"
            >
              {t('nav.about')}
            </NavLink>
            <NavLink 
              to="/services" 
              className="text-sm font-bold text-white/90 transition-all hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
              activeClassName="text-white"
            >
              {t('nav.services')}
            </NavLink>
            <NavLink 
              to="/tariffs" 
              className="text-sm font-bold text-white/90 transition-all hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
              activeClassName="text-white"
            >
              {t('nav.tariffs')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-sm font-bold text-white/90 transition-all hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full pb-1"
              activeClassName="text-white"
            >
              {t('nav.contacts')}
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Language Switcher - Desktop Only */}
            <div className="hidden lg:flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm p-1 border border-white/20">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                  language === 'uz'
                    ? 'bg-white text-primary shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                  language === 'ru'
                    ? 'bg-white text-primary shadow-md'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                RU
              </button>
            </div>

            {/* Desktop Cabinet Button */}
            <Button className="gap-2 hidden lg:flex bg-gradient-to-r from-brand-gradient-start to-brand-gradient-end hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl px-6 font-bold" asChild>
              <a href="https://cabinet.ilink.uz/" target="_blank" rel="noopener noreferrer">
                <User className="h-4 w-4" />
                <span>{t('nav.cabinet')}</span>
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95"
                >
                  <Menu className="h-6 w-6 text-white" strokeWidth={2} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] animate-slide-in-right">
                <SheetHeader>
                  <SheetTitle>
                    <img src={logo} alt="iLink by Asia Network" className="h-12" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-8">
                  {/* Cabinet Button in Mobile Menu */}
                  <Button className="gap-2 w-full justify-start mb-2" asChild>
                    <a href="https://cabinet.ilink.uz/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                      <User className="h-4 w-4" />
                      <span>Kirish</span>
                    </a>
                  </Button>
                  
                  <NavLink 
                    to="/" 
                    className="text-base font-medium text-muted-foreground transition-all hover:text-primary hover:translate-x-1 py-3 px-2 rounded-lg hover:bg-secondary/50"
                    activeClassName="text-primary bg-secondary/30"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.home')}
                  </NavLink>
                  <NavLink 
                    to="/about" 
                    className="text-base font-medium text-muted-foreground transition-all hover:text-primary hover:translate-x-1 py-3 px-2 rounded-lg hover:bg-secondary/50"
                    activeClassName="text-primary bg-secondary/30"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.about')}
                  </NavLink>
                  <NavLink 
                    to="/services" 
                    className="text-base font-medium text-muted-foreground transition-all hover:text-primary hover:translate-x-1 py-3 px-2 rounded-lg hover:bg-secondary/50"
                    activeClassName="text-primary bg-secondary/30"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.services')}
                  </NavLink>
                  <NavLink 
                    to="/tariffs" 
                    className="text-base font-medium text-muted-foreground transition-all hover:text-primary hover:translate-x-1 py-3 px-2 rounded-lg hover:bg-secondary/50"
                    activeClassName="text-primary bg-secondary/30"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.tariffs')}
                  </NavLink>
                  <NavLink 
                    to="/contact" 
                    className="text-base font-medium text-muted-foreground transition-all hover:text-primary hover:translate-x-1 py-3 px-2 rounded-lg hover:bg-secondary/50"
                    activeClassName="text-primary bg-secondary/30"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.contacts')}
                  </NavLink>
                  
                  {/* Language Switcher in Mobile Menu */}
                  <div className="flex items-center gap-2 pt-4 border-t mt-4">
                    <span className="text-sm font-bold text-muted-foreground">Til / Язык:</span>
                    <div className="flex items-center gap-1 rounded-full bg-secondary/10 p-1">
                      <button
                        onClick={() => {
                          setLanguage('uz');
                          setIsOpen(false);
                        }}
                        className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                          language === 'uz'
                            ? 'bg-primary text-white shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
                        }`}
                      >
                        UZ
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('ru');
                          setIsOpen(false);
                        }}
                        className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                          language === 'ru'
                            ? 'bg-primary text-white shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
                        }`}
                      >
                        RU
                      </button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
