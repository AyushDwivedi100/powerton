// Deployment Configuration System
// Automatically detects deployment environment and configures accordingly

export type DeploymentMode =
  | "development"
  | "static"
  | "fullstack"
  | "serverless";

interface DeploymentConfig {
  mode: DeploymentMode;
  apiEndpoint: string;
  formHandler: "backend" | "emailjs" | "netlify" | "mailto";
  storageType: "memory" | "database" | "local";
}

// Environment detection - Frontend-only project
const detectDeploymentMode = (): DeploymentMode => {
  // Always use static mode for frontend-only React project
  // No backend server or database needed
  return "static";
};

// Configuration based on deployment mode
export const getDeploymentConfig = (): DeploymentConfig => {
  const mode = detectDeploymentMode();

  const configs: Record<DeploymentMode, DeploymentConfig> = {
    development: {
      mode: "development",
      apiEndpoint: "http://localhost:5000/api",
      formHandler: "backend",
      storageType: "memory",
    },
    fullstack: {
      mode: "fullstack",
      apiEndpoint: "/api",
      formHandler: "backend",
      storageType: "database",
    },
    serverless: {
      mode: "serverless",
      apiEndpoint: "/api",
      formHandler: "backend",
      storageType: "database",
    },
    static: {
      mode: "static",
      apiEndpoint: "",
      formHandler: "emailjs",
      storageType: "local",
    },
  };

  return configs[mode];
};

// Form submission configuration
export const getFormConfig = () => {
  const config = getDeploymentConfig();

  return {
    contactFormEndpoint:
      config.formHandler === "emailjs"
        ? "emailjs" // EmailJS handled in frontend-config.ts
        : `${config.apiEndpoint}/contacts`,

    quoteFormEndpoint:
      config.formHandler === "emailjs"
        ? "emailjs" // EmailJS handled in frontend-config.ts
        : `${config.apiEndpoint}/quote-requests`,

    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
};

// Export current configuration for debugging
export const getCurrentConfig = () => {
  const config = getDeploymentConfig();
  console.log("🚀 Deployment Configuration:", config);
  return config;
};
