import http from "http";
import { uploadFile } from "./archive/server.js";

http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function (res) {
  var data = [];
  res
    .on("data", function (chunk) {
      data.push(chunk);
    })
    .on("end", function () {
      //at this point data is an array of Buffers
      //so Buffer.concat() can make us a new Buffer
      //of all of them together
      var buffer = Buffer.concat(data);
      console.log(buffer.toString("base64"));
      uploadFile(buffer, "file.jpg", "image/jpeg");
    });
});
