const getItemRarity = (itemParts: string | number | undefined) => {
  if (typeof itemParts === "number") {
    switch (itemParts) {
      case 1:
        return "일반";
      case 2:
        return "고급";
      case 3:
        return "희귀";
      case 4:
        return "영웅";
      case 5:
        return "전설";
      default:
        return "";
    }
  }
  return itemParts ? itemParts.split(" ")[0] : "";
};

export default getItemRarity;
