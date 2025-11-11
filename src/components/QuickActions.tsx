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
    <section className="relative -mt-12 z-10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {actions.map((action, index) => (
              <NavLink
                key={index}
                to={action.to}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 transition-all duration-300 group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white group-hover:scale-110 transition-transform">
                  <action.icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-medium text-center text-foreground">
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
