/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/content/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "hsl(var(--foreground))",
            fontSize: "1.0625rem",
            lineHeight: "1.5",
            h1: {
              color: "hsl(var(--foreground))",
              fontWeight: "800",
              letterSpacing: "-0.02em",
              fontSize: "2.125rem",
              lineHeight: "1.18",
              marginTop: "0.2rem",
              marginBottom: "0.1rem",
            },
            h2: {
              color: "hsl(var(--foreground))",
              fontWeight: "700",
              borderBottom: "1px solid hsl(var(--border))",
              paddingBottom: "0.04em",
              fontSize: "1.625rem",
              lineHeight: "1.3",
              marginTop: "0.2rem",
              marginBottom: "0.09rem",
            },
            h3: {
              color: "hsl(var(--foreground))",
              fontWeight: "700",
              fontSize: "1.3125rem",
              lineHeight: "1.35",
              marginTop: "0.14rem",
              marginBottom: "0.06rem",
            },
            h4: {
              color: "hsl(var(--foreground))",
              fontWeight: "600",
              fontSize: "1.0625rem",
              lineHeight: "1.45",
              marginTop: "0.11rem",
              marginBottom: "0.045rem",
            },
            p: {
              color: "hsl(var(--foreground))",
              fontSize: "1.0625rem",
              lineHeight: "1.5",
              marginTop: "0.08rem",
              marginBottom: "0.08rem",
            },
            ul: {
              paddingLeft: "2rem",
              marginTop: "0.12rem",
              marginBottom: "0.12rem",
            },
            ol: {
              paddingLeft: "2rem",
              marginTop: "0.12rem",
              marginBottom: "0.12rem",
            },
            li: {
              marginTop: "0.06rem",
              marginBottom: "0.06rem",
            },
            a: {
              color: "hsl(var(--primary))",
              textDecoration: "none",
            },
            "a:hover": {
              textDecoration: "underline",
              textDecorationThickness: "2px",
              textUnderlineOffset: "4px",
            },
            strong: {
              color: "hsl(var(--foreground))",
            },
            code: {
              backgroundColor: "hsl(var(--muted))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.375rem",
              padding: "0.125rem 0.375rem",
              color: "hsl(var(--primary))",
            },
            pre: {
              backgroundColor: "hsl(var(--muted))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              padding: "1rem",
            },
            blockquote: {
              borderLeft: "4px solid hsl(var(--primary))",
              backgroundColor: "hsl(var(--muted))",
              padding: "1rem",
              borderRadius: "0 0.5rem 0.5rem 0",
            },
            hr: {
              borderColor: "hsl(var(--border))",
              marginTop: "0.25rem",
              marginBottom: "0.25rem",
            },
            table: {
              borderCollapse: "separate",
              borderSpacing: 0,
            },
            th: {
              backgroundColor: "hsl(var(--muted))",
              border: "1px solid hsl(var(--border))",
              padding: "0.75rem",
              fontWeight: "600",
            },
            td: {
              border: "1px solid hsl(var(--border))",
              padding: "0.75rem",
            },
          },
        },
        invert: {
          css: {
            color: "hsl(var(--foreground))",
            a: {
              color: "hsl(var(--primary))",
            },
            code: {
              backgroundColor: "hsl(var(--muted))",
              borderColor: "hsl(var(--border))",
              color: "hsl(var(--primary))",
            },
            pre: {
              backgroundColor: "hsl(var(--muted))",
              borderColor: "hsl(var(--border))",
            },
            blockquote: {
              borderLeftColor: "hsl(var(--primary))",
              backgroundColor: "hsl(var(--muted))",
            },
            th: {
              backgroundColor: "hsl(var(--muted))",
              borderColor: "hsl(var(--border))",
            },
            td: {
              borderColor: "hsl(var(--border))",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
