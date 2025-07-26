/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: "Regular", // maps to your Regular font
        medium: "Bold", // maps to your Bold font
        light: "Light", // maps to your Light font
      },

    },
  },
  plugins: [],
}