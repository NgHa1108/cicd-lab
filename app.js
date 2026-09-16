const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    message: 'CI/CD với GitHub Actions', 
    version: '1.1.0',   // ← dòng mới thêm
    time: new Date() 
  }));
});

server.listen(PORT, () => console.log(`Running on ${PORT}`));
module.exports = server;
