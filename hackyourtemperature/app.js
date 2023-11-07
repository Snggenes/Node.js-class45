import express from "express";
import keys from "./sources/keys.js";
import fetch from "node-fetch";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.post("/weather", async (req, res) => {
  const { cityName } = req.body;
  if (cityName) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keys.API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        const resData = {
          cityName: data.main.temp,
        };
        res
          .status(200)
          .header("Content-Type", "application/json")
          .send(resData);
      } else {
        res.status(404).send("citn not found");
      }
    } catch {
      res.status(500).send("couldnt get a response");
    }
  } else {
    res.status(400).send("enter a city name");
  }
});

export default app;