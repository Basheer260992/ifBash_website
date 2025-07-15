import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Users, 
  Award, 
  Globe, 
  Target,
  CheckCircle,
  Building,
  Lightbulb,
  Shield
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Projects Delivered", icon: Target },
    { number: "50+", label: "Enterprise Clients", icon: Building },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "25+", label: "Countries Served", icon: Globe },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations.",
      icon: Award
    },
    {
      title: "Innovation",
      description: "We embrace innovation and emerging technologies to drive business transformation.",
      icon: Lightbulb
    },
    {
      title: "Integrity",
      description: "We operate with the highest standards of integrity and transparency in all our dealings.",
      icon: Shield
    },
    {
      title: "Partnership",
      description: "We build long-term partnerships with our clients, becoming trusted advisors for their success.",
      icon: Users
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
                About
                <span className="block font-medium moondust-text-gradient">
                  TechConsult
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We are a leading consulting firm specializing in ServiceNow and SAP implementations, 
                helping organizations transform their operations and achieve digital excellence.
              </p>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <h2 className="text-3xl font-light text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009, TechConsult began with a simple mission: to help organizations 
                  harness the power of enterprise technology to drive meaningful business transformation. 
                  What started as a small team of passionate consultants has grown into a global 
                  consulting firm with expertise spanning ServiceNow and SAP platforms.
                </p>
                <p>
                  Over the years, we've had the privilege of working with Fortune 500 companies, 
                  government agencies, and growing businesses across diverse industries. Our success 
                  is built on a foundation of deep technical expertise, industry knowledge, and an 
                  unwavering commitment to client success.
                </p>
                <p>
                  Today, we continue to evolve and adapt to the changing technology landscape, 
                  always staying at the forefront of innovation to deliver cutting-edge solutions 
                  that drive real business value for our clients.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={stat.label} className="moondust-card border-border shadow-sm text-center p-6">
                    <CardContent className="p-0">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-light text-foreground mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To empower organizations with transformative technology solutions that drive efficiency, 
              innovation, and sustainable growth in an ever-evolving digital landscape.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={value.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <h2 className="text-3xl font-light text-foreground mb-6">Why Choose TechConsult</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Proven Expertise</h4>
                    <p className="text-muted-foreground text-sm">
                      Deep technical knowledge and industry experience across ServiceNow and SAP platforms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Client-Centric Approach</h4>
                    <p className="text-muted-foreground text-sm">
                      Tailored solutions designed to meet your specific business needs and objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Global Reach</h4>
                    <p className="text-muted-foreground text-sm">
                      International presence with local expertise to support your global operations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Continuous Innovation</h4>
                    <p className="text-muted-foreground text-sm">
                      Stay ahead with the latest technologies and best practices in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <Card className="moondust-card border-border shadow-lg p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-medium text-foreground mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how we can help transform your business with our expertise 
                    in ServiceNow and SAP solutions.
                  </p>
                  <Button className="moondust-gradient hover:opacity-90 text-white">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-light text-white mb-6">
              Join Our Success Story
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Become part of our growing community of successful clients who have transformed 
              their operations with our expertise.
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