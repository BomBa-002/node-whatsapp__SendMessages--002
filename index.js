const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

// #region  {Global - var}

  const 
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

  function sandBomBa_massage(str,txt) {
    str = str.replace(/(ُ|َ|ِ|ْ|ّ|ً|ٌ|ٍ)/igm,'')
    .replace(/(أ|إ|آ)/igm,'ا')
    .replace(/(ى)/igm,'ي')
    .replace(/عبد\s+/igm,'عبد')
    // (/اللهم صل/igm).test(str)
    return (new RegExp(txt,"igm")).test(str);
  }

  let str_sandBomBa_massage = [
    `عليه افضل الصلاه والسلام`,
    `عليه افضل الصلاه والسلام على سيدنا محمد وعلى آله وصحبه اجمعين`,
  ];

  
  // @desc   this event to WhatsApp wep is ready to send
  // @access public/listen
  whatsapp.on("message", m => {
    if (! m.body.length > 0) return ;
    
    if (sandBomBa_massage(m.body,'اللهم صل')) {setTimeout(() => {
      m.reply(str_sandBomBa_massage[Math.floor(Math.random() * str_sandBomBa_massage.length)]);
    }, (Math.random() * 10000).toFixed(0)); return ;}

    if (m.body === "0") m.reply(`hi Hussein abdo`)      
    if (m.body === "1") m.reply(`hello BomBa`)      
    if (m.body === "5") m.reply(`i love you BomBa 😍`)      
    
  });

// #endregion


whatsapp.initialize();

// @desc   Create ....
// @route  get /hi
// @access public

// @desc   listen app
// @access Private
