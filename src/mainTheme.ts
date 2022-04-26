const mainTheme = {
  color: {
    black: "#202020",
    white: "#F0F0F0",
    default: "#020028",
    sub: "#2D81FF",
    rarity: {
      common: "#FFFFFF",
      uncommon: "#8DF901",
      rare: "#00B0FA",
      epic: "#BF07C2",
      legendary: "#F97629",
      artifact: "#FA5D00",
      ancient: "#E3C7A1",
      esther: "#3CF2E6",
    },
  },
  font: {
    lead_24px: "bold 24px Inter",
    lead: "bold 20px Inter",
    body: "500 16px Inter",
    body_14px: "500 14px Inter",
  },
};

export type MainTheme = typeof mainTheme;

export default { mainTheme };
