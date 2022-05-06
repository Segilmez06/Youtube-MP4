const http = require('http');
const ytdl = require('ytdl-core');

const requestListener = function (req, res) {
  var url = req.url.substring(1);
  console.log('<Server>: Received request:' + url);
  if (url.startsWith('https://www.youtube.com/')){
    var headertxt = 'attachment; filename="video.mp4"';
    res.setHeader('Content-Disposition', headertxt);
    ytdl(url, {format: 'mp4'}).pipe(res);
  }
  else {
    res.setHeader('text', 'Error');
  }
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('<Server>: Listening on 8080');
