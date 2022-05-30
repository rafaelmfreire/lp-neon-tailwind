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
        100: "#F1F0F5",
      },
      gradient: {
        top: "rgba(53, 203, 226, 0.4) 0%",
        bottom: "rgba(53, 202, 226, 0) 100%",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      "title-64": ["6.4rem", { lineHeight: "112%", letterSpacing: "-1px" }],
      "title-40": ["4rem", { lineHeight: "112%", letterSpacing: "-1px" }],
      "title-24": ["2.4rem", { lineHeight: "150%", letterSpacing: "-0.5px" }],
      "title-20": ["2rem", { lineHeight: "112%", letterSpacing: "-0.5px" }],
      "text-18": ["1.8rem", { lineHeight: "150%", letterSpacing: "0px" }],
      "text-16": ["1.6rem", { lineHeight: "150%", letterSpacing: "0px" }],
      "text-14": ["1.4rem", { lineHeight: "150%", letterSpacing: "0px" }],
    },

    extend: {},
  },
  plugins: [],
};
