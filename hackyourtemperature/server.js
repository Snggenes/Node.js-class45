import express from 'express';
const app = express();
const port = 3000;


app.use(express.json());

app.get('/',(req, res)=>{
  res.send('hello from backend to frontend!')
})

app.post("/weather", (req, res) => {
  const city = req.body.cityName;
  res.send(`The city is ${city}`)
});

app.listen(port);