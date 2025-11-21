import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

type FeedbackFormData = {
  rating: number;
  didNotLike: string;
  whyNoQuote: string;
  missingInfo: string;
  name?: string;
  email?: string;
  company?: string;
};

export default function FeedbackForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const { toast } = useToast();
  const { t } = useTranslation("forms");

  const feedbackSchema = useMemo(() => z.object({
    rating: z.number().min(1, t("feedback.validation.ratingRequired")).max(5),
    didNotLike: z.string().min(1, t("feedback.validation.fieldRequired")),
    whyNoQuote: z.string().min(1, t("feedback.validation.fieldRequired")),
    missingInfo: z.string().min(1, t("feedback.validation.fieldRequired")),
    name: z.string().optional(),
    email: z.string().email(t("feedback.validation.invalidEmail")).optional().or(z.literal("")),
    company: z.string().optional(),
  }), [t]);

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      rating: 0,
      didNotLike: "",
      whyNoQuote: "",
      missingInfo: "",
      name: "",
      email: "",
      company: "",
    },
  });

  const selectedRating = form.watch("rating");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let exitIntentListener: ((e: MouseEvent) => void) | null = null;

    const showFeedbackDialog = () => {
      if (!hasShownOnce) {
        // Dispatch custom event to close the stock alert sidebar
        window.dispatchEvent(new CustomEvent("closeSidebar"));
        setIsOpen(true);
        setHasShownOnce(true);
      }
    };

    timeoutId = setTimeout(() => {
      showFeedbackDialog();
    }, 120000);

    exitIntentListener = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showFeedbackDialog();
      }
    };

    document.addEventListener("mouseleave", exitIntentListener);

    return () => {
      clearTimeout(timeoutId);
      if (exitIntentListener) {
        document.removeEventListener("mouseleave", exitIntentListener);
      }
    };
  }, [hasShownOnce]);

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("rating", data.rating.toString());
      formData.append("didNotLike", data.didNotLike || t("feedback.messages.notProvided"));
      formData.append("whyNoQuote", data.whyNoQuote || t("feedback.messages.notProvided"));
      formData.append("missingInfo", data.missingInfo || t("feedback.messages.notProvided"));
      formData.append("name", data.name || t("feedback.messages.anonymous"));
      formData.append("email", data.email || t("feedback.messages.notProvided"));
      formData.append("company", data.company || t("feedback.messages.notProvided"));

      const response = await fetch("/feedback-handler.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: t("feedback.messages.success.title"),
          description: t("feedback.messages.success.description"),
        });
        setIsOpen(false);
        form.reset();
      } else {
        throw new Error(result.message || t("feedback.messages.error.failedToSubmit"));
      }
    } catch (error) {
      toast({
        title: t("feedback.messages.error.title"),
        description: t("feedback.messages.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="dialog-exit-feedback">
        <DialogHeader>
          <DialogTitle className="text-2xl" data-testid="text-feedback-title">
            {t("feedback.title")}
          </DialogTitle>
          <DialogDescription data-testid="text-feedback-description">
            {t("feedback.description")}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold" data-testid="label-rating">
                    {t("feedback.fields.rating.label")}
                  </FormLabel>
                  <FormControl>
                    <div className="flex gap-2" data-testid="rating-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => field.onChange(star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className="transition-transform hover:scale-110"
                          data-testid={`button-star-${star}`}
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= (hoveredStar || selectedRating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="didNotLike"
              render={({ field }) => (
                <FormItem>
                  <FormLabel data-testid="label-did-not-like">
                    {t("feedback.fields.didNotLike.label")}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("feedback.fields.didNotLike.placeholder")}
                      className="resize-none"
                      rows={3}
                      {...field}
                      data-testid="input-did-not-like"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whyNoQuote"
              render={({ field }) => (
                <FormItem>
                  <FormLabel data-testid="label-why-no-quote">
                    {t("feedback.fields.whyNoQuote.label")}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("feedback.fields.whyNoQuote.placeholder")}
                      className="resize-none"
                      rows={3}
                      {...field}
                      data-testid="input-why-no-quote"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="missingInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel data-testid="label-missing-info">
                    {t("feedback.fields.missingInfo.label")}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("feedback.fields.missingInfo.placeholder")}
                      className="resize-none"
                      rows={3}
                      {...field}
                      data-testid="input-missing-info"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4 pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                {t("feedback.sections.contactInfo")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-name">{t("feedback.fields.name.label")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("feedback.fields.name.placeholder")}
                          {...field}
                          data-testid="input-name"
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
                      <FormLabel data-testid="label-email">{t("feedback.fields.email.label")}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("feedback.fields.email.placeholder")}
                          {...field}
                          data-testid="input-email"
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
                    <FormLabel data-testid="label-company">{t("feedback.fields.company.label")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("feedback.fields.company.placeholder")}
                        {...field}
                        data-testid="input-company"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1"
                data-testid="button-submit-feedback"
              >
                {isSubmitting ? t("feedback.buttons.submitting") : t("feedback.buttons.submit")}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                data-testid="button-skip-feedback"
              >
                {t("feedback.buttons.skip")}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
