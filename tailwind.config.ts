import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		colors: {
  			/* Dynamic brand colors — values come from CSS vars set in app/layout.tsx */
  			'brand':       'var(--color-primary)',
  			'brand-dark':  'var(--color-primary-dark)',
  			'brand-mid':   'var(--color-primary-mid)',
  			'brand-hover': 'var(--color-primary-hover)',
  			'jkkn-green': '#1e7f4e',
  			'jkkn-orange': '#ff6b35',
  			'jkkn-blue': '#0d5a7d',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			xs: '375px',
  			'3xl': '1920px',
  			'4xl': '2560px'
  		},
  		spacing: {
  			safe: 'env(safe-area-inset-bottom)'
  		},
  		fontSize: {
  			'responsive-xs': [
  				'clamp(0.75rem, 2vw, 0.875rem)',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			'responsive-sm': [
  				'clamp(0.875rem, 2.5vw, 1rem)',
  				{
  					lineHeight: '1.5'
  				}
  			],
  			'responsive-base': [
  				'clamp(1rem, 2.5vw, 1.125rem)',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'responsive-lg': [
  				'clamp(1.125rem, 3vw, 1.25rem)',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'responsive-xl': [
  				'clamp(1.25rem, 3.5vw, 1.5rem)',
  				{
  					lineHeight: '1.4'
  				}
  			],
  			'responsive-2xl': [
  				'clamp(1.5rem, 4vw, 2rem)',
  				{
  					lineHeight: '1.3'
  				}
  			],
  			'responsive-3xl': [
  				'clamp(1.875rem, 5vw, 3rem)',
  				{
  					lineHeight: '1.2'
  				}
  			],
  			'responsive-4xl': [
  				'clamp(2.25rem, 6vw, 3.75rem)',
  				{
  					lineHeight: '1.1'
  				}
  			]
  		},
  		maxWidth: {
  			'8xl': '88rem',
  			'9xl': '96rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
