const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
//for login form
app.get('/', (req, res) => {
    
    return res.sendFile(__dirname + '/login.html');
})

//for style sheet
app.get('/styles.css', function(req, res) {
    res.sendFile(__dirname + "/" + "styles.css");
  });
//for buy options
  app.post('/buy.html', (req, res) => { 
     res.sendFile(__dirname + '/buy.html');
})
//for the above stylesheet
app.get('/buy.css', function(req, res) {
    res.sendFile(__dirname + "/" + "buy.css");
  });
 
  //for payment section
  app.get('/app.html', (req, res) => { 
    res.sendFile(__dirname + '/app.html');
})

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });
//for image

  app.get('/pay.jpg', function(req, res) {
    res.sendFile(__dirname + "/" + "pay.jpg");
  });
  
app.post('/example', (req, res) => {
    const RSA = require("./RSA");
    const message=req.body.number;
    
    const keys = RSA.generate(250);
  console.log('Encrypting Account number');
    console.log('Keys');
    console.log('n:', keys.n.toString());
    console.log('d:', keys.d.toString());
    console.log('e:', keys.e.toString());
    
    const encrypted_message = RSA.encrypt(message,keys.n,keys.e);
    console.log('Message:', message);
    console.log('Encrypted:', encrypted_message.toString());
    const decrypted_message = RSA.decrypt(encrypted_message, keys.d, keys.n);
    console.log('Decrypted:', decrypted_message.toString());

    const cvv = req.body.cvv;
    console.log('Encrypting CVV');
    console.log('Keys');
    console.log('n:', keys.n.toString());
    console.log('d:', keys.d.toString());
    console.log('e:', keys.e.toString());
    
    const encrypted_cvv = RSA.encrypt(cvv,keys.n,keys.e);
    console.log('Message:', cvv);
    console.log('Encrypted:', encrypted_cvv.toString());
    const decrypted_cvv = RSA.decrypt(encrypted_cvv, keys.d, keys.n);
    console.log('Decrypted:', decrypted_cvv.toString()); 

    
    
  res.send(`Successfully stored.`);
});

const port = 8080;

app.listen(process.env.PORT, () => {
  console.log(`Server running on port${port}`);
});