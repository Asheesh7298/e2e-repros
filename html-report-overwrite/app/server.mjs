import { createServer } from 'node:http';

createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end('<!doctype html><title>Home</title><h1>Home</h1>');
}).listen(4464, '127.0.0.1');
