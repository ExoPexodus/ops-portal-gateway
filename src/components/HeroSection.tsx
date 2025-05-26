
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export function HeroSection() {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          DevOps Command
          <span className="block bg-gradient-to-r from-devops-blue-light to-devops-blue-medium bg-clip-text text-transparent">
            Center
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your unified hub for accessing all DevOps tools and applications. 
          Streamline your workflow and manage infrastructure from one central location.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button className="inline-flex items-center px-8 py-4 bg-devops-blue-light hover:bg-devops-blue-medium text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-devops-blue-light/30 transform hover:-translate-y-1">
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        <button className="inline-flex items-center px-8 py-4 border border-devops-blue-light text-devops-blue-light hover:bg-devops-blue-light hover:text-white font-semibold rounded-xl transition-all duration-300">
          View Documentation
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-devops-blue-medium/20 rounded-full mb-4">
            <Shield className="w-8 h-8 text-devops-blue-light" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Secure Access</h3>
          <p className="text-gray-400 text-sm">Enterprise-grade security with role-based access control</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-devops-blue-medium/20 rounded-full mb-4">
            <Zap className="w-8 h-8 text-devops-blue-light" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
          <p className="text-gray-400 text-sm">Quick access to all your tools without context switching</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-devops-blue-medium/20 rounded-full mb-4">
            <Users className="w-8 h-8 text-devops-blue-light" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Team Focused</h3>
          <p className="text-gray-400 text-sm">Built for DevOps teams to collaborate effectively</p>
        </div>
      </div>
    </div>
  );
}
