export interface IStreamOrderBook {
  data: {
    lastUpdateId: string;
    asks: Array<Array<string>>;
    bids: Array<Array<string>>;
  };
  stream: string;
}

export interface IStreamTradePrice {
  data: {
    E: number;
    M: boolean;
    T: number;
    a: number;
    b: number;
    e: string;
    m: boolean;
    p: string;
    q: string;
    s: string;
    t: number;
  };
  stream: string;
}
