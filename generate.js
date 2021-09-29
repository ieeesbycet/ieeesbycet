const fs = require("fs");
const fsPromises = fs.promises;
var path = require("path");
const files = fs.readdirSync(`./public/members/execom_members`);

console.log(files);

const response = files.map((file) => {
  const filesSplit = file.split("-").map((atom, i) => {
    return atom.split(".")[0].trim();
  });

  const name = filesSplit[1];
  const position = filesSplit[2];
  const filename = file;

  return { name, position, filename };
});

fs.writeFile("./public/data.json", JSON.stringify(response), (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log("Files generated successfully!");
  }
});
