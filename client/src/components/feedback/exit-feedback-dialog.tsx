import { useState, useEffect } from "react";
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

const feedbackSchema = z.object({
  rating: z.number().min(1, "Please provide a rating").max(5),
  didNotLike: z.string().min(1, "This field is required"),
  whyNoQuote: z.string().min(1, "This field is required"),
  missingInfo: z.string().min(1, "This field is required"),
  name: z.string().optional(),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  company: z.string().optional(),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export default function ExitFeedbackDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownOnce, setHasShownOnce] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const { toast } = useToast();
  const { t } = useTranslation();

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
      formData.append("didNotLike", data.didNotLike || "Not provided");
      formData.append("whyNoQuote", data.whyNoQuote || "Not provided");
      formData.append("missingInfo", data.missingInfo || "Not provided");
      formData.append("name", data.name || "Anonymous");
      formData.append("email", data.email || "Not provided");
      formData.append("company", data.company || "Not provided");

      const response = await fetch("/feedback-handler.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Thank you for your feedback!",
          description: "Your feedback has been submitted successfully.",
        });
        setIsOpen(false);
        form.reset();
      } else {
        throw new Error(result.message || "Failed to submit feedback");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your feedback. Please try again.",
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
            We'd Love Your Feedback!
          </DialogTitle>
          <DialogDescription data-testid="text-feedback-description">
            Help us improve your experience. Your feedback is valuable to us.
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
                    How would you rate your experience? *
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
                    What didn't you like about our website? *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us what could be improved..."
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
                    Why didn't you request a quote? *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Let us know what held you back..."
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
                    What information were you looking for? *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Help us understand what you needed..."
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
                Contact Information (Optional)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-name">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
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
                      <FormLabel data-testid="label-email">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
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
                    <FormLabel data-testid="label-company">Company</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company name"
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
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                data-testid="button-skip-feedback"
              >
                Skip
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
