import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  BarChart3, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Building,
  Globe,
  Award,
  Target
} from "lucide-react";

export default function FinancialServicesPage() {
  const challenges = [
    {
      title: "Regulatory Compliance",
      description: "Navigate complex regulatory requirements across multiple jurisdictions",
      icon: Shield
    },
    {
      title: "Risk Management",
      description: "Implement comprehensive risk assessment and mitigation strategies",
      icon: Target
    },
    {
      title: "Digital Banking",
      description: "Transform customer experiences with modern digital platforms",
      icon: Globe
    },
    {
      title: "Operational Efficiency",
      description: "Streamline processes while maintaining security and compliance",
      icon: TrendingUp
    }
  ];

  const solutions = [
    {
      title: "ServiceNow for Financial Services",
      description: "Complete ITSM, SecOps, and GRC solutions tailored for financial institutions",
      features: ["IT Service Management", "Security Operations", "Governance, Risk & Compliance", "Customer Service Management"],
      benefits: ["40% faster incident resolution", "Enhanced security posture", "Automated compliance reporting"]
    },
    {
      title: "SAP Banking Solutions",
      description: "Core banking, risk management, and analytics solutions for modern financial services",
      features: ["SAP S/4HANA Finance", "SAP Risk Management", "SAP Analytics Cloud", "SAP Ariba"],
      benefits: ["Real-time financial reporting", "Integrated risk management", "Improved customer insights"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Investment Bank Transformation",
      challenge: "Legacy IT infrastructure causing operational inefficiencies and compliance risks",
      solution: "Complete ServiceNow ITSM and SecOps implementation with custom workflows",
      results: ["50% reduction in security incidents", "30% faster regulatory reporting", "95% user satisfaction"]
    },
    {
      title: "Regional Bank Digital Modernization",
      challenge: "Outdated core banking system limiting growth and customer experience",
      solution: "SAP S/4HANA implementation with integrated analytics and customer management",
      results: ["25% cost reduction", "Real-time transaction processing", "Enhanced customer experience"]
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
              <div className="flex items-center justify-center space-x-3 mb-6">
                <BarChart3 className="h-8 w-8 text-primary" />
                <Badge variant="outline" className="text-primary border-primary/20">Industry</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                Financial
                <span className="block font-medium moondust-text-gradient">
                  Services
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Empowering financial institutions with secure, compliant, and innovative technology solutions 
                that drive operational excellence and customer satisfaction.
              </p>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Industry Challenges</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the unique challenges facing financial services organizations
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <StaggerItem key={challenge.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <challenge.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-3">{challenge.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Our Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed specifically for financial services
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="space-y-8">
            {solutions.map((solution, index) => (
              <StaggerItem key={solution.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-medium text-foreground mb-4">{solution.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Business Benefits:</h4>
                        <ul className="space-y-3">
                          {solution.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start space-x-2">
                              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
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

      {/* Case Studies */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from our financial services implementations
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="space-y-8">
            {caseStudies.map((study, index) => (
              <StaggerItem key={study.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-medium text-foreground mb-4">{study.title}</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result) => (
                            <li key={result} className="text-sm text-muted-foreground flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span>{result}</span>
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-light text-white mb-6">
              Transform Your Financial Services Operations
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help your financial institution achieve 
              operational excellence while maintaining security and compliance.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Download Case Study
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}