import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, Mail, Phone } from "lucide-react";
import { FRONTEND_CONFIG, getFormSubmissionUrl } from "@/lib/frontend-config";
import { SERVICE_OPTIONS } from "@/data/constants";

// Frontend-only contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  serviceType: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function FrontendContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      serviceType: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const formUrl = getFormSubmissionUrl('contact');
      
      if (formUrl) {
        // Submit to Formspree
        const response = await fetch(formUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          toast({
            title: "Message sent successfully!",
            description: "Thank you for contacting us. We'll respond within 24 hours.",
            duration: 5000,
          });
        } else {
          throw new Error('Form submission failed');
        }
      } else {
        // Fallback - show contact information
        toast({
          title: "Thank you for your interest!",
          description: `Please contact us directly: ${FRONTEND_CONFIG.company.phone} or ${FRONTEND_CONFIG.company.email}`,
          duration: 6000,
        });
      }

      form.reset();
    } catch (error) {
      console.log('Form submission handled gracefully:', error);
      toast({
        title: "Thank you for your inquiry!",
        description: `For immediate assistance: ${FRONTEND_CONFIG.company.phone} or ${FRONTEND_CONFIG.company.email}`,
        duration: 6000,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="text-foreground">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="+91-XXXXX-XXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Interest</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {SERVICE_OPTIONS.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject *</FormLabel>
                    <FormControl>
                      <Input placeholder="Brief description of your inquiry" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Please describe your requirements, project details, or any specific questions..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline"
                  size="default"
                  asChild
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="tel:+91-94627-71662" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline"
                  size="default"
                  asChild
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="mailto:info.powerton@gmail.com" className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </form>
        </Form>

        {/* Contact Information - Enhanced Layout */}
        <div className="mt-10 pt-8 border-t border-border/50">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Quick Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300 border border-primary/20">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-base">Phone</p>
                <p className="text-muted-foreground text-sm font-medium">+91-94627-71662</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300 border border-primary/20">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-base">Email</p>
                <p className="text-muted-foreground text-sm font-medium break-all">info.powerton@gmail.com</p>
              </div>
            </div>
            
            {/* Response Time */}
            <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/15 transition-all duration-300 border border-secondary/20">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary/15 rounded-xl flex items-center justify-center">
                <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground text-base">Response Time</p>
                <p className="text-secondary font-semibold text-sm">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}