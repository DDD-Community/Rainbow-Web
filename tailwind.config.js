/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "hand-heart": "url('../assets/images/icons/category/handHeart.svg')",
        book: "url('../assets/images/icons/category/book.svg')",
        bus: "url('../assets/images/icons/category/bus.svg')",
        medical: "url('../assets/images/icons/category/medical.svg')",
        food: "url('../assets/images/icons/category/food.svg')",
        health: "url('../assets/images/icons/category/health.svg')",
        drink: "url('../assets/images/icons/category/drink.svg')",
        clothes: "url('../assets/images/icons/category/clothes.svg')",
        home: "url('../assets/images/icons/category/home.svg')",
        phone: "url('../assets/images/icons/category/phone.svg')",
        "daily-necessity": "url('../assets/images/icons/category/dailyNecessity.svg')",
        ticket: "url('../assets/images/icons/category/ticket.svg')",
        others: "url('../assets/images/icons/category/others.svg')"
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
      borderRadius: {
        10: "10px"
      },
      colors: {
        dimmed: "rgba(0, 0, 0, 0.24)",

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
        "primary-bg-disabled": "#FFF7F5",

        "category-yellow": "#FFEB3A",
        "category-mint": "#A1F9E4",
        "category-navy": "#9AB6FF",
        "category-light-red": "#FF8585",
        "category-orange": "#FFA858",
        "category-light-orange": "#FF774E",
        "category-brown": "#E5AA99",
        "category-light-pink": "#FFAAFC",
        "category-aero-blue": "#AFFFC6",
        "category-light-green": "#66D8A1",
        "category-sky": "#7CD0FF",
        "category-light-purple": "#D2AFFF",
        "category-light-gray": "#C5C5C5"
      },
      dropShadow: {
        "shadow-bottom-s": "0px 1px 4px rgba(42, 39, 65, 0.08)",
        "shadow-bottom-m": "0px 2px 10px rgba(42, 39, 65, 0.1",
        "shadow-bottom-l": "0px 4px 8px 3px rgba(42, 39, 65, 0.1)",
        "shadow-bottom-xl": "0px 8px 16px 2px rgba(42, 39, 65, 0.18)",
        "shadow-bottom-2xl": "0px 10px 18px 4px rgba(42, 39, 65, 0.22)",

        "shadow-top-s": "0px -1px 4px rgba(42, 39, 65, 0.08)",
        "shadow-top-m": "0px -2px 10px rgba(42, 39, 65, 0.1)",
        "shadow-top-l": "0px -4px 8px 3px rgba(42, 39, 65, 0.1)",
        "shadow-top-xl": "0px -8px 16px 2px rgba(42, 39, 65, 0.18)",
        "shadow-top-2xl": "0px -10px 18px 4px rgba(42, 39, 65, 0.22)"
      }
    }
  },
  plugins: []
};
