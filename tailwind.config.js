/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        rounded4: "5rem",
      },

      boxShadow: {
        "custom-inset": "inset 0 0 0 1px #A9A9A9",
      },

      colors: {
        primary: {
          100: "#092c3ce5",
          200: "#caec55",
          300: "#f4fbdd",
        },

        secondary: {
          100: "#E2E2DS",
          200: "#888883",
          300: "#E4E4E4",
          400: "#A9A9A9",
          500: "#324F5D",
          600: "#092C3C",
          700: "#6430B2",
        },

        accents: {
          100: "rgba(100, 48, 178, 0.4)",
          200: "rgba(202, 236, 85, 0.4)",
          300: "#2fd08a",
          400: "#adb9be",
          500: "#baefd8",
          600: "#6430b2",
          700: "#7e53bf",
          800: "#532894",
          900: "#2fd08a",
        },
      },

      fontFamily: {
        body: ["Kanit"],
        poppins: ["Poppins"],
      },

      screens: {
        mm: "375px",
        ml: "425px",
        xl: "1349px",
      },
    },
  },
};
