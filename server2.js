import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Homepage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>NOT FOUND</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("SERVER ERROR");
  }

  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 200;
  // res.write("<h1>Hello from server</h1>");
  // res.end();

  //   res.writeHead(500, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify({ message: "Server error" }));
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
