import { basename, dirname } from "path";

let nomeArquivo = basename("./teste.txt");
let filename = basename("/test/outro");

let dir = dirname("/test/outro");
let diretorio = dirname("/test/outro/file.txt");

console.log("Nome do arquivo -> " + nomeArquivo);
console.log("Filename -> " + filename);
console.log("Dir -> " + dir);
console.log("Diretório -> " + diretorio);