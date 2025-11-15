import { useLanguage } from "@/contexts/LanguageContext";
import { Wifi, User, Tv, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const QuickActions = () => {
  const { t } = useLanguage();

  const actions = [
    { icon: Wifi, label: t('quick.internet'), to: "/tariffs" },
    { icon: User, label: t('quick.cabinet'), to: "#" },
    { icon: Tv, label: t('quick.tv'), to: "/services" },
    { icon: Shield, label: t('quick.security'), to: "/services" },
  ];

  return (
    <section className="relative -mt-20 md:-mt-24 z-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-4 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {actions.map((action, index) => (
              <NavLink
                key={index}
                to={action.to}
                className="flex flex-col items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100/50 transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#0066CC] text-white group-hover:scale-110 transition-transform shadow-lg">
                  <action.icon className="h-6 w-6 md:h-8 md:w-8" strokeWidth={2} />
                </div>
                <span className="text-xs md:text-sm font-medium text-center text-foreground/80 group-hover:text-foreground">
                  {action.label}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
