const http = require("http");
const fs = require("fs");               //allows file system operations like reading files
const port = 8000;

const requestHandler = (req,res)=>{
  let fileName = " ";

  switch(req.url){                     //request URL (req.url), the function determines which HTML file to serve.
    case "/home":
      fileName = "../html/home.html";
    break;
    case "/about":
      fileName = "../html/about.html";
    break;
    case "/contact":
      fileName = "../html/contact.html";
    break;
  }
  

  fs.readFile(fileName, (error,result)=>{ //This function reads the specified HTML file asynchronously.
    if(!error){                           // It takes fileName as the file to read, an error callback parameter to handle any reading errors, and result to store the file's contents.
      res.end(result);                    // If there's no error, it sends the content of the HTML file as the response (res.end(result)).
    }
  });
}

const server = http.createServer(requestHandler);

server.listen(port, (error)=>{
  if(error){
    console.log("Server Not Start in Port");;
    return false;
  }
  console.log("Server Start at Port : ",port);
})