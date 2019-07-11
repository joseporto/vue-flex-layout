const fs = require('fs');
var inline = require('web-resource-inliner');

function normalize(contents) {
  return process.platform === "win32" ? contents.replace(/\r\n/g, '\n') : contents;
}

function readFile(file) {
  return normalize(fs.readFileSync(file, "utf8"));
}

inline.html({
  fileContent: readFile("styleguide/index.html"),
  relativeTo: "styleguide/"
},
  (err, result) => {
    fs.writeFile('styleguide/index.html', result, 'utf8', (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        return console.error(err);
      }
    });
  });
