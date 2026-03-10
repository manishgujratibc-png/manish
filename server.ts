import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("Contact form submission:", { name, email, message });
    // In a real app, you'd send an email here using a service like Resend or SendGrid
    res.json({ success: true, message: "Message received! We will get back to you soon." });
  });

  app.post("/api/book", (req, res) => {
    const { name, phone, service, date, time } = req.body;
    console.log("Booking request:", { name, phone, service, date, time });
    res.json({ success: true, message: "Booking request submitted! We will call you to confirm." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
