import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("GET /", () => {

  it("should send a hello message", async () => {
    const res = await request.get("/");
    expect(res.status).toBe(200);
  });
});

describe("POST /weather", () => {

  it("should return an error if there i no city name in the req", async () => {
    const res = await request.post("/weather").send({});
    expect(res.status).toBe(400);
    expect(res.body.cityName).toBeUndefined();
  });

  it("should return city info when everyhing is ok", async () => {
    const res = await request.post("/weather").send({ cityName: "leiden" });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("cityName");
  });

  it("should return an error if the city doesnt exist", async () => {
    const res = await request.post("/weather").send({ cityName: "labcd" });
    expect(res.status).toBe(404);
    expect(res.text).toBe("citn not found");
  });
});
