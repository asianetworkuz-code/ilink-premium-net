import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-blue-800">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('hero.subtitle')}
            </p>
            <Button size="lg" variant="secondary" className="rounded-xl px-8">
              {t('hero.cta')}
            </Button>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop" 
                alt="Data Center" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 right-8 flex gap-3">
          <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 bg-white/20 hover:bg-white/30 text-white border-0">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full h-12 w-12 bg-white/20 hover:bg-white/30 text-white border-0">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
