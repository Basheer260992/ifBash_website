import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  Database, 
  Users, 
  BarChart3,
  Building,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="AI Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-900/80"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="relative z-10 text-center space-y-8">
            <ScrollAnimation delay={0.2}>
              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                AI-Powered
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                We deliver cutting-edge AI-powered enterprise solutions using ServiceNow platform 
                to automate processes, enhance decision-making, and accelerate intelligent digital transformation.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="px-10 py-4 text-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm">
                  View Our Work
                </Button>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">AI-Enhanced ServiceNow Platform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Intelligent automation and AI-driven insights across ServiceNow enterprise platform
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* ServiceNow Card */}
            <StaggerItem>
              <Card className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105">
                <CardContent className="p-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <Settings className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI-Powered ServiceNow</h3>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    AI-powered ServiceNow solutions with intelligent automation, predictive analytics, 
                    and machine learning capabilities for smarter IT operations.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-base font-medium text-gray-700">AI-Powered ITSM</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-base font-medium text-gray-700">Intelligent Security Ops</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-base font-medium text-gray-700">Smart Process Automation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-base font-medium text-gray-700">Machine Learning Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-base font-medium text-gray-700">Predictive Insights</span>
                    </li>
                  </ul>
                  <Link href="/portfolio/servicenow">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Explore ServiceNow Solutions
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Industries We Transform</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep AI expertise transforming operations across multiple sectors
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Technology", icon: BarChart3, gradient: "from-blue-500 to-cyan-500" },
              { name: "Healthcare", icon: Users, gradient: "from-green-500 to-emerald-500" },
              { name: "Manufacturing", icon: Settings, gradient: "from-orange-500 to-red-500" },
              { name: "Retail", icon: Building, gradient: "from-purple-500 to-pink-500" },
              { name: "Public Sector", icon: Globe, gradient: "from-indigo-500 to-blue-500" },
              { name: "AI & Machine Learning", icon: Database, gradient: "from-violet-500 to-purple-500" },
            ].map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="text-center group cursor-pointer">
                  <div className={`h-20 w-20 mx-auto mb-4 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <industry.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">{industry.name}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h2 className="text-5xl font-bold text-white mb-8 relative z-10">
              Ready to Embrace 
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI-Powered Transformation?
              </span>
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
              Let's discuss how our AI-enhanced ServiceNow solutions can accelerate your intelligent automation journey.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-4 text-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm">
                Download Brochure
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gradient-to-br from-gray-900 to-indigo-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AIConsult</span>
              </div>
              <p className="text-gray-300 text-sm">
                Leading AI-powered ServiceNow consulting firm delivering intelligent enterprise transformation solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">AI Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/services/servicenow" className="hover:text-foreground">ServiceNow</Link></li>
                <li><Link href="/services/ai-automation" className="hover:text-foreground">AI Automation</Link></li>
                <li><Link href="/services/digital-transformation" className="hover:text-foreground">Digital Transformation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/learning-center" className="hover:text-foreground">Learning Center</Link></li>
                <li><Link href="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 AIConsult. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}