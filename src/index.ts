import * as fs from "fs";
import * as path from "path";
import {footer} from "./footer";
import {header} from "./header";
import { posts } from "./posts";

const OUTPUT = __dirname + "/../public/";

function deleteFolderRecursive(p: string) {
  if (fs.existsSync(p) === false) {
    return;
  }

  const files = fs.readdirSync(p);
  for (const file of files) {
    const curPath = p + path.sep + file;
    if (fs.lstatSync(curPath).isDirectory()) {
      deleteFolderRecursive(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  }
  fs.rmdirSync(p);
}

function render(): string {
  let r = "<br>";
  for (const post of posts) {
    r += `<h2>${post.title}</h2>
    <i>${post.date}</i><br>
    ${post.body}<br><br>`
  }
  return r;
}

function run() {
  deleteFolderRecursive(OUTPUT);
  if (fs.existsSync(OUTPUT) === false) {
    fs.mkdirSync(OUTPUT);
  }
  fs.writeFileSync(OUTPUT + "index.html", header() + render() + footer());

  fs.copyFileSync(__dirname + "/../node_modules/bootstrap/dist/css/bootstrap.min.css", OUTPUT + "bootstrap.min.css");
  fs.copyFileSync(__dirname + "/../node_modules/bootstrap-icons/font/bootstrap-icons.css", OUTPUT + "bootstrap-icons.css");
  fs.copyFileSync(__dirname + "/../img/favicon.png", OUTPUT + "favicon.png");
  fs.copyFileSync(__dirname + "/../img/observation_db_field_changed.svg", OUTPUT + "observation_db_field_changed.svg");
}

run();