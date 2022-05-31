module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1440px",
      full: "1920px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      brand: {
        blue: "#0073CE",
        "light-blue": "#00A5F0",
        "green-light": "#00D7D7",
        yellow: "#FFC800",
      },
      gray: {
        600: "#33303E",
        500: "#4E4B59",
        400: "#5F5C6B",
        300: "#7A7786",
        200: "#C6C5CE",
        100: "#E1E0E7",
        50: "#F1F0F5",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      "title-64": ["4rem", { lineHeight: "112%", letterSpacing: "-1px" }],
      "title-40": ["2.5rem", { lineHeight: "112%", letterSpacing: "-1px" }],
      "title-32": ["2rem", { lineHeight: "112%", letterSpacing: "-0.5px" }],
      "title-28": ["1.75rem", { lineHeight: "112%", letterSpacing: "-1px" }],
      "title-24": ["1.5rem", { lineHeight: "150%", letterSpacing: "-0.5px" }],
      "title-20": ["1.25rem", { lineHeight: "112%", letterSpacing: "-0.5px" }],
      "title-18": ["1.125rem", { lineHeight: "112%", letterSpacing: "-0.5px" }],
      "title-16": ["1rem", { lineHeight: "120%", letterSpacing: "-0.5px" }],
      "paragraph-18": ["1.125rem", { lineHeight: "150%", letterSpacing: "0px" }],
      "paragraph-16": ["1rem", { lineHeight: "150%", letterSpacing: "0px" }],
      "paragraph-14": ["0.875rem", { lineHeight: "150%", letterSpacing: "0px" }],
    },

    extend: {
      spacing: {
        '13': '3.25rem',
      }
    },
  },
  plugins: [],
};
