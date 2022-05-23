
const fs = require('fs');
const path = require('path');


fs.access('project-dist\bundle.css', function (err) {
  if (err) {
    fs.writeFile(
      path.join('project-dist\bundle.css'), '', (err) => {
        if (err) throw err;
        console.log('Файл был создан');
      }
    );
  }
});