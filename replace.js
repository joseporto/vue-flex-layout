const fs = require('fs');
var inline = require('web-resource-inliner');

function normalize(contents)
{
  return process.platform === "win32" ? contents.replace(/\r\n/g, '\n') : contents;
}

function readFile(file)
{
  return normalize(fs.readFileSync(file, "utf8"));
}

inline.html( {
  fileContent: readFile( "styleguide/index.html" ),
  relativeTo: "styleguide/"
},
( err, result ) => {
  fs.writeFile('styleguide/index.html', result, 'utf8', (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      return console.log(err);
    }
  });
});

/* fs.readFile('./styleguide/index.html', 'utf8', (err, data) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.log(err);
  }
  const myString = data;
  const myRegexp = /<script\ssrc="build\/bundle\.(.+).js">/g;
  const chunkName = myRegexp.exec(myString);

  inline.html( {
    fileContent: readFile( "styleguide/index.html" ),
    relativeTo: "styleguide/"
  },
  ( err, result ) => {
    // eslint-disable-next-line no-console
    console.info(result)
  });

}) */


/* fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/string to be replaced/g, 'replacement');

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
}); */
