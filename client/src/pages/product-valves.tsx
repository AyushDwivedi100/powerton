import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { 
  ArrowRight,
  CheckCircle,
  Star,
  Gauge,
  Activity,
  Zap,
  Shield,
  Phone,
  Mail,
  Download
} from "lucide-react";
import { Link } from "wouter";
import valvesLabImage from '@assets/generated_images/Industrial_valves_actuators_laboratory_c6f8afe0.png';

export default function ProductValves() {
  useScrollAnimations();

  const product = {
    title: "Valves & Actuators",
    shortDescription: "Industrial valve automation solutions with pneumatic, electric, and hydraulic actuators",
    fullDescription: "Comprehensive valve automation portfolio including quarter-turn and linear valves with smart technologies, IoT connectivity, and condition monitoring.",
    image: valvesLabImage,
    keyBenefits: ["Precise Flow Control", "Enhanced Safety & Reliability", "Reduced Energy Consumption", "Predictive Maintenance Capability"],
    specifications: [
      { label: "Actuator Types", value: "Pneumatic, Electric, Hydraulic" },
      { label: "Valve Sizes", value: "1/4\" to 48\" (DN8 to DN1200)" },
      { label: "Pressure Rating", value: "Up to 6000 PSI (414 bar)" },
      { label: "Temperature Range", value: "-40°F to 1000°F (-40°C to 538°C)" }
    ],
    applications: [
      "Process Control",
      "Oil & Gas",
      "Chemical Processing",
      "Water Treatment",
      "Power Generation",
      "HVAC Systems"
    ],
    industries: [
      "Oil & Gas",
      "Chemical & Petrochemical",
      "Power Generation",
      "Water & Wastewater",
      "Food & Beverage",
      "Pharmaceutical"
    ]
  };

  return (
    <>
      <SEO
        title="Industrial Valves & Actuators - Automated Control Solutions | Powerton Engineering"
        description="Industrial valve automation with pneumatic, electric, and hydraulic actuators. Ball valves, butterfly valves, control valves with smart positioners and fail-safe operation."
        keywords="industrial valves, valve actuators, pneumatic actuators, electric actuators, control valves, automated valves, smart positioners"
        canonicalUrl="https://powertonengineering.in/products/valves"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${valvesLabImage})`,
            filter: 'blur(1px)'
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Gauge className="w-16 h-16 text-secondary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-secondary">Valves</span> & Actuators
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
                alt={`ID-841: ${product.title} - Industrial automated valves and actuator systems`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Smart Valve Automation
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
                  Download Guide
                </Button>
                <Link href="/contact">
                  <Button variant="outline">
                    Valve Selection
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Actuator Types */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Actuator Technologies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the right actuator technology for your application requirements
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Pneumatic Actuators', desc: 'Fast response, safe for hazardous areas', features: ['Compressed air powered', 'Fail-safe operation', 'Explosion-proof designs'] },
              { name: 'Electric Actuators', desc: 'Precision control with digital integration', features: ['High accuracy positioning', 'Remote operation', 'Smart diagnostics'] },
              { name: 'Hydraulic Actuators', desc: 'High force applications', features: ['Self-contained systems', 'High torque output', 'Robust construction'] }
            ].map((actuator, index) => (
              <AnimatedSection key={index} animation="fade-in-up">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Gauge className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-center">{actuator.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 text-center">{actuator.desc}</p>
                    <ul className="space-y-2">
                      {actuator.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
                Comprehensive specifications for demanding industrial applications
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
              Need Custom Valve Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our valve automation experts can help you select and configure the perfect solution for your process control needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  Consult Expert
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