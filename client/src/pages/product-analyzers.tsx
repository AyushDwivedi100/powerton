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
  FlaskConical,
  Activity,
  Zap,
  Shield,
  Phone,
  Mail,
  Download
} from "lucide-react";
import analyzersBgImage from '@assets/generated_images/Measurement_Instruments_Laboratory_a811e77b.png';
import { Link } from "wouter";

export default function ProductAnalyzers() {
  useScrollAnimations();
  const product = getInstrumentationProduct('analyzers');
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <SEO
        title="Industrial Process Analyzers - Gas & Liquid Analysis Systems | Powerton Engineering"
        description="Advanced process analyzers for gas and liquid analysis. O2, CO2, pH, conductivity, TOC analyzers with TDL technology for process optimization and environmental monitoring."
        keywords="process analyzers, gas analyzers, liquid analyzers, pH analyzers, conductivity meters, gas chromatography, process monitoring"
        canonicalUrl="https://powertonengineering.in/products/analyzers"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div className="absolute inset-0 hero-bg-analyzers"></div>
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <FlaskConical className="w-16 h-16 text-secondary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Process <span className="text-secondary">Analyzers</span>
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
                alt={`ID-842: ${product.title} - Industrial gas and liquid process analyzers`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Advanced Process Analysis
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
                  Download Brochure
                </Button>
                <Link href="/contact">
                  <Button variant="outline">
                    Analysis Consultation
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Analysis Technologies */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Analysis Technologies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced measurement technologies for precise process analysis
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: 'Gas Analysis', 
                desc: 'Advanced gas measurement technologies',
                technologies: ['Tunable Diode Laser (TDL)', 'Infrared Spectroscopy', 'Electrochemical Sensors', 'Mass Spectrometry'],
                parameters: ['O₂, CO₂, CO, H₂S', 'NH₃, CH₄, NOx, SO₂', 'Moisture content', 'Multi-component analysis']
              },
              { 
                name: 'Liquid Analysis', 
                desc: 'Comprehensive liquid parameter measurement',
                technologies: ['pH & Conductivity', 'Total Organic Carbon (TOC)', 'Turbidity Analysis', 'Dissolved Oxygen'],
                parameters: ['pH measurement', 'Conductivity levels', 'Organic content', 'Water quality parameters']
              }
            ].map((analysis, index) => (
              <AnimatedSection key={index} animation="fade-in-up">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FlaskConical className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-center text-lg">{analysis.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 text-center">{analysis.desc}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                        <ul className="space-y-1">
                          {analysis.technologies.map((tech, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <Star className="w-3 h-3 text-secondary mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Parameters:</h4>
                        <ul className="space-y-1">
                          {analysis.parameters.map((param, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{param}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
                Precision specifications for reliable process monitoring
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
              Need Process Analysis Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our process analysis experts can help you select the right analyzers for your monitoring and compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  Analysis Expert
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