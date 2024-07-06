/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "custom-cream": "#F4F1DE",
      "custom-orange": "#E07A5F",
      "custom-blue": "#3D405B",
      "custom-green": "#81B29A",
      "custom-mustard": "#F2CC8F",
    },
  },
  plugins: [require("flowbite/plugin")],
};
