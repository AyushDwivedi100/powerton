import { z } from "zod";
import i18n from '@/lib/i18n';

// Contact form schema
export const insertContactSchema = z.object({
  firstName: z.string().min(1, i18n.t('forms:validation.firstNameRequired', 'First name is required')),
  lastName: z.string().min(1, i18n.t('forms:validation.lastNameRequired', 'Last name is required')),
  email: z.string().email(i18n.t('forms:validation.invalidEmail', 'Invalid email address')),
  phone: z.string().min(1, i18n.t('forms:validation.phoneRequired', 'Phone number is required')),
  service: z.string().min(1, i18n.t('forms:validation.selectService', 'Please select a service')),
  message: z.string().min(1, i18n.t('forms:validation.messageRequired', 'Message is required')),
  agreedToPrivacy: z.boolean().optional(),
});

// Quote request schema
export const insertQuoteRequestSchema = z.object({
  firstName: z.string().min(1, i18n.t('forms:validation.firstNameRequired', 'First name is required')),
  lastName: z.string().min(1, i18n.t('forms:validation.lastNameRequired', 'Last name is required')),
  email: z.string().email(i18n.t('forms:validation.invalidEmail', 'Invalid email address')),
  phone: z.string().min(1, i18n.t('forms:validation.phoneRequired', 'Phone number is required')),
  company: z.string().optional(),
  service: z.string().min(1, i18n.t('forms:validation.selectService', 'Please select a service')),
  projectDetails: z.string().min(1, i18n.t('forms:validation.projectDetailsRequired', 'Project details are required')),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

// Types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;