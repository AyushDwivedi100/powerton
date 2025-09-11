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
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, Mail, Phone, FileUser } from "lucide-react";
import { FRONTEND_CONFIG } from "@/lib/frontend-config";

// Career application form schema
const createCareerFormSchema = (t: any) => z.object({
  name: z.string().min(2, t('forms:career.validation.nameMin')),
  email: z.string().email(t('forms:career.validation.emailInvalid')),
  phone: z.string().min(10, t('forms:career.validation.phoneMin')),
  specialization: z.string().min(1, t('forms:career.validation.specializationRequired')),
  experience: z.string().min(1, t('forms:career.validation.experienceRequired')),
  education: z.string().min(1, t('forms:career.validation.educationRequired')),
  currentCompany: z.string().optional(),
  expectedSalary: z.string().optional(),
  joiningTime: z.string().min(1, t('forms:career.validation.joiningTimeRequired')),
  skills: z.string().min(10, t('forms:career.validation.skillsMin')),
  coverLetter: z.string().min(20, t('forms:career.validation.coverLetterMin')),
  residingAddress: z.string().min(10, t('forms:career.validation.addressMin')),
});

type CareerFormData = {
  name: string;
  email: string;
  phone: string;
  specialization: string;
  experience: string;
  education: string;
  currentCompany?: string;
  expectedSalary?: string;
  joiningTime: string;
  skills: string;
  coverLetter: string;
  residingAddress: string;
};

export default function CareerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation('forms');
  
  const careerFormSchema = createCareerFormSchema(t);
  
  const specializationOptions = [
    { value: "electrical-engineering", label: t('forms:career.specializations.electricalEngineering') },
    { value: "automation-control", label: t('forms:career.specializations.automationControl') },
    { value: "instrumentation", label: t('forms:career.specializations.instrumentation') },
    { value: "project-management", label: t('forms:career.specializations.projectManagement') },
    { value: "technical-sales", label: t('forms:career.specializations.technicalSales') },
    { value: "field-service", label: t('forms:career.specializations.fieldService') },
    { value: "design-engineering", label: t('forms:career.specializations.designEngineering') },
    { value: "solar-renewable", label: t('forms:career.specializations.solarRenewable') },
    { value: "other", label: t('forms:career.specializations.other') },
  ];

  const experienceOptions = [
    { value: "fresher", label: t('forms:career.experience.fresher') },
    { value: "1-3", label: t('forms:career.experience.oneToThree') },
    { value: "3-5", label: t('forms:career.experience.threeToFive') },
    { value: "5-8", label: t('forms:career.experience.fiveToEight') },
    { value: "8-12", label: t('forms:career.experience.eightToTwelve') },
    { value: "12+", label: t('forms:career.experience.twelvePlus') },
  ];

  const joiningTimeOptions = [
    { value: "immediate", label: t('forms:career.joiningTime.immediate') },
    { value: "15-days", label: t('forms:career.joiningTime.fifteenDays') },
    { value: "1-month", label: t('forms:career.joiningTime.oneMonth') },
    { value: "2-months", label: t('forms:career.joiningTime.twoMonths') },
    { value: "3-months", label: t('forms:career.joiningTime.threeMonths') },
    { value: "more-than-3", label: t('forms:career.joiningTime.moreThanThree') },
  ];
  
  const form = useForm<CareerFormData>({
    resolver: zodResolver(careerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      specialization: "",
      experience: "",
      education: "",
      currentCompany: "",
      expectedSalary: "",
      joiningTime: "",
      skills: "",
      coverLetter: "",
      residingAddress: "",
    },
  });

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true);

    try {
      // Create FormData object for PHP
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('specialization', data.specialization);
      formData.append('experience', data.experience);
      formData.append('education', data.education);
      formData.append('currentCompany', data.currentCompany || '');
      formData.append('expectedSalary', data.expectedSalary || '');
      formData.append('joiningTime', data.joiningTime);
      formData.append('skills', data.skills);
      formData.append('coverLetter', data.coverLetter);
      formData.append('residingAddress', data.residingAddress);

      // Send to PHP handler
      const response = await fetch('/contact-handler.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t('forms:career.success.title'),
          description: t('forms:career.success.description'),
          duration: 6000,
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Career form error:', error);
      toast({
        title: t('forms:career.error.title'),
        description: t('forms:career.error.description', { phone: FRONTEND_CONFIG.company.phone, email: FRONTEND_CONFIG.company.email }),
        duration: 6000,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="text-foreground">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-primary mb-2">
            {t('forms:career.labels.title')}
          </h3>
          <p className="text-muted-foreground">
            {t('forms:career.labels.subtitle')}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('forms:career.labels.personalInfo')}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('forms:career.labels.fullName')} *</FormLabel>
                      <FormControl>
                        <Input placeholder={t('forms:career.placeholders.fullName')} {...field} />
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
                      <FormLabel>{t('forms:career.labels.emailAddress')} *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('forms:career.placeholders.email')} {...field} />
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
                      <FormLabel>{t('forms:career.labels.phoneNumber')} *</FormLabel>
                      <FormControl>
                        <Input placeholder={t('forms:career.placeholders.phone')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="residingAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('forms:career.labels.residingAddress')} *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('forms:career.placeholders.address')}
                          className="min-h-[80px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('forms:career.labels.professionalInfo')}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="specialization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('forms:career.labels.specialization')} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('forms:career.placeholders.selectSpecialization')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {specializationOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
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
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('forms:career.labels.experience')} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('forms:career.placeholders.selectExperience')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {experienceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
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
                  name="currentCompany"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('forms:career.labels.currentCompany')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('forms:career.placeholders.currentCompany')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="joiningTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('forms:career.labels.availability')} *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t('forms:career.placeholders.selectAvailability')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {joiningTimeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
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
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('forms:career.labels.education')} *</FormLabel>
                      <FormControl>
                        <Input placeholder={t('forms:career.placeholders.education')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="expectedSalary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('forms:career.labels.expectedSalary')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('forms:career.placeholders.expectedSalary')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                {t('forms:career.labels.technicalSkills')}
              </h4>
              
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('forms:career.labels.technicalSkills')} *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('forms:career.placeholders.skills')}
                        className="min-h-[100px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('forms:career.labels.coverLetter')} *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t('forms:career.placeholders.coverLetter')}
                        className="min-h-[120px] resize-none"
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
                    {t('forms:career.buttons.submitting')}
                  </>
                ) : (
                  <>
                    <FileUser className="mr-2 h-4 w-4" />
                    {t('forms:career.buttons.submit')}
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
                    {t('forms:contact.buttons.callNow')}
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
                    {t('forms:contact.buttons.emailUs')}
                  </a>
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}