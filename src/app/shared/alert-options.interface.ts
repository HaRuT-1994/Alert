import { AlertTypes } from "./alert-type.enum";

export interface AlertOptions {
    type: AlertTypes,
    message: string,
  }