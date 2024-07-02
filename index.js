const express = require("express");
require('@google-cloud/debug-agent').start()
const app = express();
const port = 8081;


//import variable
const paddyDiseaseRouter = require('./routes/routePaddyDisease')

app.use('/disease', paddyDiseaseRouter);

app.get("/", (req, res) => {
    return res.status(200).send("Hai, ini halaman disease ganteng");
  });

app.use(express.json())

  //server start
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
  
app.get("/tes",(req,res)=>{
  console.log(req.headers)
})