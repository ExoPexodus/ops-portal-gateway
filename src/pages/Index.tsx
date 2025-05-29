
import { HeroSection } from "@/components/HeroSection";
import { DevOpsCard } from "@/components/DevOpsCard";
import { 
  Shield, 
  Activity, 
  Lock,
  Book
} from "lucide-react";

const devopsApplications = [
  {
    title: "Admin Console",
    description: "Centralized administration panel for managing users, permissions, and system configurations across all environments.",
    icon: Shield,
    href: "/admin",
    status: "active" as const
  },
  {
    title: "Knowledge Management Console",
    description: "Read well detailed documentation and guides created by techdesk team",
    icon: Book,
    href: "https://in-app.knowmax.ai/techdesk",
    status: "active" as const
  },
  {
    title: "Teleport Management",
    description: "Secure access management for infrastructure with zero-trust principles",
    icon: Lock,
    href: "/teleportui",
    status: "maintenance" as const
  },
  {
    title: "Autoscaling Console",
    description: "Monitor and configure automatic scaling policies for applications and OCI based infrastructure components.",
    icon: Activity,
    href: "/autoscaling",
    status: "inactive" as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-devops-navy via-devops-blue-darker to-devops-blue-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <HeroSection />
        
        <div id="tools-section" className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Access Your Custom Tools
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Choose from our custom-built applications designed specifically for your infrastructure needs. Access your tailored DevOps solutions from one central hub.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {devopsApplications.map((app, index) => (
            <div 
              key={app.title} 
              className="h-full"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <DevOpsCard {...app} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Need access to additional custom tools? Contact Devops Team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;