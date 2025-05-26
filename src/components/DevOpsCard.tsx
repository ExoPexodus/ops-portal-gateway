
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DevOpsCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  status?: "active" | "maintenance" | "inactive";
}

export function DevOpsCard({ title, description, icon: Icon, href, status = "active" }: DevOpsCardProps) {
  const statusColors = {
    active: "bg-green-500",
    maintenance: "bg-yellow-500", 
    inactive: "bg-red-500"
  };

  const statusLabels = {
    active: "Active",
    maintenance: "Maintenance",
    inactive: "Inactive"
  };

  return (
    <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:border-devops-blue-light/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-devops-blue-light/20 animate-scale-in">
      <div className="absolute inset-0 bg-gradient-to-br from-devops-blue-light/10 to-devops-blue-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-devops-blue-medium/20 rounded-xl group-hover:bg-devops-blue-light/30 transition-colors duration-300">
            <Icon className="w-8 h-8 text-devops-blue-light" />
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
            <span className="text-xs text-gray-300">{statusLabels[status]}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-devops-blue-light transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-6 flex-grow">
          {description}
        </p>
        
        <a 
          href={href}
          className="inline-flex items-center justify-center px-4 py-2 bg-devops-blue-medium hover:bg-devops-blue-light text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-devops-blue-light/30 transform hover:-translate-y-1"
        >
          Access Console
        </a>
      </div>
    </Card>
  );
}
