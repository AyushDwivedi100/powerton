import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { isRTL } from "@/lib/i18n";

export function useRTL() {
  const { i18n } = useTranslation();
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    setIsRtl(isRTL(i18n.language));
  }, [i18n.language]);

  return isRtl;
}

// RTL-aware utility functions for directional styling
export const rtlUtils = {
  // Margin utilities
  marginStart: (size: string) =>
    `${isRTL(document.documentElement.lang) ? "mr" : "ml"}-${size}`,
  marginEnd: (size: string) =>
    `${isRTL(document.documentElement.lang) ? "ml" : "mr"}-${size}`,

  // Padding utilities
  paddingStart: (size: string) =>
    `${isRTL(document.documentElement.lang) ? "pr" : "pl"}-${size}`,
  paddingEnd: (size: string) =>
    `${isRTL(document.documentElement.lang) ? "pl" : "pr"}-${size}`,

  // Border utilities
  borderStart: (style?: string) =>
    `${isRTL(document.documentElement.lang) ? "border-r" : "border-l"}${
      style ? "-" + style : ""
    }`,
  borderEnd: (style?: string) =>
    `${isRTL(document.documentElement.lang) ? "border-l" : "border-r"}${
      style ? "-" + style : ""
    }`,

  // Text alignment
  textStart: () =>
    isRTL(document.documentElement.lang) ? "text-right" : "text-left",
  textEnd: () =>
    isRTL(document.documentElement.lang) ? "text-left" : "text-right",

  // Flexbox utilities
  justifyStart: () =>
    isRTL(document.documentElement.lang) ? "justify-end" : "justify-start",
  justifyEnd: () =>
    isRTL(document.documentElement.lang) ? "justify-start" : "justify-end",

  // Position utilities
  start: (size: string) =>
    `${isRTL(document.documentElement.lang) ? "right" : "left"}-${size}`,
  end: (size: string) =>
    `${isRTL(document.documentElement.lang) ? "left" : "right"}-${size}`,

  // Transform utilities for icons
  flipIcon: () => (isRTL(document.documentElement.lang) ? "scale-x-[-1]" : ""),
};

// Hook to get RTL-aware classes
export function useRTLClasses() {
  const isRtl = useRTL();

  return {
    isRtl,
    // Margin classes
    ms: (size: string) => (isRtl ? `mr-${size}` : `ml-${size}`),
    me: (size: string) => (isRtl ? `ml-${size}` : `mr-${size}`),

    // Padding classes
    ps: (size: string) => (isRtl ? `pr-${size}` : `pl-${size}`),
    pe: (size: string) => (isRtl ? `pl-${size}` : `pr-${size}`),

    // Border classes
    bs: (width?: string) =>
      isRtl
        ? `border-r${width ? "-" + width : ""}`
        : `border-l${width ? "-" + width : ""}`,
    be: (width?: string) =>
      isRtl
        ? `border-l${width ? "-" + width : ""}`
        : `border-r${width ? "-" + width : ""}`,

    // Text alignment
    textStart: isRtl ? "text-right" : "text-left",
    textEnd: isRtl ? "text-left" : "text-right",

    // Flexbox
    justifyStart: isRtl ? "justify-end" : "justify-start",
    justifyEnd: isRtl ? "justify-start" : "justify-end",

    // Position
    start: (size: string) => (isRtl ? `right-${size}` : `left-${size}`),
    end: (size: string) => (isRtl ? `left-${size}` : `right-${size}`),

    // Icon transform
    flipIcon: isRtl ? "scale-x-[-1]" : "",

    // Space between (for gap in flex)
    spaceX: (size: string) => `space-x-${size}`,
    spaceXReverse: isRtl ? "space-x-reverse" : "",
  };
}
