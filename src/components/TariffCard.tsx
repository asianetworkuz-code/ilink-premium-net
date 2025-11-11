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
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Header with gradient */}
      <div className={`${gradient || 'bg-gradient-to-br from-blue-500 to-blue-600'} p-6 text-white`}>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-blue-100">{t('tariff.perMonth')}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Speed */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <Wifi className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">{t('tariff.speed')}</p>
            <p className="font-semibold text-foreground">{speed}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <Phone className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">{t('tariff.phone')}</p>
            <p className="font-semibold text-foreground">{phone}</p>
          </div>
        </div>

        {/* Traffic */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
            <Radio className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">{t('tariff.traffic')}</p>
            <p className="font-semibold text-foreground">{traffic}</p>
          </div>
        </div>
      </div>

      {/* Price & Action */}
      <div className="px-6 pb-6 space-y-4">
        <div className="text-center py-4 bg-secondary/30 rounded-xl">
          <p className="text-3xl font-bold text-foreground">
            {typeof price === 'number' ? price.toLocaleString() : price}
          </p>
          {typeof price === 'number' && (
            <p className="text-sm text-muted-foreground">{t('tariff.perMonth')}</p>
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
