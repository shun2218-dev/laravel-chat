import { AxiosInstance } from "axios";
import { route as routeFn } from 'ziggy-js';

export {}

declare global {
  interface Window {
    axios: AxiosInstance;
    Ziggy: {
      routes: typeof routeFn
    }
  }

  var route: typeof routeFn
}

declare module 'vue' {
  interface ComponentCustomProperties {
      route: typeof routeFn;
  }
}