import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import QuickActions from "@/components/QuickActions";
import TariffCard from "@/components/TariffCard";
import ServiceCard from "@/components/ServiceCard";
import { ChevronLeft, ChevronRight, Wifi, User, Tv, Shield, Headphones, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { t } = useLanguage();

  const tariffs = [
    {
      name: t('tariff.premium'),
      price: 150000,
      speed: "100 Mbit/s",
      phone: "25000 So'm/Oyiga",
      traffic: t('tariff.unlimited'),
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      name: t('tariff.gold'),
      price: 230000,
      speed: "200 Mbit/s",
      phone: "25000 So'm/Oyiga",
      traffic: t('tariff.unlimited'),
      gradient: "bg-gradient-to-br from-cyan-500 to-teal-500"
    },
    {
      name: t('tariff.platinum'),
      price: 330000,
      speed: "350 Mbit/s",
      phone: "25000 So'm/Oyiga",
      traffic: t('tariff.unlimited'),
      gradient: "bg-gradient-to-br from-blue-600 to-cyan-600"
    },
    {
      name: t('tariff.businessx'),
      price: t('tariff.negotiable'),
      speed: "1000 Mbit/s",
      phone: "25000 So'm/Oyiga",
      traffic: t('tariff.unlimited'),
      gradient: "bg-gradient-to-br from-purple-600 to-blue-600"
    },
  ];

  const services = [
    {
      icon: Wifi,
      title: t('services.internet'),
      description: t('services.internetDesc'),
    },
    {
      icon: User,
      title: t('services.cabinet'),
      description: t('services.cabinetDesc'),
    },
    {
      icon: Tv,
      title: t('services.tv'),
      description: t('services.tvDesc'),
    },
    {
      icon: Shield,
      title: t('services.security'),
      description: t('services.securityDesc'),
    },
    {
      icon: Building2,
      title: t('services.business'),
      description: t('services.businessDesc'),
    },
    {
      icon: Headphones,
      title: t('services.support'),
      description: t('services.supportDesc'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero */}
        <HeroSection />
        
        {/* Quick Actions */}
        <QuickActions />

        {/* Tariffs Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('tariff.title')}
              </h2>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="rounded-full">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {tariffs.map((tariff, index) => (
                <TariffCard key={index} {...tariff} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              {t('services.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
