import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Psychology of Color Palette
        'vibe-blue': '#2563eb',        // Deep Blue - Trust, security (dominant)
        'vibe-blue-dark': '#1e3a8a',   // Deep Blue variant
        'vibe-teal': '#0d9488',         // Vibrant Teal - Innovation (interactive)
        'vibe-orange': '#f97316',       // Orange - Urgency (CTAs only)
        'vibe-gray': '#f8fafc',         // Light Gray - Clean background
        'vibe-dark': '#0F172A',         // Keep for contrast
        // Legacy colors for gradients/compatibility
        'vibe-purple': '#7C3AED',
        'vibe-green': '#10B981',
        'vibe-amber': '#F59E0B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue-teal': 'linear-gradient(135deg, #2563eb 0%, #0d9488 100%)',
        'gradient-purple-blue': 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
