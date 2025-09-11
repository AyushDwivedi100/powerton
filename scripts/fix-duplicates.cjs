#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load the problematic English pages.json file
const pagesPath = path.join(__dirname, '../client/public/locales/en/pages.json');

console.log('🔧 Fixing duplicate keys in English pages.json...\n');

try {
  // Read the file as text to examine the structure
  const content = fs.readFileSync(pagesPath, 'utf8');
  
  console.log('📊 Current file statistics:');
  console.log(`  Total characters: ${content.length}`);
  console.log(`  Total lines: ${content.split('\n').length}`);
  
  // Count "news": occurrences
  const newsMatches = content.match(/"news":\s*\{/g) || [];
  console.log(`  "news": occurrences found: ${newsMatches.length}\n`);
  
  if (newsMatches.length <= 1) {
    console.log('✅ No duplicate keys found. File is already clean.');
    process.exit(0);
  }
  
  console.log('🚨 Multiple "news" keys detected. Creating consolidated structure...\n');
  
  // Load as JSON - this will only give us the last occurrence
  const data = JSON.parse(content);
  
  // Create comprehensive consolidated news structure
  const consolidatedNews = {
    // Basic properties
    title: "News",
    subtitle: "Updates", 
    badges: {
      awardWinning: "Award Winning",
      growingStrong: "Growing Strong",
      futureReady: "Future Ready"
    },
    
    // Hero section for news pages
    hero: {
      title: "News & Updates",
      subtitle: "Latest Industry Insights"
    },
    
    // Latest news items
    latestNews: {
      excellenceAward: {
        title: "Powerton Engineering Wins Excellence Award 2024",
        category: "Awards",
        excerpt: "Recognized for outstanding innovation in industrial automation and electrical engineering solutions."
      },
      ntpcContract: {
        title: "Major NTPC Contract Secured for Power Plant Automation",
        category: "Contracts", 
        excerpt: "Awarded comprehensive automation contract for 500MW thermal power plant modernization project."
      },
      renewableExpansion: {
        title: "Expanding Renewable Energy Solutions Across India",
        category: "Expansion",
        excerpt: "New solar EPC capabilities and partnerships to support India's renewable energy transition."
      }
    },
    
    // Upcoming projects
    upcomingProjects: {
      smartCity: {
        title: "Smart City Infrastructure Automation",
        client: "Noida Smart City Ltd.",
        description: "Complete automation infrastructure for smart city project including traffic management, waste management, and energy distribution systems.",
        status: "Planning Phase",
        technologies: ["IoT", "Smart Sensors", "City Management Systems", "Energy Automation"]
      },
      pharma: {
        title: "Pharmaceutical Manufacturing Automation",
        client: "Cipla Limited", 
        description: "Advanced automation for pharmaceutical manufacturing processes with compliance to international standards and quality control systems.",
        status: "Contract Signed",
        technologies: ["GMP Compliance", "Batch Processing", "Quality Control", "Traceability Systems"]
      },
      solarFarm: {
        title: "Solar Farm Automation and Monitoring",
        client: "Adani Green Energy",
        description: "Comprehensive automation solution for 200MW solar farm including tracking systems, weather monitoring, and grid integration.",
        status: "Engineering Phase", 
        technologies: ["Solar Tracking", "Weather Systems", "Grid Integration", "Remote Monitoring"]
      }
    },
    
    // Achievements
    achievements: {
      title: "Recent Achievements",
      "2024": [
        "Excellence in Industrial Automation Award - Indian Engineering Society",
        "Best Innovation in Process Control - Automation India Awards",
        "ISO 9001:2015 Quality Management Certification",
        "Top 100 Engineering Companies - India Today"
      ],
      "2023": [
        "Outstanding Engineering Solution - CII Manufacturing Excellence", 
        "Safety Excellence Award - National Safety Council"
      ]
    },
    
    // Article structure
    article: {
      backToNews: "Back to News",
      share: "Share",
      author: "Powerton Engineering Team",
      categories: {
        projectSuccess: "Project Success",
        technology: "Technology", 
        industryNews: "Industry News",
        companyUpdate: "Company Update"
      },
      sampleArticle: {
        title: "Powerton Engineering Completes Major Automation Project for Leading Manufacturing Plant",
        excerpt: "Successfully implemented comprehensive industrial automation system reducing operational costs by 30% and improving efficiency by 45%.",
        content: {
          projectOverview: "Project Overview",
          projectOverviewText: "Powerton Engineering has successfully completed a comprehensive industrial automation project for one of India's leading manufacturing facilities. This project represents a significant milestone in our commitment to delivering cutting-edge automation solutions that drive operational excellence.",
          keyAchievements: "Key Achievements",
          achievements: {
            costReduction: "30% reduction in operational costs",
            efficiency: "45% improvement in production efficiency", 
            safety: "Zero safety incidents during implementation",
            uptime: "100% system uptime since commissioning"
          },
          technicalImplementation: "Technical Implementation",
          technicalText: "The project involved the integration of advanced PLC systems, SCADA implementation, and comprehensive instrumentation solutions. Our team worked closely with the client to ensure minimal disruption to ongoing operations while implementing state-of-the-art automation technology.",
          technologiesUsed: "Technologies Used",
          technologies: {
            plc: "Schneider Electric PLC Systems",
            scada: "Advanced SCADA with real-time monitoring",
            iot: "Industrial IoT sensors and connectivity",
            maintenance: "Predictive maintenance systems",
            energy: "Energy management and optimization"
          },
          clientTestimonial: "Client Testimonial",
          testimonialText: "Powerton Engineering delivered beyond our expectations. The new automation system has transformed our operations, and we're seeing immediate benefits in efficiency and cost reduction. Their professional approach and technical expertise were exceptional.",
          futureCollaboration: "Future Collaboration",
          futureText: "Based on the success of this implementation, the client has already engaged Powerton Engineering for phase two of their automation journey, which will expand the system to additional production lines.",
          conclusionText: "This project demonstrates our capability to handle complex industrial automation challenges and deliver measurable results that directly impact our clients' bottom line."
        }
      }
    }
  };
  
  // Replace the news section in the data
  data.news = consolidatedNews;
  
  // Write the corrected file
  fs.writeFileSync(pagesPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  
  console.log('✅ Successfully consolidated duplicate news keys');
  console.log('📊 Consolidated news structure includes:');
  console.log('  - Basic properties (title, subtitle, badges)');
  console.log('  - Hero section for news pages'); 
  console.log('  - Latest news (3 items)');
  console.log('  - Upcoming projects (3 items)');
  console.log('  - Achievements (2024, 2023)');
  console.log('  - Article structure with sample content');
  console.log('');
  console.log('🔄 File ready for i18n synchronization!');
  
} catch (error) {
  console.error('❌ Error fixing duplicate keys:', error.message);
  process.exit(1);
}