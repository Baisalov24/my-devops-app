const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Cheers my ci-cd pipeline is working!!!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
