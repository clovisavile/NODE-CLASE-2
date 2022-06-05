var express = require('express');
var router = express.Router();

var nodemailer = require("nodemailer");

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'clovismetal1@gmail.com',
    subjet: 'Contacto Web'
    html: nombre + " se contacto a través de la web y quiere mas informacion a este correo : " + email + ". <br> Además, hizo este comentario : " + mensaje + ".<br> Su tel es: " + tel 
   
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: provess.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(obj);

  res.render('contacto', {
    message: 'Mensaje enviado correctamente'
  });
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('contacto',); {
    isContacto: true
  }
});




module.exports = router;