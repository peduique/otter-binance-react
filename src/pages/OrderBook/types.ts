import { WebSocketHook } from "react-use-websocket/dist/lib/types";

export interface IStreamOrderBook {
  data: {
    lastUpdateId: string;
    asks: string[][];
    bids: string[][];
  };
  stream: string;
}

export interface IStreamTradePrice {
  data: {
    e: string;
    E: number;
    s: string;
    c: string;
    o: string;
    h: string;
    l: string;
    v: string;
    q: string;
  };
  stream: string;
}

export type TWSData = WebSocketHook["lastJsonMessage"] &
  IStreamTradePrice &
  IStreamOrderBook;
