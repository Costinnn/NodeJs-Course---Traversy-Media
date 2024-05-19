import fs from "fs/promises"; // used with promise or async/await
// import fs from "fs";   -> used with callback function

// // readFile() ---- callback
// fs.readFile("./text.txt", "utf8", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// // readFileSync() -synchronous version
// const data = fs.readFileSync("./text.txt", "utf8");
// console.log(data);


// writeFile() ----- async/await
const writeFile = async () => {
  try {
    await fs.writeFile("./textWritten.txt", "This is me, Hello!");
  } catch (err) {
    console.log(err);
  }
};

// appendFile()
const appendFile = async () => {
    try {
      await fs.appendFile("./textWritten.txt", "\n This is appended text!");
    } catch (err) {
      console.log(err);
    }
  };



writeFile();
appendFile()
