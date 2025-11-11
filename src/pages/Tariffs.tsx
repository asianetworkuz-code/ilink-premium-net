import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TariffCard from "@/components/TariffCard";

const Tariffs = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
              {t('tariff.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              {t('footer.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tariffs.map((tariff, index) => (
                <TariffCard key={index} {...tariff} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tariffs;
