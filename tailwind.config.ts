import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:    '#98495C',
          secondary:  '#B37E85',
          tertiary:   '#715B4B',
          deep:       '#5a2e3e',
          dark:       '#1a0f14',
          charcoal:   '#2a1a20',
          rose:       '#e8c4cb',
          blush:      '#f5e8eb',
          gold:       '#c9a961',
          'gold-light':'#e4cc94',
          cream:      '#fdf8f2',
          light:      '#f8f3f5',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        angler:     ['Angler', 'serif'],
        barcelony:  ['Barcelony', 'serif'],
      },
      backgroundImage: {
        'gradient-brand':    'linear-gradient(135deg, #5a2e3e 0%, #98495C 50%, #B37E85 100%)',
        'gradient-dark':     'linear-gradient(135deg, #1a0f14 0%, #2a1a20 100%)',
        'gradient-gold':     'linear-gradient(135deg, #c9a961 0%, #e4cc94 50%, #c9a961 100%)',
        'gradient-rose':     'linear-gradient(135deg, #98495C 0%, #B37E85 100%)',
        'gradient-hero':     'linear-gradient(105deg, rgba(26,15,20,0.97) 0%, rgba(26,15,20,0.85) 50%, rgba(26,15,20,0.3) 100%)',
        'gradient-section':  'linear-gradient(180deg, #1a0f14 0%, #2a1a20 100%)',
        'gradient-overlay':  'linear-gradient(to right, rgba(26,15,20,1) 0%, rgba(26,15,20,0.7) 60%, transparent 100%)',
      },
      boxShadow: {
        'brand':     '0 4px 30px rgba(152,73,92,0.25)',
        'brand-lg':  '0 8px 50px rgba(152,73,92,0.35)',
        'gold':      '0 4px 20px rgba(201,169,97,0.3)',
        'card':      '0 2px 20px rgba(26,15,20,0.08)',
        'card-hover':'0 8px 40px rgba(26,15,20,0.16)',
        'inner-brand': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease-out both',
        'fade-in':    'fadeIn 0.5s ease-out both',
        'shimmer':    'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
