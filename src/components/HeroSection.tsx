import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();

  const slides = [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-blue-800">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {slides.map((image, index) => (
              <CarouselItem key={index}>
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
                        src={image} 
                        alt="Data Center" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
