module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        agros: "url('assets/img/Agros.png')",
        footer: "url('assets/img/Footer.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
