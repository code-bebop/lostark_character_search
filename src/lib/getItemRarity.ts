const getItemRarity = (itemParts: string | undefined) => {
  return itemParts ? itemParts.split(" ")[0] : "";
};

export default getItemRarity;
