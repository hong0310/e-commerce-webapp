import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDM1ZDBlZGQwMGVkMDY2ZjY4N2IyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTQ2NDc0NywiZXhwIjoxNjU5ODk2NzQ3fQ.sMC_SbyCNcG5mmfOS0NXegr4Vwv0LfOSTBG7AY-bD5Y";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
