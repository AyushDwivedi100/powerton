// Image optimization utilities for better performance
export interface ImageOptimizationOptions {
  lazy?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

// Lazy loading implementation
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('loading');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Image sizing helper for responsive images
export function getOptimizedImageSizes(breakpoints: Record<string, number>): string {
  return Object.entries(breakpoints)
    .map(([size, width]) => `(max-width: ${width}px) ${width}px`)
    .join(', ');
}

// Preload critical images
export function preloadCriticalImages(urls: string[]) {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

// Generate optimized image attributes
export function getImageAttributes(
  src: string,
  alt: string,
  options: ImageOptimizationOptions = {}
) {
  const attributes: Record<string, string> = {
    alt,
    loading: options.lazy ? 'lazy' : 'eager',
    decoding: 'async',
  };

  if (options.lazy) {
    attributes['data-src'] = src;
    attributes.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InRyYW5zcGFyZW50Ii8+PC9zdmc+';
    attributes.class = 'lazy-image loading';
  } else {
    attributes.src = src;
  }

  if (options.sizes) {
    attributes.sizes = options.sizes;
  }

  return attributes;
}