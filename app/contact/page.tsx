import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Building,
  Users,
  MessageSquare,
  Globe
} from "lucide-react";

export default function ContactPage() {
  const offices = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 500\nNew York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@techconsult.com"
    },
    {
      city: "Chicago",
      address: "456 Corporate Blvd, Floor 12\nChicago, IL 60601",
      phone: "+1 (555) 234-5678",
      email: "chicago@techconsult.com"
    },
    {
      city: "San Francisco",
      address: "789 Innovation St, Suite 300\nSan Francisco, CA 94105",
      phone: "+1 (555) 345-6789",
      email: "sf@techconsult.com"
    }
  ];

  const contactMethods = [
    {
      title: "General Inquiries",
      description: "Questions about our services or company",
      icon: MessageSquare,
      contact: "info@techconsult.com"
    },
    {
      title: "Sales",
      description: "Discuss your project requirements",
      icon: Building,
      contact: "sales@techconsult.com"
    },
    {
      title: "Careers",
      description: "Join our team of experts",
      icon: Users,
      contact: "careers@techconsult.com"
    },
    {
      title: "Support",
      description: "Technical support for existing clients",
      icon: Phone,
      contact: "support@techconsult.com"
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
                Contact
                <span className="block font-medium moondust-text-gradient">
                  Us
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? Get in touch with our experts to discuss 
                your ServiceNow and SAP consulting needs.
              </p>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollAnimation>
              <Card className="moondust-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-medium text-foreground">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@company.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company Name" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full moondust-gradient hover:opacity-90 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>

            {/* Contact Information */}
            <ScrollAnimation delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-medium text-foreground mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div className="text-muted-foreground">info@techconsult.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Business Hours</div>
                        <div className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM EST</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">Contact Methods</h3>
                  <div className="space-y-3">
                    {contactMethods.map((method) => (
                      <div key={method.title} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20">
                        <method.icon className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium text-foreground text-sm">{method.title}</div>
                          <div className="text-muted-foreground text-xs">{method.description}</div>
                          <div className="text-primary text-xs">{method.contact}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="text-center mb-16">
            <h2 className="text-3xl font-light text-foreground mb-4">Our Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at one of our locations or connect with our global team
            </p>
          </ScrollAnimation>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <StaggerItem key={office.city}>
                <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-medium text-foreground">
                      {office.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="font-medium text-foreground text-sm mb-1">Address</div>
                      <div className="text-muted-foreground text-sm whitespace-pre-line">
                        {office.address}
                      </div>
                    </div>
                    
                    <div>
                      <div className="font-medium text-foreground text-sm mb-1">Phone</div>
                      <div className="text-muted-foreground text-sm">{office.phone}</div>
                    </div>
                    
                    <div>
                      <div className="font-medium text-foreground text-sm mb-1">Email</div>
                      <div className="text-primary text-sm">{office.email}</div>
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
              Ready to Get Started?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experts to discuss your ServiceNow 
              and SAP transformation needs.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}