export default {
  content: ["./src/**/*.{html,js}"],
  safelist: [],
  theme: {
    extend: {
      spacing: {
        90: "90px",
      },
      maxWidth: {
        1440: "90rem", // ✅ Custom class: max-w-1440
      },
    },
  },
  plugins: [],
};
