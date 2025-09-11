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
  Zap,
  Activity,
  Shield,
  Phone,
  Mail,
  Download
} from "lucide-react";
import signalConditionersImage from '@assets/generated_images/Signal_Processing_Laboratory_d26b0005.png';
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function ProductSignalConditioners() {
  const { t } = useTranslation(['products', 'common']);
  useScrollAnimations();

  const product = {
    title: "Signal Conditioners",
    shortDescription: "Isolation amplifiers and signal conditioning solutions for industrial automation",
    fullDescription: "Advanced signal conditioning solutions including isolation amplifiers, signal converters, and measuring transducers with galvanic isolation up to 2.5kV.",
    image: signalConditionersImage,
    keyBenefits: ["Enhanced Signal Integrity", "Improved Safety & Protection", "Reduced Installation Time", "Flexible Configuration"],
    specifications: [
      "Isolation Voltage: 300V to 2.5kV test voltage",
      "Signal Types: 0-20mA, 4-20mA, 0-10V, ±10V",
      "Accuracy: 0.5% at 25°C",
      "Bandwidth: Up to 400kHz",
      "Mounting: DIN rail 6mm to 22.5mm width",
      "Power: 24-110V DC / 110-230V AC"
    ],
    applications: [
      "Process Control Systems",
      "Data Acquisition",
      "Ground Loop Elimination",
      "Noise Filtering",
      "Safety Circuits",
      "Hazardous Area Interfaces"
    ],
    industries: [
      "Process Control",
      "Power Generation",
      "Automotive",
      "Aerospace",
      "Medical Equipment",
      "Railway Systems"
    ],
    features: [
      "SIL 2/3 Functional Safety Certified",
      "HART Communication Support",
      "Smartphone App Configuration",
      "Pluggable Connection Technology",
      "Universal Input/Output Options",
      "Ex Zone Compliance"
    ],
    certifications: [
      "SIL 2/3",
      "EN 61508",
      "ATEX",
      "IECEx",
      "UL",
      "CSA"
    ]
  };

  return (
    <>
      <SEO
        title="Signal Conditioners & Isolation Amplifiers - Industrial Automation | Powerton Engineering"
        description="Signal conditioning solutions with galvanic isolation, signal amplification, and noise filtering. DIN rail mounted isolators for industrial process control and data acquisition."
        keywords="signal conditioners, isolation amplifiers, signal isolators, galvanic isolation, signal converters, DIN rail isolators"
        canonicalUrl="https://powertonengineering.in/products/signal-conditioners"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${signalConditionersImage})`,
            
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Link href="/products/instrumentation-components">
              <Button variant="ghost" className="mb-6 hover:bg-white/10 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
{t('common:navigation.backToInstrumentationComponents')}
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-16 h-16 text-secondary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Signal <span className="text-secondary">Conditioners</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {product.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  {t('common:buttons.getQuote')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-border text-white hover:bg-background hover:text-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  {t('common:buttons.contactUs')}
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
                alt={`ID-843: ${product.title} - Industrial signal conditioning and isolation amplifiers`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Signal Integrity Solutions
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
                  {t('common:buttons.downloadGuide')}
                </Button>
                <Link href="/contact">
                  <Button variant="outline">
                    Signal Analysis
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Core Functions & Capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential signal conditioning functions for reliable industrial automation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Signal Isolation', desc: 'Galvanic separation up to 2.5kV', icon: 'Shield' },
              { name: 'Signal Amplification', desc: 'Boost mV signals to standard levels', icon: 'Zap' },
              { name: 'Signal Conversion', desc: 'Voltage/current and analog/digital conversion', icon: 'Activity' },
              { name: 'Noise Filtering', desc: 'EMI elimination and ground loop protection', icon: 'Shield' }
            ].map((func, index) => (
              <AnimatedSection key={index} animation="fade-in-up">
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{func.name}</h3>
                    <p className="text-sm text-muted-foreground">{func.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leading Manufacturers */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Leading Manufacturers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We partner with industry leaders to provide the highest quality signal conditioning solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'WAGO', specialty: 'JUMPFLEX® Series with smartphone configuration' },
              { name: 'Phoenix Contact', specialty: 'MACX Analog & MINI Analog Pro series' },
              { name: 'Analog Devices', specialty: 'ADuM3190/ADuM4190 isolated amplifiers' },
              { name: 'Weidmüller', specialty: 'MCZ and PICOPAK ultra-compact modules' }
            ].map((brand, index) => (
              <AnimatedSection key={index} animation="fade-in-up">
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-primary" />
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

      {/* Technical Specifications */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Precise specifications for demanding signal conditioning applications
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
              Need Signal Conditioning Solutions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our signal conditioning experts can help you select the right isolation and conditioning solutions for your application.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  Signal Expert
                </Button>
              </Link>
              <Link href="/quote">
                <Button 
                  variant="outline" 
                  className="border-2 border-border text-white hover:bg-background hover:text-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  {t('common:buttons.getQuote')}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}