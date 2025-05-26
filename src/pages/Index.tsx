
import { HeroSection } from "@/components/HeroSection";
import { DevOpsCard } from "@/components/DevOpsCard";
import { 
  Shield, 
  Server, 
  Activity, 
  Database, 
  Cloud, 
  GitBranch, 
  Monitor, 
  Settings,
  Terminal,
  Lock,
  BarChart3,
  Workflow
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
    title: "Teleport Management",
    description: "Secure access management for infrastructure with zero-trust principles and session recording capabilities.",
    icon: Lock,
    href: "/teleport",
    status: "active" as const
  },
  {
    title: "Autoscaling Console",
    description: "Monitor and configure automatic scaling policies for applications and infrastructure components.",
    icon: Activity,
    href: "/autoscaling",
    status: "active" as const
  },
  {
    title: "Kubernetes Dashboard",
    description: "Comprehensive view of your Kubernetes clusters, workloads, and resource utilization across namespaces.",
    icon: Server,
    href: "/kubernetes",
    status: "active" as const
  },
  {
    title: "Database Management",
    description: "Centralized database administration, backup management, and performance monitoring tools.",
    icon: Database,
    href: "/database",
    status: "maintenance" as const
  },
  {
    title: "Cloud Resources",
    description: "Multi-cloud resource management dashboard for AWS, Azure, and Google Cloud Platform services.",
    icon: Cloud,
    href: "/cloud",
    status: "active" as const
  },
  {
    title: "CI/CD Pipeline",
    description: "Build, test, and deployment pipeline management with real-time status and deployment history.",
    icon: GitBranch,
    href: "/cicd",
    status: "active" as const
  },
  {
    title: "Monitoring & Alerts",
    description: "Comprehensive monitoring dashboard with custom alerts, metrics visualization, and incident management.",
    icon: Monitor,
    href: "/monitoring",
    status: "active" as const
  },
  {
    title: "System Configuration",
    description: "Infrastructure as Code management, configuration drift detection, and compliance reporting.",
    icon: Settings,
    href: "/config",
    status: "active" as const
  },
  {
    title: "Terminal Access",
    description: "Secure web-based terminal access to servers and containers with audit logging and session sharing.",
    icon: Terminal,
    href: "/terminal",
    status: "active" as const
  },
  {
    title: "Analytics Dashboard",
    description: "Performance analytics, cost optimization insights, and resource utilization reports across your infrastructure.",
    icon: BarChart3,
    href: "/analytics",
    status: "active" as const
  },
  {
    title: "Workflow Automation",
    description: "Create and manage automated workflows for common DevOps tasks and incident response procedures.",
    icon: Workflow,
    href: "/workflows",
    status: "active" as const
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
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Access Your DevOps Tools
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Choose from our comprehensive suite of DevOps applications designed to streamline your infrastructure management and deployment processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
            Need access to additional tools? Contact your DevOps administrator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
