import { useEffect, useState } from "react";

const useWebSocket = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const socket = new WebSocket(url);

  const handleWebsocket = (event: any) => {
    const parsedData = JSON.parse(event.data);
    setData(parsedData);
  };

  useEffect(() => {
    socket.addEventListener("message", handleWebsocket);

    return () => socket.removeEventListener("message", handleWebsocket);
  }, []);

  return { data };
};

export default useWebSocket;
