var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/exText.txt');

var writable = fs.createWriteStream(__dirname + '/exTextCopy.txt');

var compressedFile = fs.createWriteStream(__dirname + '/exText.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressedFile);