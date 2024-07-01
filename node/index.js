const fs = require('fs');



// const data = fs.readFileSync("file.txt");
// console.log(" " + data)
//
// fs.writeFile("file.txt" ,"Hello World !!!!!" ,'utf-8' , (err)=>{
//     console.log("file modified , writeFile function");
// });
//
// fs.appendFile("file.txt","class is going on" , 'utf-8' ,(err)=>{
//     console.log("file.txt , appendFile function");
// })
// fs.mkdir('dir' , (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('created dir , mkdir');
// })
//removing
// fs.rmdir('dir',{recursive : true} , (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log("removed dir");
// })
// fs.rm('file.txt' , (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log("removed file");
// })

//rename
// fs.rename("file.txt","new_file.txt" , (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('renamed dir , rename');
// })

const path = require('path');
const f2 = "S:\\Development\\Introduction to Node JS\\node\\file2.txt"; // Source file
const d1 = "S:\\Development\\Introduction to Node JS\\node\\dir"; // Destination directory

const fileName = path.basename(f2); // Extract file name from source path

// Create destination file path by joining destination directory and file name
const destination = path.join(d1, fileName);

// Copy file from source to destination
fs.copyFile(f2, destination, (err) => {
    if (err) {
        console.error('Error copying file:', err);
    } else {
        console.log(`File ${f2} successfully copied to ${destination}`);
    }
});
