const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

router.post("/", function (req,res){

    let passwordLogIn = req.body.passwordLogIn
    let emailLogIn = req.body.emailLogIn
    console.log(passwordLogIn,emailLogIn)
    
    fetch("http://51.38.51.187:5050/api/v1/auth/log-in",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
          },
          body: JSON.stringify({
            email: emailLogIn, 
            password: passwordLogIn
        }),
        }).then((res)=>res.json()).then((data)=>{
            res.send({data: data})
          
         /*  document.getElementById("mensajeRegistro").innerHTML = `<span>${res.mensaje}</span>`
           setMensaje(res.mensaje)
           console.log(res.mensaje)
           if (res.registro == "si") {
             setVuelta("volver")
             console.log(res.usuario)
             setUsuario(res.usuario)
             localStorage.setItem("mail",res.usuario)
           }  */    
        })
})

 module.exports = router;