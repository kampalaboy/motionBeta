export default function handler(req, res) {
  const io = req.socket.server.io;

  if (req.method === "POST") {
    // Emit an event to WebSocket when a POST request is made to /api/orders
    io.emit("orderEvent", {
      message: "POST request made to /api/trade",
      data: req.body,
    });

    // Process the order (e.g., save to database)
    res.status(201).json({ message: "Trade printed" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
