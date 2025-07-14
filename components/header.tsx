"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Globe,
  ChevronDown,
  Settings,
  Database,
  Users,
  BarChart3,
  Shield,
  Workflow,
  Building,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const serviceItems = [
  {
    title: "ServiceNow Implementation",
    href: "/services/servicenow-implementation",
    description: "End-to-end ServiceNow platform implementation and configuration",
    icon: Settings,
  },
  {
    title: "SAP Consulting",
    href: "/services/sap-consulting",
    description: "Comprehensive SAP solutions and enterprise integration",
    icon: Database,
  },
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Strategic digital transformation consulting and roadmaps",
    icon: Workflow,
  },
  {
    title: "Process Optimization",
    href: "/services/process-optimization",
    description: "Business process analysis and optimization strategies",
    icon: BarChart3,
  },
];

const portfolioItems = {
  servicenow: [
    {
      title: "IT Service Management (ITSM)",
      href: "/portfolio/servicenow/itsm",
      description: "Incident, Problem, Change, and Service Request Management",
    },
    {
      title: "IT Operations Management (ITOM)",
      href: "/portfolio/servicenow/itom",
      description: "Discovery, Event Management, and Orchestration",
    },
    {
      title: "Security Operations (SecOps)",
      href: "/portfolio/servicenow/secops",
      description: "Vulnerability Response and Security Incident Response",
    },
    {
      title: "HR Service Delivery",
      href: "/portfolio/servicenow/hrsd",
      description: "Employee Service Center and HR Case Management",
    },
    {
      title: "Customer Service Management",
      href: "/portfolio/servicenow/csm",
      description: "Customer Service Operations and Field Service Management",
    },
    {
      title: "App Engine & Development",
      href: "/portfolio/servicenow/app-engine",
      description: "Custom Application Development and Platform Automation",
    },
  ],
  sap: [
    {
      title: "SAP S/4HANA",
      href: "/portfolio/sap/s4hana",
      description: "Next-generation ERP suite implementation and migration",
    },
    {
      title: "SAP SuccessFactors",
      href: "/portfolio/sap/successfactors",
      description: "Cloud-based Human Capital Management solutions",
    },
    {
      title: "SAP Ariba",
      href: "/portfolio/sap/ariba",
      description: "Procurement and supply chain management solutions",
    },
    {
      title: "SAP Concur",
      href: "/portfolio/sap/concur",
      description: "Travel and expense management solutions",
    },
    {
      title: "SAP Analytics Cloud",
      href: "/portfolio/sap/analytics-cloud",
      description: "Business intelligence and analytics platform",
    },
    {
      title: "SAP Integration",
      href: "/portfolio/sap/integration",
      description: "API management and system integration solutions",
    },
  ],
};

const industryItems = [
  {
    title: "Financial Services",
    href: "/industries/financial-services",
    description: "Banking, insurance, and investment solutions",
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    description: "Healthcare providers and life sciences",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description: "Discrete and process manufacturing solutions",
  },
  {
    title: "Retail & Consumer",
    href: "/industries/retail",
    description: "Retail operations and consumer goods",
  },
  {
    title: "Public Sector",
    href: "/industries/public-sector",
    description: "Government and public service organizations",
  },
  {
    title: "Technology",
    href: "/industries/technology",
    description: "Software and technology companies",
  },
];

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    children: React.ReactNode;
    icon?: React.ComponentType<{ className?: string }>;
  }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Header() {
  const [currentLanguage, setCurrentLanguage] = React.useState("en");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded moondust-gradient flex items-center justify-center moondust-glow">
              <span className="text-white font-bold text-sm">TC</span>
            </div>
            <span className="font-semibold text-xl moondust-text-gradient">TechConsult</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground/80 hover:text-foreground">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    {serviceItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Portfolio */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground/80 hover:text-foreground">
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-4">
                    <div className="grid grid-cols-2 gap-6">
                      {/* ServiceNow */}
                      <div>
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-border">
                          <Settings className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold text-foreground">ServiceNow</h3>
                        </div>
                        <ul className="space-y-2">
                          {portfolioItems.servicenow.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="block p-2 rounded-md hover:bg-accent transition-colors"
                              >
                                <div className="text-sm font-medium text-foreground">{item.title}</div>
                                <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* SAP */}
                      <div>
                        <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-border">
                          <Database className="h-5 w-5 text-chart-4" />
                          <h3 className="font-semibold text-foreground">SAP</h3>
                        </div>
                        <ul className="space-y-2">
                          {portfolioItems.sap.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="block p-2 rounded-md hover:bg-accent transition-colors"
                              >
                                <div className="text-sm font-medium text-foreground">{item.title}</div>
                                <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground/80 hover:text-foreground">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    {industryItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={Building}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Careers */}
              <NavigationMenuItem>
                <Link href="/careers" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground/80 hover:text-foreground")}>
                    <Briefcase className="h-4 w-4 mr-2" />
                    Careers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Learning Center */}
              <NavigationMenuItem>
                <Link href="/learning-center" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-foreground/80 hover:text-foreground")}>
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Learning Center
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
                <Globe className="h-4 w-4 mr-1" />
                {languages.find(lang => lang.code === currentLanguage)?.flag}
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => setCurrentLanguage(language.code)}
                  className="flex items-center space-x-2"
                >
                  <span>{language.flag}</span>
                  <span>{language.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="/services" className="text-lg font-medium text-foreground hover:text-primary">
                    Services
                  </Link>
                  <div className="pl-4 space-y-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  
                  <Link href="/portfolio" className="text-lg font-medium text-foreground hover:text-primary">
                    Portfolio
                  </Link>
                  <div className="pl-4 space-y-3">
                    <div>
                      <div className="text-sm font-medium text-foreground mb-2">ServiceNow</div>
                      <div className="space-y-1">
                        {portfolioItems.servicenow.slice(0, 3).map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-xs text-muted-foreground hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground mb-2">SAP</div>
                      <div className="space-y-1">
                        {portfolioItems.sap.slice(0, 3).map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block text-xs text-muted-foreground hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link href="/industries" className="text-lg font-medium text-foreground hover:text-primary">
                    Industries
                  </Link>
                  <Link href="/careers" className="text-lg font-medium text-foreground hover:text-primary">
                    Careers
                  </Link>
                  <Link href="/learning-center" className="text-lg font-medium text-foreground hover:text-primary">
                    Learning Center
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}