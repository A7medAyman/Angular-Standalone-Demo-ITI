import { environment } from "../../environments/environment.development";

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${environment.Domain}/auth/login`
  },
  PRODUCTS: {
    ALL: `${environment.Domain}/products`,
    BY_ID: (id: number) => `${environment.Domain}/products/${id}`
  }
};