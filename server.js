const express = require('express');
const Nexmo = require('nexmo');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/public'));
app.use(express.json());

const nexmo = new Nexmo({
  apiKey: 'd93bc997',
  apiSecret: '3O4IVdrgqN6ACbu6',
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  const { number, text } = req.body;

  const from = 'Vonage APIs';

  nexmo.message.sendSms(from, number, text);
});
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
