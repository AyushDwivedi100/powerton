import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { 
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  ToggleLeft,
  Activity,
  Zap,
  Shield,
  Phone,
  Mail,
  Download
} from "lucide-react";
import switchesImage from '@assets/generated_images/Industrial_Switches_Display_465e5621.png';
import { Link } from "wouter";

export default function ProductSwitches() {
  useScrollAnimations();

  const product = {
    title: "Switches & Indicators",
    shortDescription: "Industrial-grade switches, pushbuttons, indicators, and control panel components",
    fullDescription: "Complete range of industrial control components including pushbuttons, selector switches, emergency stops, pilot lights, and stack lights with LED technology.",
    image: switchesImage,
    keyBenefits: ["High Reliability & Durability", "Easy Installation & Maintenance", "Comprehensive Safety Compliance", "Cost-Effective Solutions"],
    specifications: [
      "Contact Rating: 10A at 250VAC",
      "Operating Temperature: -25°C to +70°C",
      "Protection Rating: IP65/IP67",
      "Mounting: 22mm/30mm Panel Cutout",
      "LED Life: >50,000 hours",
      "Contact Configuration: NO/NC/DPDT"
    ],
    applications: [
      "Control Panel Integration",
      "Emergency Stop Systems",
      "Machine Control",
      "Process Indication",
      "Safety Interlocks",
      "Status Monitoring"
    ],
    industries: [
      "Manufacturing",
      "Process Control",
      "Material Handling",
      "Packaging",
      "Food Processing",
      "Automotive"
    ],
    features: [
      "LED Illumination",
      "Multiple Colors Available",
      "Maintained/Momentary Action",
      "Vandal Resistant Design",
      "Quick Connect Terminals",
      "Modular Construction",
      "Emergency Stop Function",
      "Ergonomic Design"
    ],
    certifications: [
      "UL Listed",
      "CE Marked",
      "CSA Certified",
      "IEC 60947-5-1",
      "RoHS Compliant",
      "ISO 13850"
    ]
  };

  return (
    <>
      <SEO
        title="Industrial Switches & Indicators - Control Panel Components | Powerton Engineering"
        description="Industrial-grade switches, pushbuttons, indicators, and control panel components. Emergency stops, pilot lights, selector switches for automation and control systems."
        keywords="industrial switches, pushbutton switches, control panel components, emergency stops, pilot lights, indicators, selector switches"
        canonicalUrl="https://powertonengineering.in/products/switches"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${switchesImage})`,
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Link href="/products/instrumentation-components">
              <Button variant="ghost" className="mb-6 hover:bg-white/10 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Instrumentation Components
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <ToggleLeft className="w-16 h-16 text-secondary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-secondary">Switches</span> & Indicators
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
                  className="border-2 border-border text-white hover:bg-background hover:text-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
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
                alt={`ID-840: ${product.title} - Industrial control panel switches and indicators`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Reliable Control Interface
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
                    Request Sample
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Component Types */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Control Panel Components
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete range of switches, indicators, and operator interface devices
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Pushbuttons', desc: '16mm, 22mm, 30mm momentary and maintained', icon: 'ToggleLeft' },
              { name: 'Indicators', desc: 'LED pilot lights in multiple colors', icon: 'Activity' },
              { name: 'Emergency Stops', desc: 'Safety-certified mushroom head switches', icon: 'Shield' },
              { name: 'Selector Switches', desc: 'Multi-position rotary and key switches', icon: 'Zap' }
            ].map((component, index) => (
              <AnimatedSection key={index} animation="fade-in-up">
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ToggleLeft className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{component.name}</h3>
                    <p className="text-sm text-muted-foreground">{component.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Robust specifications for reliable industrial operation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Custom Control Panel Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our control panel experts can help design and specify the right switches and indicators for your application.
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
                  className="border-2 border-border text-white hover:bg-background hover:text-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
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