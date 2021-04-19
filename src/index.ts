import * as fs from "fs";
import * as path from "path";

const OUTPUT = __dirname + "/../public/";

function deleteFolderRecursive(p: string) {
  if (fs.existsSync(p) === false) {
    return;
  }

  const files = fs.readdirSync(p);
  for (const file of files) {
    const curPath = p + path.sep + file;
    if (fs.lstatSync(curPath).isDirectory()) {
      this.deleteFolderRecursive(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  }
  fs.rmdirSync(p);
}

function run() {
  deleteFolderRecursive(OUTPUT);
  if (fs.existsSync(OUTPUT) === false) {
    fs.mkdirSync(OUTPUT);
  }
  fs.writeFileSync(OUTPUT + "index.html", "hello ts");
}

run();