const fs = require("fs")

let text = fs.readFileSync("./input.txt", "utf-8")

const textArray = text.split(/\r?\n/);
let directory = { "/": { size: 0 } }; 
let cwd = ["/"]; 
textArray.forEach(lines => {
    words = lines.split(" ");
    
    if (words[0] === "$") {
        if (words[1] === "cd") {
            if (words[2] === "..") {
                cwd.pop();
            } else {
                const dirname = words[2];
                cwd.push(dirname); 
                const fullpath = cwd.join("/");
                directory[fullpath] = {};
                directory[fullpath].size = 0;
            }
        }
    }
    else if (words[0] === "dir") return;
    else {
        const fileSize = parseInt(words[0]);
        const temp = [];
        cwd.forEach(dir => {
            temp.push(dir);
            const temp2 = temp.join("/");
            directory[temp2].size += fileSize;
        });
    }
});

const sizeToFree = directory["/"].size - 70000000 + 30000000
let closestSize = 70000000;
for (dir in directory) {
    if (directory[dir].size > sizeToFree && directory[dir].size < closestSize) closestSize = directory[dir].size;
}

console.log("The smallest directory needed has a total size of " + closestSize);
