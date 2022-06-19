import axios from "axios";

//this api is used to make requests in next server side

export function getAPIClient(ctx?: any) {
  //create api
  const api = axios.create({
    baseURL: "https://valorantapiv1.mocklab.io"
  });
  return api;
}
