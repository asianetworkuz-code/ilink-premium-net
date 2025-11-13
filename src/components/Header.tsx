import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { User, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between px-2 lg:px-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <img src={logo} alt="iLink by Asia Network" className="h-10 md:h-14" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink 
              to="/" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {t('nav.about')}
            </NavLink>
            <NavLink 
              to="/services" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {t('nav.services')}
            </NavLink>
            <NavLink 
              to="/tariffs" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {t('nav.tariffs')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {t('nav.contacts')}
            </NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 lg:gap-3">
            {/* Language Switcher - Desktop Only */}
            <div className="hidden lg:flex items-center gap-1 rounded-lg bg-secondary p-1">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                  language === 'uz'
                    ? 'bg-background text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                  language === 'ru'
                    ? 'bg-background text-primary shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                RU
              </button>
            </div>

            {/* Desktop Cabinet Button */}
            <Button className="gap-2 hidden lg:flex" asChild>
              <a href="https://cabinet.ilink.uz/" target="_blank" rel="noopener noreferrer">
                <User className="h-4 w-4" />
                <span>{t('nav.cabinet')}</span>
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden transition-all hover:scale-110 hover:bg-secondary/80 h-12 w-12">
                  <Menu className="h-7 w-7" />
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
                    <span className="text-sm text-muted-foreground">Til / Язык:</span>
                    <div className="flex items-center gap-1 rounded-lg bg-secondary p-1">
                      <button
                        onClick={() => {
                          setLanguage('uz');
                          setIsOpen(false);
                        }}
                        className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                          language === 'uz'
                            ? 'bg-background text-primary shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        UZ
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('ru');
                          setIsOpen(false);
                        }}
                        className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
                          language === 'ru'
                            ? 'bg-background text-primary shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
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
