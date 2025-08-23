import React from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Gauge, Phone, Mail, MapPin, Thermometer, Radio, Cpu, ToggleLeft, FlaskConical, Zap } from 'lucide-react';
import { COMPANY_INFO } from '@/data/constants';
import { INSTRUMENTATION_PRODUCTS, INSTRUMENTATION_CATEGORIES } from '@/data/instrumentation-products';
import { getProductImage } from '@/assets/images';
import { motion } from 'framer-motion';

export default function ProductInstrumentationComponents() {
  const productImage = getProductImage('instrumentation-components');

  return (
    <>
      <Helmet>
        <title>Instrumentation Components - Powerton Engineering</title>
        <meta name="description" content="High-precision instrumentation components for accurate measurement and control in industrial processes. Pressure transmitters, temperature sensors, flow meters, and level indicators." />
        <meta name="keywords" content="instrumentation components, pressure transmitters, temperature sensors, flow meters, level indicators, industrial instruments" />
        <link rel="canonical" href="/products/instrumentation-components" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
          <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="px-3 py-1">
                    <Gauge className="w-4 h-4 mr-2" />
                    Industrial Equipment
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                  Instrumentation Components
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  High-precision instrumentation components for accurate measurement and control in industrial processes. Our comprehensive range includes sensors, transmitters, controllers, switches, valves, analyzers, and signal conditioners.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Pressure Transmitters', 'Temperature Sensors', 'Flow Meters', 'Level Indicators'].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/quote">
                    <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Request Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
                  <img
                    src={productImage?.src}
                    alt="ID-039: Industrial instrumentation components showcase"
                    className="relative rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Instrumentation Components
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive range of precision instrumentation components for industrial applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {INSTRUMENTATION_CATEGORIES.map((category, index) => {
                const getIcon = (iconName: string) => {
                  switch (iconName) {
                    case 'Thermometer': return <Thermometer className="w-8 h-8" />;
                    case 'Radio': return <Radio className="w-8 h-8" />;
                    case 'Cpu': return <Cpu className="w-8 h-8" />;
                    case 'ToggleLeft': return <ToggleLeft className="w-8 h-8" />;
                    case 'Gauge': return <Gauge className="w-8 h-8" />;
                    case 'FlaskConical': return <FlaskConical className="w-8 h-8" />;
                    case 'Zap': return <Zap className="w-8 h-8" />;
                    default: return <Gauge className="w-8 h-8" />;
                  }
                };

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border hover:border-primary/50">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${category.color} text-white`}>
                            {getIcon(category.icon)}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-base text-muted-foreground line-clamp-3">
                          {category.description}
                        </CardDescription>
                        <Link href={`/products/${category.id}`}>
                          <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                            Learn More
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Need Help Selecting the Right Components?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Our technical experts are here to help you choose the perfect instrumentation components for your specific requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 bg-white/20 hover:bg-white/30 rounded-lg px-6 py-3 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">{COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 bg-white/20 hover:bg-white/30 rounded-lg px-6 py-3 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">{COMPANY_INFO.email}</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white/20 hover:bg-white/30 rounded-lg px-6 py-3 transition-colors"
                >
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Visit Office</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}