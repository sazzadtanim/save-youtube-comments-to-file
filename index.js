"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const googleapis_1 = require("googleapis");
require("dotenv").config();
console.log(process.env.GOOGLE_API_KEY);
const youtube = googleapis_1.google.youtube({
    version: "v3",
    auth: process.env.GOOGLE_API_KEY,
});
youtube.commentThreads.list({ part: ["snippet"], videoId: "hsM_niAYn2Q" }, (err, data) => {
    if (err)
        throw err;
    let jsonData = JSON.stringify(data === null || data === void 0 ? void 0 : data.data.items);
    (0, fs_1.writeFile)("comments.json", jsonData, {}, (err) => {
        if (err)
            throw err;
        console.log("file saved sucessfully");
    });
});
