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
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center space-y-8">
            <ScrollAnimation delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                AI-Powered Enterprise
                <span className="block font-medium moondust-text-gradient">
                  Solutions
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We deliver AI-powered enterprise solutions using ServiceNow and SAP platforms 
                to automate processes, enhance decision-making, and accelerate digital transformation.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="moondust-gradient hover:opacity-90 text-white px-8 py-3 moondust-glow">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  View Our Work
                </Button>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">AI-Enhanced Platforms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Intelligent automation and AI-driven insights across enterprise platforms
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {/* ServiceNow Card */}
            <StaggerItem>
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-medium text-foreground">ServiceNow</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    AI-powered ServiceNow solutions with intelligent automation, predictive analytics, 
                    and machine learning capabilities for smarter IT operations.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground/80">AI-Powered ITSM</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground/80">Intelligent Security Ops</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground/80">Smart Process Automation</span>
                    </li>
                  </ul>
                  <Link href="/portfolio/servicenow">
                    <Button variant="outline" className="w-full">
                      Explore ServiceNow Solutions
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>

            {/* SAP Card */}
            <StaggerItem>
              <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center">
                      <Database className="h-6 w-6 text-chart-4" />
                    </div>
                    <h3 className="text-2xl font-medium text-foreground">SAP</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    AI-enhanced SAP solutions with intelligent ERP, machine learning analytics, 
                    and automated business processes for data-driven decisions.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground/80">Intelligent S/4HANA</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground/80">AI-Driven Analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-foreground/80">Machine Learning Insights</span>
                    </li>
                  </ul>
                  <Link href="/portfolio/sap">
                    <Button variant="outline" className="w-full">
                      Explore SAP Solutions
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep industry expertise across multiple sectors
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Technology", icon: BarChart3 },
              { name: "Healthcare", icon: Users },
              { name: "Manufacturing", icon: Settings },
              { name: "Retail", icon: Building },
              { name: "Public Sector", icon: Globe },
              { name: "AI & Machine Learning", icon: Database },
            ].map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="text-center group">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{industry.name}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to Embrace AI-Powered Transformation?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI-enhanced ServiceNow and SAP solutions can accelerate your intelligent automation journey.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Download Brochure
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-8 w-8 rounded moondust-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TC</span>
                </div>
                <span className="font-semibold text-xl text-foreground">TechConsult</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Leading ServiceNow and SAP consulting firm delivering enterprise transformation solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services/servicenow" className="hover:text-foreground">ServiceNow</Link></li>
                <li><Link href="/services/sap" className="hover:text-foreground">SAP Solutions</Link></li>
                <li><Link href="/services/digital-transformation" className="hover:text-foreground">Digital Transformation</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/learning-center" className="hover:text-foreground">Learning Center</Link></li>
                <li><Link href="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
                <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 TechConsult. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}