// src/globals.d.ts
declare module 'bootstrap/dist/js/bootstrap.bundle.min.js' {
  const bootstrap: {
    Carousel: new (element: Element, options?: unknown) => any;
    // Add other Bootstrap components as needed, e.g., Modal, Tooltip, etc.
  };
  export = bootstrap;
}
