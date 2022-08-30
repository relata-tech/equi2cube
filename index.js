const equi2cube = require("./equi2cube");
const { writeFile } = require("node:fs");

const { loadImage } = require("canvas");

loadImage("./Example-of-equirectangular-image.png").then(function (img) {
  console.log("1");

  const faceCanvases = equi2cube(img);
  faceCanvases.forEach((faceCanvas) => {
    const buffer = faceCanvas.toBuffer("image/png");

    writeFile(`./tmp/${faceCanvas.tagName}.webp`, buffer, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("The file was saved!");
      }
    });
  });
});
