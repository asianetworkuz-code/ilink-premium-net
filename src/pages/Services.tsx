import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Wifi, User, Tv, Shield, Building2, Headphones } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

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
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              {t('footer.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
