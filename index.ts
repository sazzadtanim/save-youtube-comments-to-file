import { writeFile } from "fs";
import { google } from "googleapis";
require("dotenv").config();

console.log(process.env.GOOGLE_API_KEY);

const youtube = google.youtube({
  version: "v3",
  auth: process.env.GOOGLE_API_KEY,
});

youtube.commentThreads.list(
  { part: ["snippet"], videoId: "hsM_niAYn2Q" },
  (err, data) => {
    if (err) throw err;
    let jsonData = JSON.stringify(data?.data.items);
    writeFile("comments.json", jsonData, {}, (err) => {
      if (err) throw err;
      console.log("file saved sucessfully");
    });
  }
);
