import React from 'react';
import { Link } from 'wouter';
import { SEO } from "@/lib/seo";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Cpu, Settings, Database } from 'lucide-react';
import plcBgImage from '@assets/generated_images/Industrial_PLC_Control_Panel_54555fe9.png';
import { getProductImageSrc, getFileBaseName } from '@/assets/images';
import { useTranslation } from 'react-i18next';

const PLCsPage = () => {
  const { t } = useTranslation(['products', 'common']);
  
  const products = [
    {
      name: "Siemens SIMATIC S7-1200",
      description: t('products:plcProducts.siemens.description'),
      features: [
        t('products:plcProducts.siemens.features.integratedIO'),
        t('products:plcProducts.siemens.features.ethernet'),
        t('products:plcProducts.siemens.features.programming'),
        t('products:plcProducts.siemens.features.failSafe')
      ],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Allen-Bradley CompactLogix 5380",
      description: t('products:plcProducts.allenBradley.description'),
      features: [
        t('products:plcProducts.allenBradley.features.safety'),
        t('products:plcProducts.allenBradley.features.ethernet'),
        t('products:plcProducts.allenBradley.features.software'),
        t('products:plcProducts.allenBradley.features.motion')
      ],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Schneider Electric Modicon M580",
      description: t('products:plcProducts.schneider.description'),
      features: [
        t('products:plcProducts.schneider.features.hotStandby'),
        t('products:plcProducts.schneider.features.ethernet'),
        t('products:plcProducts.schneider.features.software'),
        t('products:plcProducts.schneider.features.security')
      ],
      image: getProductImageSrc(getFileBaseName())
    }
  ];

  return (
    <>
      <SEO 
        title="PLCs (Programmable Logic Controllers) - Industrial Automation | Powerton Engineering"
        description="High-quality PLCs from leading manufacturers: Siemens SIMATIC, Allen-Bradley CompactLogix, Schneider Modicon. Expert PLC programming, installation & support across India."
        keywords="PLCs, programmable logic controllers, Siemens SIMATIC, Allen-Bradley CompactLogix, Schneider Modicon, industrial automation controllers, PLC programming, factory automation"
        canonicalUrl="https://powertonengineering.in/product-plcs"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "PLCs (Programmable Logic Controllers)",
          "description": "Industrial PLCs for automation and process control applications",
          "category": "Industrial Automation Equipment",
          "brand": {
            "@type": "Organization",
            "name": "Powerton Engineering Pvt. Ltd."
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR",
            "seller": {
              "@type": "Organization",
              "name": "Powerton Engineering Pvt. Ltd."
            }
          }
        }}
      />

      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${plcBgImage})`,
            
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Link href="/products/automation-control-systems">
              <Button variant="ghost" className="mb-6 hover:bg-white/10 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Automation & Control Systems
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              PLCs (Programmable Logic Controllers)
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Industrial automation controllers for reliable process control and manufacturing systems
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Digital I/O</Badge>
              <Badge variant="secondary">Analog Processing</Badge>
              <Badge variant="secondary">Communication</Badge>
              <Badge variant="secondary">Programming</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          PLC Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-primary opacity-50" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="bg-muted/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            PLC Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Processing Power</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• CPU Speed: up to 1GHz</li>
                  <li>• Memory: up to 20MB</li>
                  <li>• I/O Points: up to 8000</li>
                  <li>• Scan Time: &lt;1ms</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ethernet/IP</li>
                  <li>• Profinet</li>
                  <li>• Modbus TCP/RTU</li>
                  <li>• Serial Communications</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Ladder Logic</li>
                  <li>• Function Block</li>
                  <li>• Structured Text</li>
                  <li>• Sequential Function Chart</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Need PLC Automation Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our automation engineers can design and implement PLC systems for your manufacturing processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact PLC Experts
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PLCsPage;