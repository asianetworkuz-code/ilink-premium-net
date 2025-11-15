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
    <section className="relative overflow-hidden bg-[#0066CC] pt-16 pb-12 md:pb-20">
      {/* Dynamic Rotating Background Shapes - Subtle decorative elements */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-[45%] opacity-10 blur-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.6), rgba(139, 92, 246, 0.4))',
          transform: `rotate(${rotation}deg) translateX(20%)`,
          transition: 'transform 0.05s linear',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-[40%] opacity-10 blur-3xl"
        style={{
          background: 'linear-gradient(225deg, rgba(34, 211, 238, 0.5), rgba(59, 130, 246, 0.3))',
          transform: `rotate(${-rotation}deg) translateX(-20%)`,
          transition: 'transform 0.05s linear',
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10 flex items-center justify-center">
        <div className="w-full max-w-6xl">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <CarouselContent>
              {slides.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16 bg-gradient-to-br from-[#4A9FD8] via-[#6BB4E5] to-[#8BC9F2]">
                    <div className="text-white">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                        {t('hero.title')}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/95">
                        {t('hero.subtitle')}
                      </p>
                      <Button size="lg" variant="secondary" className="rounded-xl px-8 bg-white text-primary hover:bg-white/90">
                        {t('hero.cta')}
                      </Button>
                    </div>

                    <div className="relative w-full">
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
      </div>
    </section>
  );
};

export default HeroSection;
