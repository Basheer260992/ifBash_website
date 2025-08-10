import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Building,
  Globe,
  Award,
  Target,
  BarChart3,
  Database
} from "lucide-react";

export default function AIMachineLearningPage() {
  const challenges = [
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics",
      icon: BarChart3
    },
    {
      title: "Predictive Modeling",
      description: "Implement machine learning models for forecasting and optimization",
      icon: Target
    },
    {
      title: "Process Automation",
      description: "Automate complex business processes with intelligent workflows",
      icon: Zap
    },
    {
      title: "Intelligent Insights",
      description: "Generate real-time insights and recommendations using AI",
      icon: Brain
    }
  ];

  const solutions = [
    {
      title: "AI-Powered ServiceNow Solutions",
      description: "Intelligent automation and machine learning capabilities integrated into ServiceNow platform",
      features: ["Predictive Analytics", "Intelligent Automation", "AI-Driven Insights", "Smart Process Optimization"],
      benefits: ["60% faster issue resolution", "Predictive maintenance capabilities", "Automated decision-making"]
    },
    {
      title: "SAP AI & Machine Learning",
      description: "Advanced AI and ML solutions built on SAP platforms for intelligent business operations",
      features: ["SAP AI Core", "Machine Learning Models", "Intelligent Data Processing", "Automated Workflows"],
      benefits: ["Real-time predictive insights", "Automated business processes", "Enhanced decision accuracy"]
    }
  ];

  const caseStudies = [
    {
      title: "Manufacturing AI Optimization",
      challenge: "Manual quality control processes causing production delays and inconsistent quality",
      solution: "AI-powered quality control system with computer vision and predictive analytics",
      results: ["40% reduction in defects", "Real-time quality monitoring", "Predictive maintenance implementation"]
    },
    {
      title: "Healthcare Predictive Analytics",
      challenge: "Reactive patient care and resource allocation leading to inefficiencies",
      solution: "Machine learning models for patient outcome prediction and resource optimization",
      results: ["30% improvement in patient outcomes", "Optimized resource allocation", "Predictive health insights"]
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
                <Brain className="h-8 w-8 text-primary" />
                <Badge variant="outline" className="text-primary border-primary/20">Industry</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-foreground leading-tight">
                AI & Machine
                <span className="block font-medium moondust-text-gradient">
                  Learning
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Empowering organizations with cutting-edge AI and machine learning solutions 
                that drive intelligent automation, predictive insights, and data-driven decision making.
              </p>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* AI Challenges */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">AI Implementation Challenges</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the key challenges in implementing AI and machine learning solutions
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

      {/* Our AI Solutions */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Our AI Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI and machine learning solutions designed for enterprise transformation
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
            <h2 className="text-3xl font-light text-foreground mb-4">AI Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real results from our AI and machine learning implementations
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
                        <h4 className="font-medium text-foreground mb-2">AI Solution</h4>
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
              Transform Your Business with AI
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and machine learning expertise can drive intelligent 
              automation and data-driven insights for your organization.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Schedule AI Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Download AI Case Study
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}