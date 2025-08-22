import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { getInstrumentationProduct } from "@/data/instrumentation-products";
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Thermometer,
  Activity,
  Zap,
  Shield,
  Phone,
  Mail,
  Download
} from "lucide-react";
import sensorsBgImage from '@assets/generated_images/Industrial_Sensors_Setup_491af3bc.png';
import { Link } from "wouter";

export default function ProductSensors() {
  useScrollAnimations();
  const product = getInstrumentationProduct('sensors');
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <SEO
        title="Industrial Sensors - Temperature, Pressure, Flow & Position Sensors | Powerton Engineering"
        description="Comprehensive range of industrial-grade sensors including temperature sensors, pressure transmitters, flow meters, position sensors, and specialized automation sensors for process control."
        keywords="industrial sensors, temperature sensors, pressure transmitters, flow meters, position sensors, proximity sensors, automation sensors, process control sensors"
        canonicalUrl="https://powertonengineering.in/products/sensors"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${sensorsBgImage})` }}
        />
        <div className="absolute inset-0 hero-bg-sensors"></div>
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Thermometer className="w-16 h-16 text-secondary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Industrial <span className="text-secondary">Sensors</span>
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
                alt={`ID-837: ${product.title} - Industrial automation sensors for process control`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Advanced Sensor Technology
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
                  Download Datasheet
                </Button>
                <Link href="/contact">
                  <Button variant="outline">
                    Request Information
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
                Detailed technical specifications and performance characteristics
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

      {/* Features & Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Features & Benefits
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced features designed for industrial reliability and performance
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
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Certifications & Standards
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compliant with international standards and safety certifications
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
              Need Expert Sensor Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our technical experts are ready to help you select the perfect sensors for your industrial automation needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
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