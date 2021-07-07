const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

router.post("/", function (req,res){
    let token = req.body.token
    
    fetch("http://51.38.51.187:5050/api/v1/users",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization": "Bearer"+token
      },
      body: JSON.stringify(),
    }).then((res)=>{res.json()}).then((data)=>{ 
      res.send({data: data})
    }).catch(err => {
      res.send({err:err})
    })
})

 module.exports = router;