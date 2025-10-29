import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2, FileText, Mail, Phone } from "lucide-react";
import { FRONTEND_CONFIG } from "@/lib/frontend-config";
import { getServiceOptions } from "@/data/constants";

// Frontend-only quote form schema - validation messages will be handled by translation keys
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createQuoteFormSchema = (t: (translationKey: string) => string) =>
  z.object({
    // Contact Information
    name: z.string().min(2, t("forms:quote.validation.nameMin")),
    email: z.string().email(t("forms:quote.validation.emailInvalid")),
    phone: z.string().min(10, t("forms:quote.validation.phoneMin")),
    company: z.string().min(1, t("forms:quote.validation.companyRequired")),
    designation: z.string().optional(),

    // Project Information
    projectTitle: z
      .string()
      .min(1, t("forms:quote.validation.projectTitleRequired")),
    projectType: z
      .string()
      .min(1, t("forms:quote.validation.projectTypeRequired")),
    budget: z.string().optional(),
    timeline: z.string().min(1, t("forms:quote.validation.timelineRequired")),

    // Technical Requirements
    services: z
      .array(z.string())
      .min(1, t("forms:quote.validation.servicesRequired")),
    specifications: z
      .string()
      .min(20, t("forms:quote.validation.specificationsMin")),
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
  const { t } = useTranslation("forms");

  const quoteFormSchema = createQuoteFormSchema(t);

  // Get translated service options
  const serviceOptions = getServiceOptions(t).map((service) => ({
    id: service.value,
    label: service.label,
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
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("company", data.company);
      formData.append("designation", data.designation || "");

      // Project Information
      formData.append("projectTitle", data.projectTitle);
      formData.append("projectType", data.projectType);
      formData.append("budget", data.budget || "");
      formData.append("timeline", data.timeline);
      formData.append("industryType", data.industryType || "");
      formData.append("projectScale", data.projectScale || "");

      // Services (send as comma-separated string)
      formData.append("services", data.services.join(", "));

      // Technical Requirements
      formData.append("specifications", data.specifications);
      formData.append(
        "additionalRequirements",
        data.additionalRequirements || ""
      );
      formData.append("preferredBrands", data.preferredBrands || "");

      // Send to PHP handler
      const response = await fetch("/quote-handler.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t("forms:quote.success.title"),
          description: t("forms:quote.success.description"),
          duration: 6000,
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Quote form error:", error);
      toast({
        title: t("forms:quote.error.title"),
        description: t("forms:quote.error.description", {
          phone: FRONTEND_CONFIG.company.phone,
          email: FRONTEND_CONFIG.company.email,
        }),
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
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 text-wrap-safe responsive-text">
                {t("forms:quote.sections.contactInfo")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-safe">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.fields.name.label")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("common:placeholders.yourFullName")}
                          {...field}
                        />
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
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.fields.email.label")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("common:placeholders.yourEmail")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-safe">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.labels.phoneNumber")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("common:placeholders.yourPhone")}
                          {...field}
                        />
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
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.fields.designation.label")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("common:placeholders.yourRole")}
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
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-wrap-safe">
                      {t("forms:quote.labels.companyName")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("common:placeholders.yourCompanyName")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Project Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 text-wrap-safe responsive-text">
                {t("forms:quote.labels.projectInformation")}
              </h3>

              <FormField
                control={form.control}
                name="projectTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t("forms:quote.labels.projectTitle")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("common:placeholders.briefProjectTitle")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-safe">
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.labels.projectType")}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t(
                                "common:placeholders.selectProjectType"
                              )}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="new-installation">
                            {t("forms:quote.projectTypes.newInstallation")}
                          </SelectItem>
                          <SelectItem value="upgrade">
                            {t("forms:quote.projectTypes.systemUpgrade")}
                          </SelectItem>
                          <SelectItem value="retrofit">
                            {t("forms:quote.projectTypes.retrofit")}
                          </SelectItem>
                          <SelectItem value="maintenance">
                            {t("forms:quote.projectTypes.maintenance")}
                          </SelectItem>
                          <SelectItem value="consultation">
                            {t("forms:quote.projectTypes.consultation")}
                          </SelectItem>
                          <SelectItem value="design">
                            {t("forms:quote.projectTypes.design")}
                          </SelectItem>
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
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.labels.expectedTimeline")}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t(
                                "common:placeholders.projectTimeline"
                              )}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="immediate">
                            {t("forms:quote.timelines.immediate")}
                          </SelectItem>
                          <SelectItem value="1-3-months">
                            {t("forms:quote.timelines.1-3-months")}
                          </SelectItem>
                          <SelectItem value="3-6-months">
                            {t("forms:quote.timelines.3-6-months")}
                          </SelectItem>
                          <SelectItem value="6-12-months">
                            {t("forms:quote.timelines.6-12-months")}
                          </SelectItem>
                          <SelectItem value="1-year-plus">
                            {t("forms:quote.timelines.1-year-plus")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-safe">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.labels.approximateBudget")}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t(
                                "forms:quote.placeholders.selectBudget"
                              )}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-1-lakh">
                            {t("forms:quote.budgetRanges.under-1-lakh")}
                          </SelectItem>
                          <SelectItem value="1-5-lakh">
                            {t("forms:quote.budgetRanges.1-5-lakh")}
                          </SelectItem>
                          <SelectItem value="5-10-lakh">
                            {t("forms:quote.budgetRanges.5-10-lakh")}
                          </SelectItem>
                          <SelectItem value="10-25-lakh">
                            {t("forms:quote.budgetRanges.10-25-lakh")}
                          </SelectItem>
                          <SelectItem value="25-50-lakh">
                            {t("forms:quote.budgetRanges.25-50-lakh")}
                          </SelectItem>
                          <SelectItem value="50-lakh-plus">
                            {t("forms:quote.budgetRanges.50-lakh-plus")}
                          </SelectItem>
                          <SelectItem value="discuss">
                            {t("forms:quote.budgetRanges.discuss")}
                          </SelectItem>
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
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.labels.industryType")}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t(
                                "forms:quote.placeholders.selectIndustry"
                              )}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="manufacturing">
                            {t("forms:quote.industries.manufacturing")}
                          </SelectItem>
                          <SelectItem value="power-generation">
                            {t("forms:quote.industries.powerGeneration")}
                          </SelectItem>
                          <SelectItem value="water-treatment">
                            {t("forms:quote.industries.waterTreatment")}
                          </SelectItem>
                          <SelectItem value="food-processing">
                            {t("forms:quote.industries.foodProcessing")}
                          </SelectItem>
                          <SelectItem value="pharmaceutical">
                            {t("forms:quote.industries.pharmaceutical")}
                          </SelectItem>
                          <SelectItem value="chemical">
                            {t("forms:quote.industries.chemical")}
                          </SelectItem>
                          <SelectItem value="oil-gas">
                            {t("forms:quote.industries.oilGas")}
                          </SelectItem>
                          <SelectItem value="renewable-energy">
                            {t("forms:quote.industries.renewableEnergy")}
                          </SelectItem>
                          <SelectItem value="infrastructure">
                            {t("forms:quote.industries.infrastructure")}
                          </SelectItem>
                          <SelectItem value="other">
                            {t("forms:quote.industries.other")}
                          </SelectItem>
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
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 text-wrap-safe responsive-text">
                {t("forms:quote.sections.requiredServices")}
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
                                      ? field.onChange([
                                          ...field.value,
                                          service.id,
                                        ])
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
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2 text-wrap-safe responsive-text">
                {t("forms:quote.sections.technicalSpecifications")}
              </h3>

              <FormField
                control={form.control}
                name="specifications"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {t("forms:quote.labels.detailedRequirements")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t(
                          "forms:quote.placeholders.detailedRequirements"
                        )}
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-safe">
                <FormField
                  control={form.control}
                  name="projectScale"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.labels.projectScale")}
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t(
                                "forms:quote.placeholders.selectProjectScale"
                              )}
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="small">
                            {t("forms:quote.projectScale.small")}
                          </SelectItem>
                          <SelectItem value="medium">
                            {t("forms:quote.projectScale.medium")}
                          </SelectItem>
                          <SelectItem value="large">
                            {t("forms:quote.projectScale.large")}
                          </SelectItem>
                          <SelectItem value="enterprise">
                            {t("forms:quote.projectScale.enterprise")}
                          </SelectItem>
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
                      <FormLabel className="text-wrap-safe">
                        {t("forms:quote.labels.preferredBrands")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t(
                            "forms:quote.placeholders.preferredBrands"
                          )}
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
                    <FormLabel>
                      {t("forms:quote.fields.additionalRequirements.label")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t(
                          "forms:quote.placeholders.additionalRequirements"
                        )}
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
                    <Loader2 className="me-2 h-4 w-4 animate-spin rtl-flip" />
                    {t("forms:quote.submitting")}
                  </>
                ) : (
                  <>
                    <FileText className="me-2 h-4 w-4 rtl-flip" />
                    {t("forms:quote.buttons.submitRequest")}
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
                  <a
                    href="tel:+91-94627-71662"
                    className="flex items-center justify-center"
                  >
                    <Phone className="me-2 h-4 w-4 rtl-flip" />
                    {t("forms:quote.buttons.callUrgent")}
                  </a>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex-1 border-border text-foreground hover:bg-transparent hover:text-foreground hover:border-border"
                >
                  <a
                    href="mailto:info@powertonengineering.com"
                    className="flex items-center justify-center"
                  >
                    <Mail className="me-2 h-4 w-4 rtl-flip" />
                    {t("forms:quote.buttons.emailRequirements")}
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
              <h4 className="font-medium text-foreground mb-2">
                {t("forms:quote.process.heading")}
              </h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• {t("forms:quote.process.steps.technicalReview")}</li>
                <li>• {t("forms:quote.process.steps.detailedProposal")}</li>
                <li>• {t("forms:quote.process.steps.costBreakdown")}</li>
                <li>• {t("forms:quote.process.steps.followUpCall")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">
                {t("forms:quote.assistance.heading")}
              </h4>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-primary" />
                  <span>{t("forms:quote.assistance.technicalTeam")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-primary" />
                  <span>{t("forms:quote.assistance.email")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
