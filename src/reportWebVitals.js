// Enhanced web vitals reporting with analytics integration
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((webVitals) => {
      // Core Web Vitals - using the default export approach
      if (webVitals.getCLS) webVitals.getCLS(onPerfEntry);
      if (webVitals.getFID) webVitals.getFID(onPerfEntry);
      if (webVitals.getFCP) webVitals.getFCP(onPerfEntry);
      if (webVitals.getLCP) webVitals.getLCP(onPerfEntry);
      if (webVitals.getTTFB) webVitals.getTTFB(onPerfEntry);
      
      // Additional metrics (if supported)
      if (webVitals.getINP) {
        webVitals.getINP(onPerfEntry);
      }
    }).catch((error) => {
      console.warn('Web Vitals could not be loaded:', error);
    });
  }
};

// Google Analytics 4 integration for web vitals
const sendToGoogleAnalytics = (metric) => {
  // Send to Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  // Console logging for development
  console.log(metric);
};

// Initialize web vitals tracking
const initWebVitals = () => {
  // Send to Google Analytics
  reportWebVitals(sendToGoogleAnalytics);
  
  // Also send to console for development
  reportWebVitals(console.log);
};

export default reportWebVitals;
export { initWebVitals };
