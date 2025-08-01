import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Settings, 
  Database, 
  Users, 
  BarChart3, 
  Shield, 
  Workflow,
  Building,
  CheckCircle,
  Award,
  Target,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const serviceNowProjects = [
    {
      title: "Global Bank ITSM Transformation",
      industry: "Financial Services",
      description: "Complete ITSM implementation for a Fortune 500 bank with 50,000+ employees",
      modules: ["Incident Management", "Problem Management", "Change Management", "Service Catalog"],
      results: ["40% faster incident resolution", "60% reduction in change failures", "95% user satisfaction"],
      icon: Settings
    },
    {
      title: "Healthcare Provider SecOps Implementation",
      industry: "Healthcare",
      description: "Security operations platform for a major healthcare network protecting patient data",
      modules: ["Vulnerability Response", "Security Incident Response", "Threat Intelligence"],
      results: ["50% faster vulnerability remediation", "Zero security breaches", "HIPAA compliance achieved"],
      icon: Shield
    },
    {
      title: "Manufacturing ITOM Deployment",
      industry: "Manufacturing",
      description: "IT operations management for global manufacturing company with 200+ locations",
      modules: ["Discovery", "Event Management", "Service Mapping", "Orchestration"],
      results: ["30% reduction in downtime", "Real-time visibility", "Automated remediation"],
      icon: Settings
    }
  ];

  const sapProjects = [
    {
      title: "Retail Chain S/4HANA Migration",
      industry: "Retail",
      description: "Complete ERP transformation for international retail chain with 1,000+ stores",
      modules: ["Finance", "Supply Chain", "Sales & Distribution", "Analytics"],
      results: ["25% cost reduction", "Real-time reporting", "Improved inventory management"],
      icon: Database
    },
    {
      title: "Tech Company SuccessFactors HCM",
      industry: "Technology",
      description: "Human capital management implementation for fast-growing tech company",
      modules: ["Employee Central", "Performance & Goals", "Learning", "Recruiting"],
      results: ["90% employee engagement", "50% faster hiring", "Streamlined HR processes"],
      icon: Users
    },
    {
      title: "Government Agency Analytics Cloud",
      industry: "Public Sector",
      description: "Business intelligence platform for federal government agency",
      modules: ["Business Intelligence", "Planning", "Predictive Analytics"],
      results: ["Data-driven decisions", "Improved transparency", "Cost optimization"],
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center space-y-8">
            <ScrollAnimation delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                Our
                <span className="block font-medium moondust-text-gradient">
                  Portfolio
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our successful implementations across ServiceNow and SAP platforms, 
                delivering measurable results for organizations worldwide.
              </p>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* ServiceNow Portfolio */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Settings className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-light text-foreground">ServiceNow Success Stories</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transforming IT operations and business processes with ServiceNow platform implementations
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="space-y-8">
            {serviceNowProjects.map((project, index) => (
              <StaggerItem key={project.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <project.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                            <Badge variant="outline" className="text-primary border-primary/20">
                              {project.industry}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-medium text-foreground mb-3">Modules Implemented:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.modules.map((module) => (
                              <span key={module} className="text-xs bg-secondary/50 text-foreground px-3 py-1 rounded-full">
                                {module}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Key Results:</h4>
                        <ul className="space-y-3">
                          {project.results.map((result) => (
                            <li key={result} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SAP Portfolio */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Database className="h-8 w-8 text-chart-4" />
              <h2 className="text-3xl font-light text-foreground">SAP Success Stories</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Driving digital transformation with comprehensive SAP solutions and implementations
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="space-y-8">
            {sapProjects.map((project, index) => (
              <StaggerItem key={project.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="h-12 w-12 rounded-lg bg-chart-4/20 flex items-center justify-center">
                            <project.icon className="h-6 w-6 text-chart-4" />
                          </div>
                          <div>
                            <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
                            <Badge variant="outline" className="text-chart-4 border-chart-4/20">
                              {project.industry}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-medium text-foreground mb-3">Solution Components:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.modules.map((module) => (
                              <span key={module} className="text-xs bg-secondary/50 text-foreground px-3 py-1 rounded-full">
                                {module}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Key Results:</h4>
                        <ul className="space-y-3">
                          {project.results.map((result) => (
                            <li key={result} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Portfolio Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Measurable results across our project portfolio
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your organization with proven 
              ServiceNow and SAP solutions.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}