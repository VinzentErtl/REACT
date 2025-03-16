import { JSX } from "react";

export interface Car {
    name: string;
    type: string;
    color: string;
    motor: {
      serialNumber: number;
      hp: number;
    };
  }
  
  
 