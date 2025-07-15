import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Briefcase,
  Heart,
  TrendingUp,
  Award,
  Coffee,
  Laptop,
  Globe
} from "lucide-react";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior ServiceNow Developer",
      department: "Technology",
      location: "New York, NY",
      type: "Full-time",
      salary: "$120k - $150k",
      description: "Lead ServiceNow implementation projects and mentor junior developers."
    },
    {
      title: "SAP S/4HANA Consultant",
      department: "Consulting",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$110k - $140k",
      description: "Drive SAP S/4HANA implementations for enterprise clients."
    },
    {
      title: "Business Analyst",
      department: "Consulting",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $100k",
      description: "Analyze business requirements and design process improvements."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100k - $130k",
      description: "Manage complex enterprise transformation projects."
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness programs.",
      icon: Heart
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and career development.",
      icon: TrendingUp
    },
    {
      title: "Work-Life Balance",
      description: "Flexible work arrangements and generous PTO policy.",
      icon: Coffee
    },
    {
      title: "Competitive Compensation",
      description: "Market-leading salaries, bonuses, and equity participation.",
      icon: Award
    },
    {
      title: "Remote Work",
      description: "Hybrid and fully remote work options with modern technology.",
      icon: Laptop
    },
    {
      title: "Global Opportunities",
      description: "International projects and career advancement opportunities.",
      icon: Globe
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
                Join Our
                <span className="block font-medium moondust-text-gradient">
                  Team
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Build your career with a leading consulting firm where innovation meets expertise. 
                Join our team of passionate professionals transforming businesses worldwide.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <Button size="lg" className="moondust-gradient hover:opacity-90 text-white px-8 py-3">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Why Work With Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a culture of innovation, collaboration, and continuous learning
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <StaggerItem key={benefit.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-medium text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities and find your perfect role
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="space-y-6">
            {openPositions.map((position, index) => (
              <StaggerItem key={position.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-medium text-foreground mb-2">
                          {position.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {position.description}
                        </p>
                      </div>
                      <Button className="moondust-gradient hover:opacity-90 text-white">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <h2 className="text-3xl font-light text-foreground mb-6">Our Culture</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At TechConsult, we believe that great work comes from great people working together. 
                  Our culture is built on collaboration, innovation, and mutual respect. We foster an 
                  environment where everyone can contribute their unique perspectives and grow professionally.
                </p>
                <p>
                  We're committed to diversity, inclusion, and creating opportunities for all team members 
                  to thrive. Whether you're just starting your career or you're a seasoned professional, 
                  you'll find the support and resources you need to succeed.
                </p>
                <p>
                  Join us and be part of a team that's shaping the future of enterprise technology 
                  consulting while building meaningful careers and lasting relationships.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">4.8/5</div>
                  <div className="text-sm text-muted-foreground">Glassdoor Rating</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Internal Promotions</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Team Members</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-light text-white mb-6">
              Ready to Start Your Journey?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Don't see the perfect role? We're always looking for talented individuals 
              to join our growing team.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Submit Resume
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Contact HR
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}