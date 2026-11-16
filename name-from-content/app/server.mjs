import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('./page.html', import.meta.url));

createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(page);
}).listen(4462, '127.0.0.1');
