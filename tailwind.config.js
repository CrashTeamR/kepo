/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // black colors
        "kp-black-100": "#333333",
        "kp-black-80": "rgba(51,51,51,0.8)",

        // gray colors
        "kp-gray-100": "#E2E8F0",
        "kp-gray-200": "#CBD5E0",
        "kp-gray-300": "#A0AEC0",
        "kp-gray-400": "#909DAD",
        "kp-gray-500": "#707A86",

        // teal colors
        "kp-teal-100": "#00AAAA",
        "kp-teal-200": "#319795",
        "kp-teal-300": "#2C7A7B",
        "kp-teal-400": "#065666",

        // green
        "kp-green-100": "#AACCAA",
      },
    },
  },
  plugins: [],
};
