
const express = require("express");
const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

// #region  {Global - var}

const 
  port = 8000,
  app  = express(),
  whatsapp = new Client({
    authStrategy: new LocalAuth(),
  });

// #endregion

// #region  {Global - Listen for various events}

  // @desc   this event is create qrcode to Authenticate WhatsApp wep
  // @access public/listen
  whatsapp.on("qr", (qr) => {qrcode.generate(qr, { small: true });});

  // @desc   this event to WhatsApp wep is ready to send
  // @access public/listen
  whatsapp.on("ready", () => {
    console.log("Client is ready!");
  });

  // @desc   this event to WhatsApp wep is ready to send
  // @access public/listen
  whatsapp.on("message", m => {
    if (! m.body.length > 0) return ;
    if (m.body === "0") {
        m.reply(`hi Hussein abdo`)      
    }
    if (m.body === "1") {
        m.reply(`hello BomBa`)      
    }
    if (m.body === "5") {
        m.reply(`i love you BomBa 😍`)      
    }
  });
  
  whatsapp.initialize();

  // @desc   Create ....
  // @route  get /
  // @access public
  app.get('/', (req, res) => {
    res.send(`
    HELLO FROM EXPRESS + TS! \n
    you now visit default root,\n
    The project was Done by hussein Apdo..
    `);
  });

// #endregion




// @desc   listen app
// @access Private
server = app.listen(port, () => {
  // console.log(server.address());
  console.log(`now listening on port ${port}`);
});





// @desc   Create ....
// @route  get /hi
// @access public

// @desc   listen app
// @access Private
