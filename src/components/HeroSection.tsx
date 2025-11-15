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
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#0066DA] to-[#004A9E] pt-20 pb-40 md:pb-48">
      {/* AI-Enhanced Background Elements */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-[45%] opacity-20 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(103, 209, 255, 0.4), rgba(0, 162, 255, 0.2))',
          transform: `rotate(${rotation}deg) translateX(15%)`,
          transition: 'transform 0.05s linear',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-[40%] opacity-15 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(10, 132, 255, 0.3), rgba(0, 102, 218, 0.2))',
          transform: `rotate(${-rotation}deg) translateX(-15%)`,
          transition: 'transform 0.05s linear',
        }}
      />
      
      {/* Subtle particle glow effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-200" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <Carousel setApi={setApi} opts={{ loop: true }} className="w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <CarouselContent>
              {slides.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 md:p-12 lg:p-16 bg-gradient-to-br from-[#4DB8E8]/95 via-[#6BC5ED]/90 to-[#89D2F2]/85 backdrop-blur-sm">
                    {/* Left Side - Content */}
                    <div className="text-white space-y-6 lg:space-y-8">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                        {t('hero.title')}
                      </h1>
                      <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/95 leading-relaxed">
                        {t('hero.subtitle')}
                      </p>
                      <Button 
                        size="lg" 
                        className="bg-white text-primary hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-xl px-8 py-6 text-base md:text-lg font-bold"
                      >
                        {t('hero.cta')}
                      </Button>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative w-full">
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20">
                        <img 
                          src={image} 
                          alt="Data Center Technology" 
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