export const processOrders = ({ data }: any) => {
  const { a: asks, b: bids } = data;

  return { asks, bids };
};
