/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Brand Color Palette
      colors: {
        // Primary Colors
        'slate-blue': '#3D4E5C',        // Brand primary
        'light-slate': '#658199',       // Gradient partner
        
        // Action Colors
        'teal': '#2A747E',              // Primary CTA buttons
        
        // Accent Colors (Orange Palette)
        'vibrant-orange': '#E4980E',    // Secondary, highlights
        'light-orange': '#F5A623',      // Hover states
        'dark-orange': '#C77D0A',       // Pressed states
        
        // Neutral Palette
        'charcoal': '#333333',          // Primary text
        'dark-gray': '#717171',         // Secondary text
        'medium-gray': '#E5E5E5',       // Borders
        'light-gray': '#F2F2F2',        // Backgrounds, dark BG text
        
        // Semantic Colors
        'success': '#27AE60',           // Green for positive outcomes
        'error': '#E74C3C',             // Red for errors
        'info': '#3498DB',              // Blue for informational content
      },

      // Typography
      fontFamily: {
        // Lato is loaded from Google Fonts in index.css
        'sans': ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
        'mono': ['Courier New', 'Consolas', 'Monaco', 'monospace'],
      },

      fontSize: {
        'display': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['32px', { lineHeight: '1.25', fontWeight: '600' }],
        'h2': ['24px', { lineHeight: '1.35', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'h4': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'micro': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },

      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },

      // Spacing Scale (4px base unit)
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },

      // Border Radius
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '10px',
        'xl': '16px',
        'full': '999px',
      },

      // Shadows
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 2px 8px rgba(0,0,0,0.08)',
        'lg': '0 4px 16px rgba(0,0,0,0.12)',
        'xl': '0 8px 32px rgba(0,0,0,0.16)',
      },

      // Transitions
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      // Container Widths
      maxWidth: {
        'narrow': '768px',
        'standard': '1024px',
        'wide': '1280px',
      },

      // Gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3D4E5C 0%, #658199 100%)',
        'gradient-accent': 'linear-gradient(135deg, #E4980E 0%, #F5A623 100%)',
      },
    },
  },
  plugins: [],
}
