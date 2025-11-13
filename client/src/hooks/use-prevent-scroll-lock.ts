import { useEffect } from 'react';

/**
 * Hook to prevent layout shift when modals/dialogs open
 * Blocks Radix UI from manipulating body styles that cause scrollbar to disappear
 */
export function usePreventScrollLock() {
  useEffect(() => {
    // Save original body styles
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Create a MutationObserver to watch for body style changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const body = document.body;
          
          // If Radix tries to add padding-right, remove it
          if (body.style.paddingRight && body.style.paddingRight !== '0px') {
            body.style.paddingRight = '0px';
          }
          
          // Keep overflow as scroll, not hidden
          if (body.style.overflow === 'hidden') {
            body.style.overflow = 'scroll';
          }
        }
      });
    });

    // Start observing body for attribute changes
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style'],
    });

    // Cleanup
    return () => {
      observer.disconnect();
      // Restore original styles if needed
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);
}
