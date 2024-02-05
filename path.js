const path = require("node:path");

console.log(path.sep);

//unir rutas
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);
