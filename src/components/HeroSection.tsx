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
  const [rotation, setRotation] = useState(0);

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

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-blue-800 pt-16">
      {/* Dynamic Rotating Background Shape */}
      <div 
        className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-[45%] opacity-30 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.4), rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.4))',
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.05s linear',
        }}
      />
      <div 
        className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-[40%] opacity-20 blur-3xl"
        style={{
          background: 'linear-gradient(225deg, rgba(34, 211, 238, 0.3), rgba(59, 130, 246, 0.3))',
          transform: `rotate(${-rotation}deg)`,
          transition: 'transform 0.05s linear',
        }}
      />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
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
