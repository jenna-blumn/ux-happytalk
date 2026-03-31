import type { Config } from "tailwindcss"

const config = {
    // 다크모드 비활성화 (Light Only)
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            // 1. Font Family (Figma: Font Family)
            fontFamily: {
                sans: ["Spoqa Han Sans Neo", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
                quote: ["Fraunces", "serif"],
            },

            // 2. Colors (Recursive Mapping from Figma)
            colors: {
                border: {
                    DEFAULT: "hsl(var(--border-default))",
                    highlight: "hsl(var(--border-highlight))", // 40% opacity applied
                },
                bg: {
                    default: "hsl(var(--bg-default))",
                    subtle: "hsl(var(--bg-subtle))",
                    muted: "hsl(var(--bg-muted))",
                    card: "hsl(var(--bg-card))",
                    overlay: "hsl(var(--bg-overlay))", // 65% opacity
                    state: {
                        primary: "hsl(var(--bg-state-primary))",
                        destructive: "hsl(var(--bg-state-destructive))",
                    }
                },
                text: {
                    default: "hsl(var(--text-default))",
                    subtle: "hsl(var(--text-subtle))",
                    muted: "hsl(var(--text-muted))",
                },
                // Transparent utility colors
                transparent: {
                    blue: {
                        10: "hsl(var(--transparent-blue-10))", // .bg-transparent-blue-10
                        20: "hsl(var(--transparent-blue-20))",
                    }
                }
            },

            // 3. Border Radius (Figma: Radius / Mode: Rounded)
            borderRadius: {
                sm: "var(--radius-sm)", // 6px
                DEFAULT: "var(--radius-md)", // 8px
                md: "var(--radius-md)",
                lg: "var(--radius-lg)", // 12px
                xl: "var(--radius-xl)", // 16px
                "2xl": "var(--radius-2xl)", // 24px
                full: "var(--radius-full)",
            },

            // 4. Spacing (Figma: Spacing)
            spacing: {
                '4.5': '18px', // Figma values like 18px
                '128': '32rem',
                '144': '36rem',
            },

            // 5. Border Width (Figma: Stroke)
            borderWidth: {
                DEFAULT: "1px",
                sm: "0.5px",
                md: "1.5px",
                lg: "2px",
                xl: "3px",
                "2xl": "4px",
            },

            // 6. Custom Shadow & Ring (Inferred from Highlight tokens)
            // 그림자 데이터가 JSON에 없으므로, border-highlight 색상을 활용한 스타일 정의
            boxShadow: {
                // Sort UI 스타일의 디테일한 Inner Border 효과
                'inner-highlight': 'inset 0 0 0 1px hsl(var(--border-highlight))',
                'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config