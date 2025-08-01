import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Building, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Download,
  Calendar,
  BarChart3,
  Shield,
  Settings,
  Database
} from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Global Bank Digital Transformation",
      client: "Fortune 500 Financial Institution",
      industry: "Financial Services",
      duration: "18 months",
      teamSize: "25 consultants",
      platform: "ServiceNow",
      icon: BarChart3,
      challenge: "Legacy IT infrastructure causing operational inefficiencies, security vulnerabilities, and compliance risks across 50+ countries.",
      solution: "Complete ServiceNow ITSM, SecOps, and GRC implementation with custom workflows, automated compliance reporting, and integrated security operations.",
      results: [
        "50% reduction in security incident response time",
        "40% improvement in IT service delivery",
        "30% faster regulatory compliance reporting",
        "95% user satisfaction score",
        "$2.5M annual cost savings"
      ],
      technologies: ["ServiceNow ITSM", "Security Operations", "GRC", "Integration Hub"],
      downloadUrl: "/case-studies/global-bank-transformation.pdf"
    },
    {
      title: "Healthcare Network ERP Modernization",
      client: "Major Healthcare Provider",
      industry: "Healthcare",
      duration: "24 months",
      teamSize: "30 consultants",
      platform: "SAP",
      icon: Database,
      challenge: "Outdated ERP system limiting operational efficiency, patient care coordination, and financial reporting across 200+ facilities.",
      solution: "SAP S/4HANA implementation with integrated analytics, supply chain optimization, and real-time financial reporting capabilities.",
      results: [
        "35% improvement in supply chain efficiency",
        "Real-time financial visibility across all facilities",
        "25% reduction in administrative costs",
        "Enhanced patient care coordination",
        "HIPAA compliance achieved"
      ],
      technologies: ["SAP S/4HANA", "SAP Analytics Cloud", "SAP Ariba", "Integration Services"],
      downloadUrl: "/case-studies/healthcare-erp-modernization.pdf"
    },
    {
      title: "Manufacturing Giant Process Automation",
      client: "Global Manufacturing Company",
      industry: "Manufacturing",
      duration: "15 months",
      teamSize: "20 consultants",
      platform: "ServiceNow",
      icon: Settings,
      challenge: "Manual processes causing production delays, quality issues, and lack of visibility across 150+ manufacturing sites worldwide.",
      solution: "ServiceNow ITOM and custom application development for production workflow automation, quality management, and real-time monitoring.",
      results: [
        "30% reduction in production downtime",
        "Real-time visibility across all sites",
        "Automated quality control processes",
        "50% faster issue resolution",
        "$5M annual operational savings"
      ],
      technologies: ["ServiceNow ITOM", "App Engine", "Flow Designer", "Performance Analytics"],
      downloadUrl: "/case-studies/manufacturing-automation.pdf"
    },
    {
      title: "Retail Chain HR Transformation",
      client: "International Retail Corporation",
      industry: "Retail",
      duration: "12 months",
      teamSize: "15 consultants",
      platform: "SAP",
      icon: Users,
      challenge: "Fragmented HR processes across 1,000+ stores, poor employee experience, and lack of workforce analytics.",
      solution: "SAP SuccessFactors implementation with employee self-service, performance management, and workforce analytics.",
      results: [
        "90% employee satisfaction improvement",
        "60% reduction in HR administrative tasks",
        "Unified workforce management",
        "Data-driven HR decisions",
        "50% faster hiring process"
      ],
      technologies: ["SAP SuccessFactors", "Employee Central", "Performance & Goals", "Analytics"],
      downloadUrl: "/case-studies/retail-hr-transformation.pdf"
    },
    {
      title: "Government Agency Security Enhancement",
      client: "Federal Government Agency",
      industry: "Public Sector",
      duration: "20 months",
      teamSize: "35 consultants",
      platform: "ServiceNow",
      icon: Shield,
      challenge: "Critical security vulnerabilities, manual compliance processes, and lack of integrated threat response across multiple departments.",
      solution: "ServiceNow Security Operations implementation with automated vulnerability management, threat intelligence, and compliance reporting.",
      results: [
        "Zero security breaches post-implementation",
        "75% faster vulnerability remediation",
        "Automated compliance reporting",
        "Integrated threat intelligence",
        "Enhanced citizen data protection"
      ],
      technologies: ["ServiceNow SecOps", "Vulnerability Response", "Threat Intelligence", "GRC"],
      downloadUrl: "/case-studies/government-security-enhancement.pdf"
    },
    {
      title: "Tech Startup Scaling Solution",
      client: "Fast-Growing Technology Company",
      industry: "Technology",
      duration: "8 months",
      teamSize: "12 consultants",
      platform: "ServiceNow",
      icon: TrendingUp,
      challenge: "Rapid growth overwhelming manual processes, lack of IT service management, and poor employee onboarding experience.",
      solution: "ServiceNow ITSM and HRSD implementation with automated workflows, self-service portals, and integrated onboarding processes.",
      results: [
        "300% improvement in IT response time",
        "Seamless employee onboarding",
        "95% reduction in manual tasks",
        "Scalable IT operations",
        "Enhanced employee experience"
      ],
      technologies: ["ServiceNow ITSM", "HR Service Delivery", "Service Portal", "Workflow"],
      downloadUrl: "/case-studies/tech-startup-scaling.pdf"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Building },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "50+", label: "Enterprise Clients", icon: Users },
    { number: "$50M+", label: "Client Savings", icon: BarChart3 }
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
                Case
                <span className="block font-medium moondust-text-gradient">
                  Studies
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore real-world success stories and measurable results from our ServiceNow 
                and SAP implementations across diverse industries and organizations.
              </p>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
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
              Detailed case studies showcasing our expertise and the transformative results we deliver
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="space-y-12">
            {caseStudies.map((study, index) => (
              <StaggerItem key={study.title}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                      <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <study.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-medium text-foreground">{study.title}</h3>
                          <p className="text-muted-foreground">{study.client}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-primary border-primary/20">
                          {study.industry}
                        </Badge>
                        <Badge variant="outline" className="text-chart-4 border-chart-4/20">
                          {study.platform}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Duration: {study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Team: {study.teamSize}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Settings className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Platform: {study.platform}</span>
                      </div>
                    </div>

                    {/* Challenge, Solution, Results */}
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Challenge</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Solution</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.slice(0, 3).map((result) => (
                            <li key={result} className="flex items-start space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span key={tech} className="text-xs bg-secondary/50 text-foreground px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="flex justify-end">
                      <Button variant="outline" className="flex items-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download Full Case Study</span>
                      </Button>
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
              Ready to Create Your Success Story?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your organization achieve similar transformative results 
              with our proven ServiceNow and SAP expertise.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}