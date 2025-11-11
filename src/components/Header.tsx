import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { Search, User } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-20 items-center justify-between px-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="iLink by Asia Network" className="h-12 md:h-14" />
          </NavLink>

          {/* Navigation */}
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
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 rounded-lg bg-secondary p-1">
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

            {/* Search Icon */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>

            {/* Cabinet Button */}
            <Button className="gap-2" asChild>
              <a href="https://cabinet.ilink.uz/" target="_blank" rel="noopener noreferrer">
                <User className="h-4 w-4" />
                <span className="hidden md:inline">{t('nav.cabinet')}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
