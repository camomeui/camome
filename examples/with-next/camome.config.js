/** @type { import("@camome/system").Config;} */
const config = {
  themes: {
    light: {
      color: {
        primary: {
          0: "#faf5ff",
          1: "#f3e8ff",
          2: "#e9d5ff",
          3: "#d8b4fe",
          4: "#c084fc",
          5: "#a855f7",
          6: "#9333ea",
          7: "#7e22ce",
          8: "#6b21a8",
          9: "#581c87",
        },
      },
      Switch: {
        bgOn: (get) => get("color.success.emphasis"),
        bgOff: (get) => get("color.danger.emphasis"),
        fontOff: (get) => get("color.font.onEmphasis"),
      },
    },
  },
};

module.exports = config;
