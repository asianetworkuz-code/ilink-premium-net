import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              {t('about.subtitle')}
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t('nav.about')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  iLink by Asia Network — это современная телекоммуникационная компания, 
                  предоставляющая высокоскоростной интернет, IP-телефонию, цифровое телевидение 
                  и другие услуги для частных и корпоративных клиентов по всему Узбекистану.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">1000+</h3>
                  <p className="text-blue-100">Довольных клиентов</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">24/7</h3>
                  <p className="text-teal-100">Техническая поддержка</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">1000 Mbit/s</h3>
                  <p className="text-cyan-100">Максимальная скорость</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">110+</h3>
                  <p className="text-purple-100">ТВ каналов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
