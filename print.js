const { exec } = require("node:child_process");
const fs = require("fs");
const chokidar = require("chokidar");
const watcher = chokidar.watch("./images", {
  ignoreInitial: true,
});

watcher.on("add", (path) => {
  exec(`mspaint /pt ".\\images\\${path.split("\\")[1]}"`, (err, output) => {
    // once the command has completed, the callback function is called
    if (err) {
      // log and return if we encounter an error
      console.error("could not execute command: ", err);
      return;
    }
    // log the output received from the command
    console.log("Output: \n", path);
  });
});
