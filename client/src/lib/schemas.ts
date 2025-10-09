import { z } from "zod";
import i18n from "@/lib/i18n";

// Contact form schema
export const insertContactSchema = z.object({
  firstName: z.string().min(1, i18n.t("forms:validation.firstNameRequired")),
  lastName: z.string().min(1, i18n.t("forms:validation.lastNameRequired")),
  email: z.string().email(i18n.t("forms:validation.invalidEmail")),
  phone: z.string().min(1, i18n.t("forms:validation.phoneRequired")),
  service: z.string().min(1, i18n.t("forms:validation.selectService")),
  message: z.string().min(1, i18n.t("forms:validation.messageRequired")),
  agreedToPrivacy: z.boolean().optional(),
});

// Quote request schema
export const insertQuoteRequestSchema = z.object({
  firstName: z.string().min(1, i18n.t("forms:validation.firstNameRequired")),
  lastName: z.string().min(1, i18n.t("forms:validation.lastNameRequired")),
  email: z.string().email(i18n.t("forms:validation.invalidEmail")),
  phone: z.string().min(1, i18n.t("forms:validation.phoneRequired")),
  company: z.string().optional(),
  service: z.string().min(1, i18n.t("forms:validation.selectService")),
  projectDetails: z
    .string()
    .min(1, i18n.t("forms:validation.projectDetailsRequired")),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

// Types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
