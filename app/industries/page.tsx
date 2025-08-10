import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Building, 
  Heart, 
  Factory, 
  ShoppingBag, 
  Landmark, 
  Laptop,
  BarChart3,
  Users,
  Shield,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Healthcare",
      description: "Healthcare providers and life sciences with patient care optimization and compliance",
      icon: Heart,
      href: "/industries/healthcare",
      challenges: ["Patient Care", "Compliance", "Data Security", "Operational Efficiency"],
      color: "red"
    },
    {
      title: "Manufacturing",
      description: "Discrete and process manufacturing with supply chain optimization and quality management",
      icon: Factory,
      href: "/industries/manufacturing",
      challenges: ["Supply Chain", "Quality Control", "Asset Management", "Production Planning"],
      color: "orange"
    },
    {
      title: "Retail & Consumer",
      description: "Retail operations and consumer goods with omnichannel experiences and inventory management",
      icon: ShoppingBag,
      href: "/industries/retail",
      challenges: ["Omnichannel", "Inventory Management", "Customer Analytics", "Supply Chain"],
      color: "green"
    },
    {
      title: "Public Sector",
      description: "Government and public service organizations with citizen services and transparency",
      icon: Landmark,
      href: "/industries/public-sector",
      challenges: ["Citizen Services", "Transparency", "Compliance", "Digital Government"],
      color: "purple"
    },
    {
      title: "Technology",
      description: "Software and technology companies with innovation acceleration and scalability",
      icon: Laptop,
      href: "/industries/technology",
      challenges: ["Innovation", "Scalability", "DevOps", "Customer Success"],
      color: "indigo"
    },
    {
      title: "AI & Machine Learning",
      description: "AI-powered solutions and machine learning implementations for intelligent automation",
      icon: BarChart3,
      href: "/industries/ai-machine-learning",
      challenges: ["Data Analytics", "Predictive Modeling", "Process Automation", "Intelligent Insights"],
      color: "blue"
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
                Industries We
                <span className="block font-medium moondust-text-gradient">
                  Serve
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Deep industry expertise across multiple sectors, delivering tailored solutions 
                that address specific challenges and drive measurable results.
              </p>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <StaggerItem key={industry.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <industry.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-primary border-primary/20">
                        Industry
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl font-medium text-foreground">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Key Challenges:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.challenges.map((challenge) => (
                          <div key={challenge} className="text-xs text-muted-foreground bg-secondary/50 rounded px-2 py-1">
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link href={industry.href}>
                      <Button className="w-full moondust-gradient hover:opacity-90 text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Our Industry Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proven track record of delivering successful solutions across diverse industries
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Domain Experts</h3>
                <p className="text-muted-foreground text-sm">
                  Industry specialists with deep sector knowledge and experience.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Compliance Ready</h3>
                <p className="text-muted-foreground text-sm">
                  Solutions designed to meet industry-specific regulatory requirements.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Best Practices</h3>
                <p className="text-muted-foreground text-sm">
                  Industry-proven methodologies and implementation approaches.
                </p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Scalable Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Enterprise-grade solutions that grow with your business needs.
                </p>
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
              Ready to Transform Your Industry?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry expertise can address your specific challenges and opportunities.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Schedule Consultation
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