import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { SEO } from "@/lib/seo";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found (404) - Powerton Engineering"
        description="The page you're looking for doesn't exist. Return to Powerton Engineering homepage or explore our industrial automation services and products."
        keywords="404, page not found, powerton engineering, industrial automation, electrical engineering"
        canonicalUrl="https://powertonengineering.in/404"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Page Not Found - Powerton Engineering",
          "description": "404 error page for Powerton Engineering website",
          "mainEntity": {
            "@type": "Organization",
            "name": "Powerton Engineering Pvt. Ltd."
          }
        }}
      />

      <div className="min-h-screen w-full flex items-center justify-center bg-background py-12 px-4">
        <div className="max-w-md w-full">
          <Card className="shadow-lg">
            <CardContent className="pt-8 pb-6 text-center">
              <div className="mb-6">
                <AlertCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-foreground mb-2">404</h1>
                <h2 className="text-xl font-semibold text-foreground">Page Not Found</h2>
              </div>

              <p className="text-muted-foreground mb-8">
                The page you're looking for doesn't exist. It may have been moved, deleted, or you entered the wrong URL.
              </p>

              <div className="space-y-3">
                <Link href="/">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Home className="mr-2 w-4 h-4" />
                    Return to Homepage
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Contact Support
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Quick links to popular sections:
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <Link href="/products" className="text-primary hover:underline">Products</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/services" className="text-primary hover:underline">Services</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/projects" className="text-primary hover:underline">Projects</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/about" className="text-primary hover:underline">About</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
