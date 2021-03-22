import axios from 'axios';

interface intervalResponse {
  numberOfSeconds: Number;
}

interface intervalRequest {
  numberOfSeconds: Number;
}

const baseUrl = process.env.BACKEND_URL ?? 'http://localhost:5000';

export function fetchInterval(): Promise<intervalResponse> {
  if (!baseUrl) return;
  return axios.get(`${baseUrl}/interval`);
}

export function postInterval(interval: Number): Promise<intervalResponse> {
  return axios.post(`${baseUrl}/interval`, { numberOfSeconds: interval });
}
