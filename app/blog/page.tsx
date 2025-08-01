import { Header } from "@/components/header";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  BookOpen,
  TrendingUp,
  Settings,
  Database,
  Shield,
  Users
} from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Enterprise IT: ServiceNow and AI Integration",
    excerpt: "Explore how artificial intelligence is transforming ServiceNow implementations and what it means for enterprise IT operations in 2024 and beyond.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "ServiceNow",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "future-enterprise-it-servicenow-ai"
  };

  const blogPosts = [
    {
      title: "SAP S/4HANA Migration: Best Practices and Common Pitfalls",
      excerpt: "A comprehensive guide to successful SAP S/4HANA migration, including planning strategies, risk mitigation, and lessons learned from real implementations.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "SAP",
      icon: Database,
      slug: "sap-s4hana-migration-best-practices"
    },
    {
      title: "Building a Security-First Culture with ServiceNow SecOps",
      excerpt: "How organizations can leverage ServiceNow Security Operations to create a proactive security culture and improve their overall security posture.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Security",
      icon: Shield,
      slug: "security-first-culture-servicenow-secops"
    },
    {
      title: "Digital Transformation ROI: Measuring Success Beyond Cost Savings",
      excerpt: "Understanding the true value of digital transformation initiatives and how to measure success using both quantitative and qualitative metrics.",
      author: "David Thompson",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Digital Transformation",
      icon: TrendingUp,
      slug: "digital-transformation-roi-measuring-success"
    },
    {
      title: "ServiceNow ITSM Implementation: A Step-by-Step Guide",
      excerpt: "Complete walkthrough of ServiceNow ITSM implementation, from initial planning and configuration to go-live and post-implementation optimization.",
      author: "Jennifer Park",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "ServiceNow",
      icon: Settings,
      slug: "servicenow-itsm-implementation-guide"
    },
    {
      title: "SAP SuccessFactors: Transforming HR for the Modern Workforce",
      excerpt: "How SAP SuccessFactors is helping organizations adapt their HR processes for remote work, employee engagement, and talent management.",
      author: "Robert Kim",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "SAP",
      icon: Users,
      slug: "sap-successfactors-modern-workforce"
    },
    {
      title: "Process Automation: When to Use ServiceNow vs. RPA Tools",
      excerpt: "Comparing ServiceNow's native automation capabilities with traditional RPA tools to help you choose the right approach for your processes.",
      author: "Lisa Wang",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "Automation",
      icon: Settings,
      slug: "process-automation-servicenow-vs-rpa"
    }
  ];

  const categories = [
    { name: "ServiceNow", count: 15, color: "primary" },
    { name: "SAP", count: 12, color: "chart-4" },
    { name: "Digital Transformation", count: 8, color: "chart-2" },
    { name: "Security", count: 6, color: "chart-1" },
    { name: "Automation", count: 5, color: "chart-3" }
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
                  Blog
                </span>
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Insights, best practices, and thought leadership on ServiceNow, SAP, 
                and digital transformation from our team of experts.
              </p>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation className="mb-12">
            <h2 className="text-3xl font-light text-foreground mb-4">Featured Article</h2>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <Card className="moondust-card border-border shadow-lg hover:shadow-xl hover:moondust-glow transition-all duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover rounded-l-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white">
                        {featuredPost.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-medium text-foreground mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button className="moondust-gradient hover:opacity-90 text-white">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <ScrollAnimation className="mb-12">
                <h2 className="text-3xl font-light text-foreground mb-4">Latest Articles</h2>
              </ScrollAnimation>
              
              <StaggerContainer className="space-y-8">
                {blogPosts.map((post, index) => (
                  <StaggerItem key={post.slug}>
                    <Card className="moondust-card border-border shadow-sm hover:shadow-lg hover:moondust-glow transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <post.icon className="h-6 w-6 text-primary" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="outline" className="text-primary border-primary/20">
                                {post.category}
                              </Badge>
                            </div>
                            
                            <h3 className="text-xl font-medium text-foreground mb-3 leading-tight">
                              {post.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <User className="h-3 w-3" />
                                  <span>{post.author}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{post.date}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                              
                              <Link href={`/blog/${post.slug}`}>
                                <Button variant="outline" size="sm">
                                  Read More
                                  <ArrowRight className="ml-2 h-3 w-3" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollAnimation>
                <Card className="moondust-card border-border shadow-sm mb-8">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-foreground">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category.name} className="flex items-center justify-between">
                          <span className="text-sm text-foreground">{category.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <Card className="moondust-card border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium text-foreground">Newsletter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to our newsletter for the latest insights and updates.
                    </p>
                    <Button className="w-full moondust-gradient hover:opacity-90 text-white">
                      Subscribe
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-light text-white mb-6">
              Stay Updated with Our Insights
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get the latest articles, best practices, and industry insights delivered 
              directly to your inbox.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3">
                Subscribe to Newsletter
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Follow Us
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}