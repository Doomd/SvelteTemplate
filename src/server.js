// server.js
const { createServer } = require("http");
const app = require("./dist/App.js");

// const fs = require('fs');

// const content = "some content!";

createServer((req, res) => {
  const { html } = app.render({ url: req.url });

  res.write(`
    <!DOCTYPE html>
    <div id="app">${html}</div>
    <script src="/dist/bundle.js"></script>
  `);

  res.end();
}).listen(5000);

// fs.writeFile('/data/test/test.txt', content, (err) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })