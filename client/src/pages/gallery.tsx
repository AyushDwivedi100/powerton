import { SEO } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Building2, 
  Wrench, 
  Package, 
  ZoomIn,
  Calendar,
  MapPin,
  Award
} from "lucide-react";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { useState } from "react";
// Using a professional engineering team image from the existing assets
import galleryHeroImage from "@assets/generated_images/Engineering_Team_Working_82b3dac7.png";

export default function Gallery() {
  useScrollAnimations();
  const [activeTab, setActiveTab] = useState<'company' | 'projects' | 'products'>('company');

  // Company and Employee Images Data
  const companyImages = [
    {
      id: 1,
      title: "Modern Engineering Facility",
      description: "Our state-of-the-art facility in Noida equipped with latest testing equipment",
      category: "Facility",
      year: "2024"
    },
    {
      id: 2,
      title: "Expert Engineering Team",
      description: "Our skilled engineers working on industrial automation solutions",
      category: "Team",
      year: "2024"
    },
    {
      id: 3,
      title: "Quality Control Laboratory",
      description: "Advanced testing lab ensuring product quality and reliability",
      category: "Facility",
      year: "2024"
    },
    {
      id: 4,
      title: "Training & Development Center",
      description: "Continuous skill development for our technical team",
      category: "Training",
      year: "2024"
    },
    {
      id: 5,
      title: "Customer Support Center",
      description: "Dedicated 24/7 customer support and technical assistance",
      category: "Support",
      year: "2024"
    },
    {
      id: 6,
      title: "Research & Development Wing",
      description: "Innovation hub for developing cutting-edge automation solutions",
      category: "R&D",
      year: "2024"
    }
  ];

  // Project Images Data
  const projectImages = [
    {
      id: 1,
      title: "Industrial Control Panel Installation",
      description: "Complete automation system implementation for manufacturing plant",
      location: "Delhi NCR",
      year: "2024",
      category: "Automation",
      client: "Manufacturing Industry"
    },
    {
      id: 2,
      title: "Solar Power Plant - 1MW",
      description: "Grid-tied solar installation with monitoring systems",
      location: "Rajasthan",
      year: "2024",
      category: "Solar EPC",
      client: "Industrial Complex"
    },
    {
      id: 3,
      title: "SCADA System Implementation",
      description: "Centralized monitoring and control system for water treatment plant",
      location: "Uttar Pradesh",
      year: "2023",
      category: "SCADA",
      client: "Water Authority"
    },
    {
      id: 4,
      title: "Process Instrumentation Upgrade",
      description: "Complete instrumentation overhaul for chemical processing unit",
      location: "Gujarat",
      year: "2023",
      category: "Instrumentation",
      client: "Chemical Industry"
    },
    {
      id: 5,
      title: "PLC Programming & Integration",
      description: "Advanced PLC systems for production line automation",
      location: "Maharashtra",
      year: "2024",
      category: "PLC Programming",
      client: "Automotive Sector"
    },
    {
      id: 6,
      title: "Electrical Panel Modernization",
      description: "Safety compliance and efficiency improvement project",
      location: "Haryana",
      year: "2023",
      category: "Electrical",
      client: "Food Processing"
    }
  ];

  // Product Images Data
  const productImages = [
    {
      id: 1,
      title: "Industrial Multimeters",
      description: "High-precision measurement instruments for electrical testing",
      category: "Measurement Instruments",
      brand: "Fluke, Keysight"
    },
    {
      id: 2,
      title: "PLC Controllers",
      description: "Programmable Logic Controllers for industrial automation",
      category: "Automation Systems",
      brand: "Siemens, Allen Bradley"
    },
    {
      id: 3,
      title: "Solar Inverters",
      description: "Grid-tie and off-grid inverters for solar installations",
      category: "Solar Products",
      brand: "ABB, Schneider"
    },
    {
      id: 4,
      title: "Industrial Sensors",
      description: "Temperature, pressure, and flow sensors for process control",
      category: "Instrumentation",
      brand: "Honeywell, Yokogawa"
    },
    {
      id: 5,
      title: "Control Panels",
      description: "Custom-built electrical control panels and enclosures",
      category: "Electrical Components",
      brand: "Custom Built"
    },
    {
      id: 6,
      title: "SCADA Software",
      description: "Supervisory control and data acquisition systems",
      category: "Software Solutions",
      brand: "Wonderware, iFIX"
    },
    {
      id: 7,
      title: "Industrial Pumps",
      description: "Centrifugal and positive displacement pumps",
      category: "Mechanical Equipment",
      brand: "Grundfos, KSB"
    },
    {
      id: 8,
      title: "Safety Equipment",
      description: "Personal protective equipment and safety systems",
      category: "Safety Solutions",
      brand: "3M, MSA"
    }
  ];

  const tabs = [
    {
      id: 'company' as const,
      label: 'Company & Team',
      icon: Users,
      count: companyImages.length
    },
    {
      id: 'projects' as const,
      label: 'Completed Projects',
      icon: Building2,
      count: projectImages.length
    },
    {
      id: 'products' as const,
      label: 'Products & Solutions',
      icon: Package,
      count: productImages.length
    }
  ];

  const ImageCard = ({ image, type }: { image: any, type: 'company' | 'projects' | 'products' }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border border-border overflow-hidden">
      <div className="relative">
        {/* Placeholder for actual image */}
        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-center p-4">
            <ZoomIn className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Image placeholder</p>
            <p className="text-xs text-muted-foreground mt-1">Actual images to be uploaded</p>
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {type === 'company' && image.category}
            {type === 'projects' && image.category}
            {type === 'products' && image.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {image.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {image.description}
        </p>
        
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {type === 'company' && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{image.year}</span>
            </div>
          )}
          
          {type === 'projects' && (
            <>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{image.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{image.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <Building2 className="w-3 h-3" />
                <span>{image.client}</span>
              </div>
            </>
          )}
          
          {type === 'products' && (
            <div className="flex items-center gap-1">
              <Award className="w-3 h-3" />
              <span>{image.brand}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <SEO
        title="Gallery - Powerton Engineering Projects, Products & Team"
        description="Explore Powerton Engineering's gallery showcasing our team, completed industrial automation projects, and comprehensive product range. Building trust through transparency."
        keywords="powerton engineering gallery, industrial projects gallery, automation projects, electrical engineering team, product showcase, company facilities"
        canonicalUrl="https://powertonengineering.in/gallery"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
          style={{ 
            backgroundImage: `url(${galleryHeroImage})`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white text-center">
          <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our <span className="text-secondary">Gallery</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Discover our journey through images - from our dedicated team and modern facilities to successful projects and comprehensive product range.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-secondary" />
                <span>Successful Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-secondary" />
                <span>Quality Products</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <AnimatedSection animation="fadeInUp" delay={0.2} duration={0.8}>
            <div className="flex justify-center mb-12">
              <div className="flex bg-muted p-1 rounded-lg">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                      activeTab === tab.id 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "hover:bg-background hover:text-foreground"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {tab.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tab Content */}
          <AnimatedSection animation="fadeIn" delay={0.3} duration={0.8}>
            
            {/* Company & Team Tab */}
            {activeTab === 'company' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our <span className="text-primary">Company & Team</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Meet our dedicated team and explore our modern facilities that enable us to deliver excellence in every project.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companyImages.map((image) => (
                    <ImageCard key={image.id} image={image} type="company" />
                  ))}
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our <span className="text-primary">Completed Projects</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Explore our successful project implementations across various industries, showcasing our expertise and commitment to quality.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectImages.map((image) => (
                    <ImageCard key={image.id} image={image} type="projects" />
                  ))}
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Our <span className="text-primary">Products & Solutions</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Discover our comprehensive range of industrial products and solutions from leading global manufacturers.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {productImages.map((image) => (
                    <ImageCard key={image.id} image={image} type="products" />
                  ))}
                </div>
              </div>
            )}
          </AnimatedSection>


        </div>
      </section>
    </>
  );
}