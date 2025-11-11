import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 hover:border-primary/20">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white mb-4 group-hover:scale-110 transition-transform">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
