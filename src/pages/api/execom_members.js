const fs = require("fs");
const fsPromises = fs.promises;
var path = require("path");
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

const projectROOT = getConfig().serverRuntimeConfig.PROJECT_ROOT;

var theFolder = path.resolve(`./members/execom_members`);

export default async function handler(req, res) {
  const response = [];
  const files = await fsPromises.readdir(theFolder);

  files.forEach((file) => {
    const filesSplit = file.split("-").map((atom, i) => {
      return atom.split(".")[0].trim();
    });

    const name = filesSplit[1];
    const position = filesSplit[2];
    const filename = file;

    response.push({ name, position, filename });
  });
  res.status(200).json(response);
}
