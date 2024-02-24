export const getThousandKSeparator = (num: number) => {
  return (num / 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
