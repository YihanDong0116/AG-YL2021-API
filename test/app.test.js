const request = require("supertest");
const app = require("../src/app");

describe("Test paths", () => {
  test("Given valid request when GET / then return OK", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("Given valid request when GET /health then return OK", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);p
  });
});