import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Wifi, Phone, Radio } from "lucide-react";

interface TariffCardProps {
  name: string;
  price: string | number;
  speed: string;
  phone: string;
  traffic: string;
  gradient?: string;
}

const TariffCard = ({ name, price, speed, phone, traffic, gradient }: TariffCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex-shrink-0 w-full bg-background rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.03] hover:-translate-y-2">
      {/* Header with gradient */}
      <div className={`${gradient || 'bg-gradient-to-br from-blue-500 to-blue-600'} p-6 text-white`}>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-sm opacity-90">{t('tariff.perMonth')}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 bg-background">
        {/* Speed */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Wifi className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">{t('tariff.speed')}</p>
            <p className="font-semibold text-foreground">{speed}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">{t('tariff.phone')}</p>
            <p className="font-semibold text-foreground">{phone}</p>
          </div>
        </div>

        {/* Traffic */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Radio className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">{t('tariff.traffic')}</p>
            <p className="font-semibold text-foreground">{traffic}</p>
          </div>
        </div>
      </div>

      {/* Price & Action */}
      <div className="px-6 pb-6 space-y-4 bg-background">
        <div className="text-center py-6 bg-secondary/20 rounded-xl">
          <p className="text-4xl font-bold text-foreground">
            {typeof price === 'number' ? price.toLocaleString() : price}
          </p>
          {typeof price === 'number' && (
            <p className="text-sm text-muted-foreground mt-2">{t('tariff.perMonth')}</p>
          )}
        </div>

        <Button className="w-full" size="lg">
          {t('tariff.connect')}
        </Button>

        <Button variant="ghost" className="w-full">
          {t('tariff.compare')}
        </Button>
      </div>
    </div>
  );
};

export default TariffCard;
