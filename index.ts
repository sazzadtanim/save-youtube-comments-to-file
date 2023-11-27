import { config } from "dotenv";
import { writeFile } from "fs";
import { google } from "googleapis";

// this should be done before accessing api keys from .env
config();

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
