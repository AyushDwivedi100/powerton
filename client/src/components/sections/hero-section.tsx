import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { StaggeredList } from "@/hooks/use-scroll-animation";
import { getHeroImage } from '@/assets/images';
import { useTranslation } from 'react-i18next';
import { AnimatedCounter } from '@/components/ui/animated-counter';

export default function HeroSection() {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      id="home" 
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
    >
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${getHeroImage('home', { preload: true })?.src})`,
          
        }}
        role="img"
        aria-label="Industrial automation facility background showcasing Powerton Engineering's expertise"
      ></div>
      
      {/* Theme-aware overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <motion.div 
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-white dark:text-white"
            variants={itemVariants}
          >
            {t('pages:home.hero.title.main', 'Comprehensive Solutions for')} <span className="text-secondary">{t('pages:home.hero.title.highlight', 'Industrial Success')}</span>
          </motion.h1>
          
          <motion.p 
            id="hero-description"
            className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 dark:text-white/90 leading-relaxed"
            variants={itemVariants}
          >
            {t('pages:home.hero.subtitle', 'Our broad portfolio of products and services provides all-encompassing solutions that drive industrial success, ensuring that every aspect of your engineering needs is covered.')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants}>
              <Link href="/services" className="w-full sm:w-auto">
                <Button 
                  className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 transition-all duration-200"
                  aria-label="Explore our industrial automation and engineering services"
                >
                  {t('pages:home.hero.buttons.exploreServices', 'Explore Our Services')}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Link href="/quote" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-border text-white hover:bg-white hover:text-primary dark:border-border dark:text-white dark:hover:bg-white dark:hover:text-primary transition-all duration-300 bg-white/10"
                  aria-label="Request free consultation for your engineering project"
                >
                  {t('pages:home.hero.buttons.requestConsultation', 'Request Consultation')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Key Features */}
          <StaggeredList 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            stagger={0.15}
            role="list"
            aria-label="Key company highlights and services"
          >
            <div className="flex items-center space-x-3" role="listitem">
              <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" aria-hidden="true" />
              <span className="text-lg text-white">{t('pages:home.hero.features.experience', '15+ Years Experience')}</span>
            </div>
            <div className="flex items-center space-x-3" role="listitem">
              <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" aria-hidden="true" />
              <span className="text-lg text-white">{t('pages:home.hero.features.support', '24/7 Technical Support')}</span>
            </div>
            <div className="flex items-center space-x-3" role="listitem">
              <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" aria-hidden="true" />
              <span className="text-lg text-white">{t('pages:home.hero.features.service', 'Pan-India Service')}</span>
            </div>
          </StaggeredList>
        </motion.div>
      </div>

      {/* Stats Section - fully theme responsive */}
      <motion.div 
        className="relative bg-white/10 dark:bg-black/20 border-t border-border/20 dark:border-border/10"
        initial="hidden"
        animate="visible"
        variants={statsVariants}
        role="region"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          <h2 id="stats-heading" className="sr-only">Company Statistics and Achievements</h2>
          <StaggeredList 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            stagger={0.1}
            delay={0.3}
            role="list"
            aria-label="Company performance statistics"
          >
            <div role="listitem">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2" aria-label="15 plus years of experience">
                <AnimatedCounter target={15} suffix="+" />
              </div>
              <div className="text-sm lg:text-base text-white/90">{t('pages:home.hero.stats.yearsExperience', 'Years Experience')}</div>
            </div>
            <div role="listitem">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2" aria-label="1200 plus projects completed">
                <AnimatedCounter target={1200} suffix="+" />
              </div>
              <div className="text-sm lg:text-base text-white/90">{t('pages:home.hero.stats.projectsCompleted', 'Projects Completed')}</div>
            </div>
            <div role="listitem">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2" aria-label="450 plus happy clients">
                <AnimatedCounter target={450} suffix="+" />
              </div>
              <div className="text-sm lg:text-base text-white/90">{t('pages:home.hero.stats.happyClients', 'Happy Clients')}</div>
            </div>
            <div role="listitem">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2" aria-label="24/7 support available">
                <span>24/7</span>
              </div>
              <div className="text-sm lg:text-base text-white/90">{t('pages:home.hero.stats.supportAvailable', 'Support Available')}</div>
            </div>
          </StaggeredList>
        </div>
      </motion.div>
    </section>
  );
}