export const processOrders = ({ data, ...rest }: any) => {
  const { asks, bids } = data;

  return { asks, bids };
};
