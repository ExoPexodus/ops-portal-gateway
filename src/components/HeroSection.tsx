import { ArrowDown, Shield, Zap, Users } from "lucide-react";

export function HeroSection() {
  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <button 
          onClick={scrollToTools}
          className="inline-flex items-center px-8 py-4 bg-devops-blue-light hover:bg-devops-blue-medium text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-devops-blue-light/30 transform hover:-translate-y-1"
        >
          Get Started
          <ArrowDown className="ml-2 w-5 h-5" />
        </button>
        <a 
          href="https://gitlab.kochar.com/kocharsoft/devops-world" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 border border-devops-blue-light text-devops-blue-light hover:bg-devops-blue-light hover:text-white font-semibold rounded-xl transition-all duration-300"
        >
          View Documentation
        </a>
      </div>
    </div>
  );
}
