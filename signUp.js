const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

router.post("/", function (req,res){
    let nameSignUp = req.body.nameSignUp
    let surnameSignUp = req.body.surnameSignUp
    let passwordSignUp = req.body.passwordSignUp
    let emailSignUp = req.body.emailSignUp

    let header
    
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
      header = res.status
      return(res.json())
    }).then((data)=>{ 
      res.send({data: data, header: header})
    }).catch(err => {
      res.send({header:header})
    })
})

 module.exports = router;