/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      width: {
        343: "343px"
      },
      minWidth: {
        343: "343px"
      },
      maxWidth: {
        375: "375px"
      },
      colors: {
        "gray-700": "#27262E",
        "gray-600": "#5E6066",
        "gray-500": "#8C9097",
        "gray-400": "#BEC3CC",
        "gray-300": "#D5D9E0",
        "gray-200": "#E9EAF0",
        "gray-100": "#F3F5F9",
        "gray-50": "#F8F9FC",
        "primary-default": "#FF5B29",
        "primary-hover": "#F04F1E",
        "primary-disabled": "#FFDACE",
        "primary-bg": "#FFECE8",
        "primary-bg-disabled": "#FFF7F5"
      }
    }
  },
  plugins: []
};
