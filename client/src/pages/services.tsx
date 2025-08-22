import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/data/constants";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { 
  Gauge, 
  Wrench, 
  Shield, 
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award,
  Truck,
  Sun,
  Hammer
} from "lucide-react";
import { Link } from "wouter";

const iconMap = {
  "tools": Hammer,
  "wrench": Wrench,
  "gauge": Gauge,
  "users": Users,
  "cog": Settings,
  "truck": Truck,
  "shield": Shield,
  "sun": Sun
};

export default function Services() {
  useScrollAnimations();

  return (
    <>
      <SEO 
        title="Professional Engineering Services - Powerton Engineering"
        description="Comprehensive engineering services including installation, maintenance, calibration, consultation, custom solutions, supply chain management, technical support, and solar EPC services."
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative py-20 md:py-32 lg:py-40 overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="absolute inset-0 bg-primary/85"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/70"></div>
          
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
              <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Professional Engineering Services
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Comprehensive solutions for all your industrial automation and electrical engineering needs
                </p>
                <Link href="/quote">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From installation and commissioning to technical support and solar EPC, we provide comprehensive engineering solutions.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
              {SERVICES.map((service, index) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings;
                
                return (
                  <AnimatedSection key={service.id} animation="fadeInUp" delay={0.3 + index * 0.1}>
                    <Link href={`/services/${service.id}`}>
                      <Card className="w-[350px] h-[420px] hover:shadow-xl transition-all duration-300 cursor-pointer group border-border flex flex-col">
                        <CardHeader className="pb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col h-full">
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {service.description}
                          </p>
                          
                          <div className="space-y-3 mb-6 flex-1">
                            <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="mt-auto">
                            <Button variant="ghost" className="text-secondary hover:text-secondary/80 p-0 font-semibold transition-all duration-300">
                              Learn More 
                              <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose Powerton Engineering?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  With years of experience and a commitment to excellence, we deliver reliable solutions that drive your business forward.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="fadeInUp" delay={0.3}>
                <Card className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                    <p className="text-muted-foreground text-sm">Certified professionals with extensive industry experience</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.4}>
                <Card className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground text-sm">Round-the-clock technical support and emergency services</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.5}>
                <Card className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
                    <p className="text-muted-foreground text-sm">ISO certified processes and guaranteed quality standards</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.6}>
                <Card className="text-center border-border">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Client Focused</h3>
                    <p className="text-muted-foreground text-sm">Customized solutions tailored to your specific requirements</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Contact us today to discuss your project requirements and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}