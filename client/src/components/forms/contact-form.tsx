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
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, Mail, Phone } from "lucide-react";
import { FRONTEND_CONFIG } from "@/lib/frontend-config";
import { getServiceOptions } from "@/data/constants";

// Create schema function that uses translations
const createContactFormSchema = (t: any) =>
  z.object({
    name: z.string().min(2, t("contact.fields.name.error")),
    email: z.string().email(t("contact.fields.email.error")),
    phone: z.string().min(10, t("contact.fields.phone.error")),
    company: z.string().optional(),
    subject: z.string().min(1, t("contact.fields.subject.error")),
    message: z.string().min(10, t("contact.fields.message.error")),
    serviceType: z.string().optional(),
  });

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  serviceType?: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation("forms");

  const contactFormSchema = createContactFormSchema(t);

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
      // Create FormData object for PHP
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("company", data.company || "");
      formData.append("subject", data.subject);
      formData.append("message", data.message);
      formData.append("serviceType", data.serviceType || "");

      // Send to PHP handler
      const response = await fetch("/contact-handler.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t("contact.messages.success"),
          description: t("contact.messages.successDesc"),
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: t("contact.messages.error"),
        description: t("contact.messages.errorDesc", {
          phone: FRONTEND_CONFIG.company.phone,
          email: FRONTEND_CONFIG.company.email,
        }),
        duration: 6000,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="text-foreground mx-2 sm:mx-0">
      <CardContent className="p-3 sm:p-4 md:p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 sm:space-y-4 contact-form"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 flex-safe">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-wrap-safe">
                      {t("contact.fields.name.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.fields.name.placeholder")}
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
                      {t("contact.fields.email.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("contact.fields.email.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 flex-safe">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-wrap-safe">
                      {t("contact.fields.phone.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.fields.phone.placeholder")}
                        {...field}
                      />
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
                    <FormLabel className="text-wrap-safe">
                      {t("contact.fields.company.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.fields.company.placeholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 flex-safe">
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-wrap-safe">
                      {t("contact.fields.serviceType.label")}
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t(
                              "contact.fields.serviceType.placeholder"
                            )}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {getServiceOptions(t).map((service) => (
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
                    <FormLabel className="text-wrap-safe">
                      {t("contact.fields.subject.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("contact.fields.subject.placeholder")}
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-wrap-safe">
                    {t("contact.fields.message.label")}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("contact.fields.message.placeholder")}
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="me-2 h-4 w-4 animate-spin rtl-flip" />
                    {t("contact.buttons.sending")}
                  </>
                ) : (
                  <>
                    <Send className="me-2 h-4 w-4 rtl-flip" />
                    {t("contact.buttons.submit")}
                  </>
                )}
              </Button>

              <div className="flex gap-1 sm:gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  asChild
                  className="flex-1 button-outline"
                >
                  <a
                    href="tel:+91-94627-71662"
                    className="flex items-center justify-center"
                  >
                    <Phone className="me-2 h-4 w-4 rtl-flip" />
                    {t("contact.buttons.callNow")}
                  </a>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  asChild
                  className="flex-1 button-outline"
                >
                  <a
                    href="mailto:info@powertonengineering.com"
                    className="flex items-center justify-center"
                  >
                    <Mail className="me-2 h-4 w-4 rtl-flip" />
                    {t("contact.buttons.emailUs")}
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
