module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-gradient-mask-image"),
require("tailwind-scrollbar-hide")],
}
