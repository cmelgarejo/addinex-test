import axios from 'axios';

interface eventResponse {
  event: Array<any>;
}

interface eventRequest {
  event: string;
}

const baseUrl = process.env.BACKEND_URL ?? 'http://localhost:5000';

export function fetchEvents(): Promise<eventResponse> {
  return axios.get(`${baseUrl}/events`);
}

export function postEvent(event: string): Promise<eventResponse> {
  return axios.post(`${baseUrl}/events`, { event: event });
}

export function deleteEvent(eventId: string): Promise<eventResponse> {
  return axios.delete(`${baseUrl}/events/${eventId}`);
}
