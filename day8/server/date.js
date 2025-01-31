const fs = require('fs');
const http = require('http');

function getCurrentDateTime() {
  const now = new Date();
  const date = now.toDateString();
  const time = now.toTimeString();
  return `${date} - ${time}`;
}

const fileName = 'log.txt';

const server = http.createServer((req, res) => {
  if (req.url === '/log' && req.method === 'GET') {
    const dateTime = getCurrentDateTime();

    fs.appendFile(fileName,` Server accessed on: ${dateTime}\n`, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      console.log(`Logged to file: ${dateTime}`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Date and time logged successfully!');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint not found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});