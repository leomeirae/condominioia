import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"loading": {
					"to": {
						transform: "rotate(360deg)"
					},
				},
				"pulse-ring": {
					"0%": {
						transform: "scale(0.95)",
						boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.6)",
						opacity: "0.6"
					},
					"70%": {
						transform: "scale(1.05)",
						boxShadow: "0 0 0 15px rgba(59, 130, 246, 0)",
						opacity: "0.3"
					},
					"100%": {
						transform: "scale(0.95)",
						boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)",
						opacity: "0.6"
					}
				},
				"bounce-subtle": {
					"0%, 100%": {
						transform: "translateY(-15%)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
					},
					"50%": {
						transform: "translateY(0)",
						animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
					}
				},
				"shine": {
					"100%": {
						transform: "translateX(100%)"
					}
				},
				flip: {
					to: {
						transform: "rotate(360deg)",
					},
				},
				rotate: {
					to: {
						transform: "rotate(90deg)",
					},
				},
				orbit: {
					"0%": {
						transform:
							"rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
					},
					"100%": {
						transform:
							"rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
					},
				},
				ripple: {
					"0%, 100%": {
						transform: "translate(-50%, -50%) scale(1)",
					},
					"50%": {
						transform: "translate(-50%, -50%) scale(0.9)",
					},
				},
				"image-glow": {
					"0%": {
						"opacity": "0",
						"animation-timing-function": "cubic-bezier(.74, .25, .76, 1)",
					},
					"10%": {
						"opacity": "0.5",
						"animation-timing-function": "cubic-bezier(.12, .01, .08, .99)",
					},
					"100%": {
						"opacity": "1",
					},
				},
				"fade-in": {
					"0%": { opacity: "0", transform: "translateY(10px)" },
					"100%": { opacity: "1", transform: "translateY(0)" }
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				'loading': 'loading 0.6s linear infinite',
				flip: "flip 6s infinite steps(2, end)",
				rotate: "rotate 3s linear infinite both",
				orbit: "orbit calc(var(--duration)*1s) linear infinite",
				ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
				"image-glow": "image-glow 6s ease-out 0.6s forwards",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"pulse-ring": "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"bounce-subtle": "bounce-subtle 2s infinite",
				"shine": "shine 8s ease-in-out infinite"
			},
			spacing: {
				"1/8": "12.5%",
			},
			fontFamily: {
				heading: ['var(--font-heading)'],
				subheading: ['var(--font-subheading)'],
				base: ['var(--font-base)'],
			},
		}
	},
	plugins: [animate],
}

export default config;
