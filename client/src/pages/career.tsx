import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  GraduationCap,
  Target,
  TrendingUp,
  Award,
  Heart,
  CheckCircle,
} from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { COMPANY_INFO } from "@/data/constants";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import careerHeroImage from "@assets/generated_images/Career_hero_background_no_people_e9264eb4.png";
import CareerApplicationForm from "@/components/forms/career-application-form";

export default function Career() {
  useScrollAnimations();
  const { t } = useTranslation(['pages', 'common']);


  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Structured career progression with regular performance reviews and promotion opportunities."
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous training programs, certifications, and skill enhancement opportunities."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working hours and comprehensive health benefits for employees and families."
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative work environment with supportive team members and open communication."
    },
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Performance-based incentives, bonuses, and recognition programs for outstanding work."
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Work on cutting-edge technologies and innovative solutions in industrial automation."
    }
  ];


  return (
    <>
      <SEO
        title="Careers at Powerton Engineering - Join Our Engineering Team"
        description="Explore career opportunities at Powerton Engineering. Join our team of skilled engineers and contribute to innovative industrial automation and electrical engineering projects."
        keywords="powerton engineering careers, engineering jobs, electrical engineer jobs, automation engineer jobs, industrial engineering careers, engineering jobs noida"
        canonicalUrl="https://powertonengineering.in/career"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={careerHeroImage} 
            alt="ID-900: Professional engineering workspace with modern industrial facility equipment" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build Your Engineering Career With Us
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              Join our team of passionate engineers and contribute to innovative industrial automation solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                <span>Growth Opportunities</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                <span>Innovative Projects</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                <span>Collaborative Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Powerton Engineering?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Be part of a dynamic team that's shaping the future of industrial automation and electrical engineering
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg mr-4">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Application Form */}
      <AnimatedSection animation="fadeInUp" delay={0.2} duration={0.8}>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <CareerApplicationForm />
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}