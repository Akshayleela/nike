//fs=FileSystem
let fs= require('fs');

// writeFile
// fs.writeFile('myfile.txt','All the text written in this section goes to myfile.txt',()=>{
//     console.log("File Created")
// })

// AppendFile
// fs.appendFile('myfile.txt',' \n Appending the text to number of times the code has commanded to myfile.txt',()=>{
//     console.log("File Appended")
// })

// fs.readFile('myText.txt','utf-8',(err, data)=>{ 
//     if(err) throw err;
//     console.log(data)
// })
//  utf-8 is used to 'encode'

// fs.readFile('categories.json','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// fs.rename('myText.txt','myCode.txt',(err,data)=>{
//     // if(err) throw err;
//     console.log('File renamed')
// })


// fs.readFile('myCode.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })
// THis is myText.txt part
// THis is myText.txt part
// THis is myText.txt part


// Deleting the Text File
// fs.unlink('myCode.txt',(err, data)=>{
//     if (err) throw err;
//     console.log('File deleted successfully')
// })