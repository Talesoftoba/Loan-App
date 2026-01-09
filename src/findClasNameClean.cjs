// findClasNameAnywhere.js
const fs = require("fs");
const path = require("path");

// If script is inside src/, scan the current folder
const SRC_DIR = __dirname;

function scanDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      const lines = fs.readFileSync(fullPath, "utf-8").split("\n");
      lines.forEach((line, idx) => {
        if (line.includes("clasName")) {
          console.log(`${fullPath}:${idx + 1}`);
        }
      });
    }
  });
}

scanDir(SRC_DIR);