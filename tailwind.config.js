/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F7FA",
          200: "#CFDCE8",
          500: "#5480A3",
          700: "#35526F",
          900: "#2C3E50",
        },
        gray: {
          50: "#F8F9FA",
          200: "#D6DCE1",
          500: "#697E8E",
          700: "#45535F",
          900: "#353D45",
        },
        success: {
          50: "#F2F7EE",
          200: "#C8DEB8",
          500: "#6A994E",
          700: "#3F5B30",
          900: "#2F4027",
        },
        error: {
          50: "#FDF4F3",
          200: "#FAD2CE",
          500: "#E35E50",
          700: "#C0392B",
          900: "#782C24",
        },
      },
    },
  },
  plugins: [],
};
