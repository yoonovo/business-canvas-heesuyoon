import { http, HttpResponse } from "msw";
import data from "./data.json";

export const handlers = [
  http.get("/records", () => {
    return HttpResponse.json(data);
  }),
];
