const http = require('http');

const server = http.createServer((req, res) => {
  res.end("This is new text. I want to check ci-cd pipeline");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
