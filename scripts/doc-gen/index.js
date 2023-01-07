import { basename, resolve } from "path";
import { createWriteStream } from "fs";
import { readdir, readFile } from "fs/promises";
import { parse } from "parse5";

import { Tree } from "./tree.js";

if (!process.argv[2]) {
  console.log("Please provide a path to documentation folder");
} else {
  generateDocs(process.argv[2]);
}

async function generateDocs(path) {
  let modules = (await readdir(path)).filter(p => p.startsWith("Sound-Tidal-"));

  for (let module of modules) {
    generateModuleDocs(resolve(path, module));
  }
}

async function generateModuleDocs(path) {
  let moduleName = basename(path, ".html").replaceAll("-", ".");
  let newPath = resolve("../../docs/library/modules", `${basename(path, ".html")}.mdx`);
  let outputStream = createWriteStream(newPath);

  function write(text) {
    outputStream.write(text);
  }

  function writeLn(text, num = 1) {
    outputStream.write(text + "\n".repeat(num));
  }

  function header(frontmatter) {
    writeLn("---");
    for (let key in frontmatter) {
      writeLn(`${key}: ${frontmatter[key]}`);
    }
    writeLn("---", 2);
  }

  header({ name: moduleName, id: `${moduleName}`});

  let tree = new Tree(parse(await readFile(path, "utf-8")));

  let nodes = tree.getChild("html")
                  .getChild("body")
                  .getChildID("content")
                  .getChildID("interface").childNodes;

  for (let node of nodes) {
    if (node.hasClass("top")) {
      let [src, desc] = node.childNodes;
      
      // Write out definition
      let [def, ...typeParts] = src.childNodes;
      let funcName = def.text;
      let type = typeParts.filter(n => !(n.hasClass("link") || n.hasClass("selflink"))).map(n => n.text).join("");
      let typeSig = `${funcName}${type}`
      writeLn(`### ${funcName}`);
      writeLn("```");
      writeLn(`${typeSig}`);
      writeLn("```", 2);

      if (desc && desc.hasClass("doc")) {
        for (let paragraph of desc.childNodes) {
          if (paragraph.tagName === "p") {
            for (let part of paragraph.childNodes) {
              if (part.tagName === "code") {
                write(`\`${part.text}\``);
              } else {
                write(part.text);
              }
            }
            writeLn("", 2);
          } else if (paragraph.tagName === "pre") {
            writeLn("```haskell");
            write(paragraph.text);
            writeLn("```");
          }
        }
      }
    } else if (node.tagName === "a" && node.getChild("h2")) {
      writeLn(`## ${node.text}`);
    }
  }

  outputStream.close();
}