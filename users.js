const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

router.post("/", function (req,res){
    let token = req.body.token
    let type = req.body.type
    
    fetch("http://51.38.51.187:5050/api/v1/users",{
      method: "GET",
      headers: {
        "Authorization": `${type} ${token}`
      }
    }).then((res)=>res.json()).then((data)=>{ 
      res.send({data: data})
    }).catch(err => {
      res.send({err:err})
    })
})

router.delete("/delete", function (req,res){
    let id = req.body.id
    let token = req.body.token
    let type = req.body.type
    
    fetch(`http://51.38.51.187:5050/api/v1/users/${id}`,{
      method: "DELETE",
      headers: {
        "Authorization": `${type} ${token}`
      }
    }).then((res)=>res.json()).then((data)=>{ 
      res.send({data: data})
    }).catch(err => {
      res.send({err:err})
    })
})

 module.exports = router;