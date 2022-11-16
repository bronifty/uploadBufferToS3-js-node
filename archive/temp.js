import http from "http"; // or 'https' for https:// URLs
import fs from "fs";
import { uploadFile } from "./server.js";

const file = fs.createWriteStream("file.jpg");
const fileReader = fs.createReadStream("file.jpg");
const request = http.get(
  "http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg",
  function (response) {
    response.pipe(file);
    // read the file and upload it to s3
    fileReader.on("data", (chunk) => {
      console.log(chunk);
      uploadFile(chunk, "file.jpg", "image/jpeg");
    });
  }
);
