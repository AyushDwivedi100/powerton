import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Radio,
  Activity,
  Zap,
  Shield,
  Phone,
  Mail,
  Download
} from "lucide-react";
import { Link } from "wouter";

export default function ProductTransmitters() {
  useScrollAnimations();

  const product = {
    shortDescription: "Precision transmitters for pressure, temperature, flow, and level measurement",
    fullDescription: "Comprehensive range of industrial transmitters with advanced technologies including strain gauge, capacitive, and piezoresistive sensing with HART digital communication.",
    keyBenefits: ["Industry-Leading Accuracy", "Reduced Total Cost of Ownership", "Enhanced Process Optimization", "Improved Safety & Reliability"]
  };

  return (
    <>
      <SEO
        title="Industrial Transmitters & Transducers - Pressure, Temperature, Flow | Powerton Engineering"
        description="Precision industrial transmitters and transducers for pressure, temperature, flow, and level measurement. HART, Foundation Fieldbus, and wireless solutions for process control."
        keywords="industrial transmitters, pressure transmitters, temperature transmitters, flow transmitters, level transmitters, HART transmitters, process instrumentation"
        canonicalUrl="https://powertonengineering.in/products/transmitters"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div className="absolute inset-0 hero-bg-transmitters"></div>
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Radio className="w-16 h-16 text-secondary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-secondary">Transmitters</span> & Transducers
              </h1>
            </div>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {product.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  Get Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-background hover:text-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <img 
                src={product.image}
                alt={`ID-838: ${product.title} - Industrial pressure and temperature transmitters`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Precision Measurement Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.fullDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {product.keyBenefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Download className="mr-2 w-4 h-4" />
                  Download Catalog
                </Button>
                <Link href="/contact">
                  <Button variant="outline">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Industry-leading accuracy and reliability specifications
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Specifications Card */}
            <AnimatedSection animation="fade-in-up">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Activity className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Specifications</h3>
                  </div>
                  <div className="space-y-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-start">
                        <Star className="w-4 h-4 text-secondary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Applications Card */}
            <AnimatedSection animation="fade-in-up">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Zap className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Applications</h3>
                  </div>
                  <div className="space-y-4">
                    {product.applications.map((app, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Industries Card */}
            <AnimatedSection animation="fade-in-up">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Industries</h3>
                  </div>
                  <div className="space-y-4">
                    {product.industries.map((industry, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{industry}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leading Brands */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Trusted Brands & Technologies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We partner with industry leaders to provide the most reliable transmitter solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Emerson Rosemount', specialty: 'Coplanar Technology' },
              { name: 'ABB', specialty: 'Smart Transmitters' },
              { name: 'Yokogawa', specialty: 'DPharp Sensors' },
              { name: 'Honeywell', specialty: 'SmartLine Series' }
            ].map((brand, index) => (
              <AnimatedSection key={index} animation="fade-in-up">
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Radio className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{brand.name}</h3>
                    <p className="text-sm text-muted-foreground">{brand.specialty}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Advanced Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Smart features for enhanced performance and reliability
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => (
              <AnimatedSection key={index} animation="fade-in-up">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{feature}</h3>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Standards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Certifications & Standards
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meeting the highest industry standards for safety and performance
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4">
            {product.certifications.map((cert, index) => (
              <AnimatedSection key={index} animation="fade-in-up">
                <Badge variant="outline" className="px-6 py-3 text-lg font-semibold">
                  {cert}
                </Badge>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Precision Transmitter Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact our instrumentation experts for customized transmitter recommendations and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Expert
                </Button>
              </Link>
              <Link href="/quote">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-background hover:text-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Get Quote
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}