import { createServer } from 'node:http';

// A cookie-consent style modal over a page, plus an inert-attribute section for comparison.
const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Store</title></head><body>
<main><h1>Store</h1>
  <button onclick="document.getElementById('log').textContent = 'added to cart'">Add to cart</button>
  <div inert><button onclick="document.getElementById('log').textContent = 'inert clicked'">Inert section button</button></div>
  <p id="log" role="status">idle</p></main>
<dialog id="consent" aria-label="Cookie consent"><p>We use cookies.</p>
  <button onclick="document.getElementById('consent').close()">Accept</button></dialog>
<script>document.getElementById('consent').showModal();</script>
</body></html>`;

createServer((_req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  res.end(page);
}).listen(4461, '127.0.0.1');
