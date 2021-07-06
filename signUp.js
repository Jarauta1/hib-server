const express = require("express");
const router = express.Router();
const app = express();

const fetch = require("node-fetch")

router.post("/", function (req,res){
    let nameSignUp = req.body.nameSignUp
    let surnameSignUp = req.body.surnameSignUp
    let passwordSignUp = req.body.passwordSignUp
    let emailSignUp = req.body.emailSignUp
    
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
        }).then((res)=>res.json()).then((data)=>{
            /* res.send({data: data}) */
            console.log(data)
          
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