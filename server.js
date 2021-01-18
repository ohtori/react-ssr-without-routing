const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs');

import React from './client/node_modules/react';
import App from './client/src/App';
import { renderToString }from './client/node_modules/react-dom/server';


http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const rs = fs.createReadStream(path.join(__dirname, 'client/build/index.html'));
    let data = '';
    rs.on('data', chunk => {
      data += `${chunk}`;
    });
    rs.on('end', () => {      
        https.get('https://jsonplaceholder.typicode.com/users/1/posts', fetchResponse => {
          let fetchedData = '';
          fetchResponse.on('data', chunk => {
            fetchedData += chunk;
          });
          fetchResponse.on('end', chunk => {
            console.log(fetchedData);
            const dataToRender = data
              .replace('<div id="root"></div>', `<script>window.__initialData__=${fetchedData}</script><div id="root">${renderToString(<App initialData={JSON.parse(fetchedData)} />)}</div>`);
              res.writeHead(200, { 'Content-Type': 'text/html'});
              res.write(dataToRender);
              res.end();
          });
        })
    });
    rs.on('error', () => {
      res.setHeader('status', 500);
      res.end();
    });
  }

  if (req.method === 'GET' && req.url.match('/static/')) {
    const rs = fs.createReadStream(path.join(__dirname, 'client/build', req.url));
    let data = '';
    rs.on('data', chunk => {
      data += `${chunk}`;
    });
    rs.on('end', () => {
      rs.close();
      res.writeHead(200);
      res.write(data);
      res.end();
    });
    rs.on('error', () => {
      res.setHeader('status', 500);
      res.end();
    });
  }


}).listen(5000);
