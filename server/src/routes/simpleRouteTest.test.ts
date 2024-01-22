/// <reference types="jest" />

import request from "supertest";
import app from "../app";

describe("GET /", () => {
  it(`responds with 200 and "this is working yay"`, async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(200);
    expect(response.body).toBe("this is working yay");
  });
});
