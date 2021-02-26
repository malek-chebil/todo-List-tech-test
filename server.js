const express = require('express')
const PORT = 3000
const app = express()

app.use(express.json()); 
app.use(express.static(__dirname + '/client/dist'));
app.use(express.urlencoded({ extended: false }));


app.get("*",(req,res)=>{
    res.sendFile(__dirname +"/client/dist/index.html")
  })        
 

app.listen(PORT, function(err){ 
   if (err) console.log(err); 
   console.log("Server listening on PORT", PORT); 
}); 