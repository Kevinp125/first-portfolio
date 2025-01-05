import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        figmaGray: "#656060", //this is the custom color i added from the figma website 
        navbarFill: "#4F4848", //color for navbar grabed from figma
        navbarBorder: "#7C7A7A", //color for navbar border grabed from figma
        subtlePink: "#FEC9DD", //very subtle pink color for buttons and stuff that match with the blossom color got from figma 
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderWidth: { //added this as well for custom borderWidths
        3: "3px",
      },
      height:{
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
} satisfies Config;
