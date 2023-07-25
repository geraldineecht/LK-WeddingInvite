import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        '10': 'repeat(10, minmax(0, 1fr))',

      },
      gridRow: {
        'span-9': 'span 9 / span 9',
      }
    }
  },
  plugins: [],
} satisfies Config;
