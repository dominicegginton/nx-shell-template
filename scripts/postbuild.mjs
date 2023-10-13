import { writeFile, readFile } from 'fs';
const index = 'dist/packages/shell-browser/index.html';

readFile(index, 'utf8', function (err, data) {
  if (err) return console.log(err);
  const result = data.replace(/type="module"/g, `type="text/javascript"`);
  writeFile(index, result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
