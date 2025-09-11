import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, FileText, Mail, Phone } from "lucide-react";
import { FRONTEND_CONFIG } from "@/lib/frontend-config";
import { getServiceOptions } from "@/data/constants";

// Frontend-only quote form schema - validation messages will be handled by translation keys
const createQuoteFormSchema = (t: (key: string) => string) => z.object({
  // Contact Information
  name: z.string().min(2, t('quote.validation.nameMin')),
  email: z.string().email(t('quote.validation.emailInvalid')),
  phone: z.string().min(10, t('quote.validation.phoneMin')),
  company: z.string().min(1, t('quote.validation.companyRequired')),
  designation: z.string().optional(),
  
  // Project Information
  projectTitle: z.string().min(1, t('quote.validation.projectTitleRequired')),
  projectType: z.string().min(1, t('quote.validation.projectTypeRequired')),
  budget: z.string().optional(),
  timeline: z.string().min(1, t('quote.validation.timelineRequired')),
  
  // Technical Requirements
  services: z.array(z.string()).min(1, t('quote.validation.servicesRequired')),
  specifications: z.string().min(20, t('quote.validation.specificationsMin')),
  additionalRequirements: z.string().optional(),
  
  // Project Details
  industryType: z.string().optional(),
  projectScale: z.string().optional(),
  preferredBrands: z.string().optional(),
  
});

type QuoteFormData = z.infer<ReturnType<typeof createQuoteFormSchema>>;

// Service options will be populated inside the component where t is available

export default function FrontendQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation('forms');

  const quoteFormSchema = createQuoteFormSchema(t);
  
  // Get translated service options
  const serviceOptions = getServiceOptions(t).map(service => ({
    id: service.value,
    label: service.label
  }));

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      designation: "",
      projectTitle: "",
      projectType: "",
      budget: "",
      timeline: "",
      services: [],
      specifications: "",
      additionalRequirements: "",
      industryType: "",
      projectScale: "",
      preferredBrands: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);

    try {
      // Create FormData object for PHP
      const formData = new FormData();
      
      // Contact Information
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('company', data.company);
      formData.append('designation', data.designation || '');
      
      // Project Information
      formData.append('projectTitle', data.projectTitle);
      formData.append('projectType', data.projectType);
      formData.append('budget', data.budget || '');
      formData.append('timeline', data.timeline);
      formData.append('industryType', data.industryType || '');
      formData.append('projectScale', data.projectScale || '');
      
      // Services (send as comma-separated string)
      formData.append('services', data.services.join(', '));
      
      // Technical Requirements
      formData.append('specifications', data.specifications);
      formData.append('additionalRequirements', data.additionalRequirements || '');
      formData.append('preferredBrands', data.preferredBrands || '');

      // Send to PHP handler
      const response = await fetch('/quote-handler.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t('quote.success.title'),
          description: t('quote.success.description'),
          duration: 6000,
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Quote form error:', error);
      toast({
        title: t('quote.error.title'),
        description: t('quote.error.description', { phone: FRONTEND_CONFIG.company.phone, email: FRONTEND_CONFIG.company.email }),
        duration: 6000,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="text-foreground">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Contact Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('quote.sections.contactInfo')}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('quote.fields.name.label')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('common:placeholders.yourFullName')} {...field} />
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
                      <FormLabel>{t('quote.fields.email.label')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('common:placeholders.yourEmail')} {...field} />
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
                      <FormLabel>{t('quote.labels.phoneNumber')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('common:placeholders.yourPhone')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="designation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('forms:quote.fields.designation.label', 'Designation')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('common:placeholders.yourRole')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('quote.labels.companyName')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('common:placeholders.yourCompanyName')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('quote.labels.projectInformation')}
              </h3>
              
              <FormField
                control={form.control}
                name="projectTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('quote.labels.projectTitle')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('common:placeholders.briefProjectTitle')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('quote.labels.projectType')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('common:placeholders.selectProjectType')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="new-installation">{t('forms:quote.projectTypes.newInstallation', 'New Installation')}</SelectItem>
                          <SelectItem value="upgrade">{t('forms:quote.projectTypes.systemUpgrade', 'System Upgrade')}</SelectItem>
                          <SelectItem value="retrofit">{t('forms:quote.projectTypes.retrofit', 'Retrofit')}</SelectItem>
                          <SelectItem value="maintenance">{t('forms:quote.projectTypes.maintenance', 'Maintenance Contract')}</SelectItem>
                          <SelectItem value="consultation">{t('forms:quote.projectTypes.consultation', 'Technical Consultation')}</SelectItem>
                          <SelectItem value="design">{t('quote.projectTypes.design')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('quote.labels.expectedTimeline')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('common:placeholders.projectTimeline')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="immediate">{t('quote.timelines.immediate')}</SelectItem>
                          <SelectItem value="1-3-months">{t('quote.timelines.1-3-months')}</SelectItem>
                          <SelectItem value="3-6-months">{t('quote.timelines.3-6-months')}</SelectItem>
                          <SelectItem value="6-12-months">{t('quote.timelines.6-12-months')}</SelectItem>
                          <SelectItem value="1-year-plus">{t('quote.timelines.1-year-plus')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('quote.labels.approximateBudget')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('quote.placeholders.selectBudget')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-1-lakh">{t('quote.budgetRanges.under-1-lakh')}</SelectItem>
                          <SelectItem value="1-5-lakh">{t('quote.budgetRanges.1-5-lakh')}</SelectItem>
                          <SelectItem value="5-10-lakh">{t('quote.budgetRanges.5-10-lakh')}</SelectItem>
                          <SelectItem value="10-25-lakh">{t('quote.budgetRanges.10-25-lakh')}</SelectItem>
                          <SelectItem value="25-50-lakh">{t('quote.budgetRanges.25-50-lakh')}</SelectItem>
                          <SelectItem value="50-lakh-plus">{t('quote.budgetRanges.50-lakh-plus')}</SelectItem>
                          <SelectItem value="discuss">{t('quote.budgetRanges.discuss')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('quote.labels.industryType')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('quote.placeholders.selectIndustry')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="manufacturing">{t('forms:quote.industries.manufacturing', 'Manufacturing')}</SelectItem>
                          <SelectItem value="power-generation">{t('forms:quote.industries.powerGeneration', 'Power Generation')}</SelectItem>
                          <SelectItem value="water-treatment">{t('forms:quote.industries.waterTreatment', 'Water Treatment')}</SelectItem>
                          <SelectItem value="food-processing">{t('forms:quote.industries.foodProcessing', 'Food Processing')}</SelectItem>
                          <SelectItem value="pharmaceutical">{t('forms:quote.industries.pharmaceutical', 'Pharmaceutical')}</SelectItem>
                          <SelectItem value="chemical">{t('forms:quote.industries.chemical', 'Chemical')}</SelectItem>
                          <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                          <SelectItem value="renewable-energy">{t('forms:quote.industries.renewableEnergy', 'Renewable Energy')}</SelectItem>
                          <SelectItem value="infrastructure">{t('forms:quote.industries.infrastructure', 'Infrastructure')}</SelectItem>
                          <SelectItem value="other">{t('forms:quote.industries.other', 'Other')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Services Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('quote.sections.requiredServices')}
              </h3>
              
              <FormField
                control={form.control}
                name="services"
                render={() => (
                  <FormItem>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <FormField
                          key={service.id}
                          control={form.control}
                          name="services"
                          render={({ field }) => (
                            <FormItem
                              key={service.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== service.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Technical Specifications Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Technical Specifications
              </h3>
              
              <FormField
                control={form.control}
                name="specifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detailed Requirements *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('quote.placeholders.detailedRequirements')}
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="projectScale"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('quote.labels.projectScale')}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('quote.placeholders.selectProjectScale')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="small">Small Scale (&lt; 10 I/O points)</SelectItem>
                          <SelectItem value="medium">Medium Scale (10-100 I/O points)</SelectItem>
                          <SelectItem value="large">Large Scale (100-500 I/O points)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (500+ I/O points)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredBrands"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Brands/Standards</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t('quote.placeholders.preferredBrands')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="additionalRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('forms:quote.fields.additionalRequirements.label', 'Additional Requirements')}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('quote.placeholders.additionalRequirements')}
                        className="min-h-[80px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>


            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('quote.submitting')}
                  </>
                ) : (
                  <>
                    <FileText className="mr-2 h-4 w-4" />
                    Submit Quote Request
                  </>
                )}
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1 border-border text-foreground hover:bg-transparent hover:text-foreground hover:border-border"
                >
                  <a href="tel:+91-94627-71662" className="flex items-center justify-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Call for Urgent Requirements
                  </a>
                </Button>
                
                <Button 
                  type="button" 
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1 border-border text-foreground hover:bg-transparent hover:text-foreground hover:border-border"
                >
                  <a href="mailto:info@powertonengineering.com" className="flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Requirements
                  </a>
                </Button>
              </div>
            </div>
          </form>
        </Form>

        {/* Quote Information */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-foreground mb-2">What happens next?</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Technical review within 24 hours</li>
                <li>• Detailed proposal with specifications</li>
                <li>• Cost breakdown and timeline</li>
                <li>• Follow-up consultation call</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Need immediate assistance?</h4>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-primary" />
                  <span>+91-94627-71662 (Technical Team)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-primary" />
                  <span>info@powertonengineering.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}