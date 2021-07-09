const express = require("express");
const router = express.Router();
const encryption = require("./encryption");

const fetch = require("node-fetch")

router.post("/", encryption, function (req,res){
    let nameSignUp = req.body.nameSignUp
    let surnameSignUp = req.body.surnameSignUp
    let passwordSignUp = req.body.passwordSignUp
    let emailSignUp = req.body.emailSignUp
    let header
    let status
    
    fetch("http://51.38.51.187:5050/api/v1/auth/sign-up",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
      body: JSON.stringify({
        name: nameSignUp, 
        surname: surnameSignUp, 
        email: emailSignUp, 
        password: passwordSignUp
      }),
    }).then((res)=>{
      header = res.headers
      status = res.status
      return(res.json())
    }).then((data)=>{ 
      res.send({data: data, status: status, header: header})
    }).catch(err => {
      res.send({status:status, header:header})
    })
})

module.exports = router;