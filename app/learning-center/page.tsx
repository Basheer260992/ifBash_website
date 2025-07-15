import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Award,
  Clock,
  Download,
  Play,
  Calendar,
  GraduationCap
} from "lucide-react";

export default function LearningCenterPage() {
  const resources = [
    {
      title: "ServiceNow ITSM Best Practices",
      type: "Whitepaper",
      duration: "15 min read",
      description: "Comprehensive guide to implementing ITSM best practices in ServiceNow.",
      icon: FileText,
      category: "ServiceNow"
    },
    {
      title: "SAP S/4HANA Migration Strategies",
      type: "Video Series",
      duration: "45 min",
      description: "Step-by-step approach to successful S/4HANA migration projects.",
      icon: Video,
      category: "SAP"
    },
    {
      title: "Digital Transformation Playbook",
      type: "eBook",
      duration: "30 min read",
      description: "Strategic framework for successful digital transformation initiatives.",
      icon: BookOpen,
      category: "Strategy"
    },
    {
      title: "Process Optimization Workshop",
      type: "Webinar",
      duration: "60 min",
      description: "Interactive session on identifying and eliminating process inefficiencies.",
      icon: Users,
      category: "Process"
    }
  ];

  const upcomingEvents = [
    {
      title: "ServiceNow CSM Implementation Masterclass",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      type: "Webinar",
      description: "Deep dive into Customer Service Management implementation strategies."
    },
    {
      title: "SAP Analytics Cloud Workshop",
      date: "March 22, 2024",
      time: "10:00 AM EST",
      type: "Workshop",
      description: "Hands-on workshop covering SAC best practices and use cases."
    },
    {
      title: "Digital Transformation Summit",
      date: "April 5, 2024",
      time: "9:00 AM EST",
      type: "Conference",
      description: "Full-day virtual conference on enterprise transformation trends."
    }
  ];

  const certifications = [
    {
      title: "ServiceNow Certified System Administrator",
      provider: "ServiceNow",
      level: "Beginner",
      description: "Foundational certification for ServiceNow platform administration."
    },
    {
      title: "SAP Certified Application Associate",
      provider: "SAP",
      level: "Intermediate",
      description: "Professional certification for SAP application consultants."
    },
    {
      title: "Digital Transformation Leader",
      provider: "TechConsult",
      level: "Advanced",
      description: "Executive-level certification in digital transformation strategy."
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
                Learning
                <span className="block font-medium moondust-text-gradient">
                  Center
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Expand your knowledge with our comprehensive collection of resources, training materials, 
                and expert insights on ServiceNow, SAP, and digital transformation.
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.6}>
              <Button size="lg" className="moondust-gradient hover:opacity-90 text-white px-8 py-3">
                Explore Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Featured Resources</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access our latest whitepapers, videos, and guides to stay ahead in your field
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <StaggerItem key={resource.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <resource.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-medium text-foreground">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{resource.duration}</span>
                      </span>
                      <span>{resource.type}</span>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our webinars, workshops, and conferences to learn from industry experts
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <StaggerItem key={event.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline" className="text-primary border-primary/20">
                            {event.type}
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-medium text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      </div>
                      <Button className="moondust-gradient hover:opacity-90 text-white">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Certification Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advance your career with industry-recognized certifications and training programs
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <StaggerItem key={cert.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {cert.level}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{cert.provider}</span>
                    </div>
                    <CardTitle className="text-lg font-medium text-foreground">
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <Button variant="outline" className="w-full">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
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
              Ready to Expand Your Knowledge?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who are advancing their careers with our 
              comprehensive learning resources and expert guidance.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Start Learning Today
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Contact Training Team
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}