import { useLanguage } from "@/contexts/LanguageContext";
import { NavLink } from "@/components/NavLink";
import { Instagram, Facebook, Linkedin, Send } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo */}
          <div>
            <img 
              src={logo} 
              alt="iLink by Asia Network" 
              className="h-16 transition-opacity hover:opacity-90"
            />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">{t('nav.home')}</h3>
            <nav className="flex flex-col gap-3">
              <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </NavLink>
              <NavLink to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.services')}
              </NavLink>
              <NavLink to="/tariffs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.tariffs')}
              </NavLink>
              <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t('nav.contacts')}
              </NavLink>
            </nav>
          </div>

          {/* Contacts & Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">{t('nav.contacts')}</h3>
            <div className="mb-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <p>+998 71 200 00 00</p>
              <p>info@ilink.uz</p>
              <p>Tashkent, Uzbekistan</p>
            </div>
            <div className="flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Send className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 iLink by Asia Network. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.offer')}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
