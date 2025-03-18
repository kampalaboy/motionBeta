import { useEffect } from "react";
import { io } from "socket.io-client";

const OrderListener = () => {
  useEffect(() => {
    const socket = io("");

    socket.on("orderEvent", (data) => {
      console.log("Received order event:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return null;
};

export default OrderListener;
