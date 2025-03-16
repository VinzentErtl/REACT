import React from 'react'
import Card from '../components/ui/cars/Card'
import { Car } from '@/lib/types/types'
import Carlist from '../components/ui/cars/Carlist';

type Props = {}


const cars: Car[] = [
  {
    name: "Super Car",
    type: "BMW E36",
    color: "black",
    motor: {
      serialNumber: 1234,
      hp: 200,
    },
  },
  {
    name: "Speedster",
    type: "Porsche 911",
    color: "red",
    motor: {
      serialNumber: 5678,
      hp: 450,
    },
  },
  {
    name: "Muscle King",
    type: "Ford Mustang",
    color: "blue",
    motor: {
      serialNumber: 9101,
      hp: 500,
    },
  },
  {
    name: "Eco Drive",
    type: "Tesla Model 3",
    color: "white",
    motor: {
      serialNumber: 1213,
      hp: 350,
    },
  },
  {
    name: "Offroad Beast",
    type: "Jeep Wrangler",
    color: "green",
    motor: {
      serialNumber: 1415,
      hp: 285,
    },
  },
];


export default function page({}: Props) {
  return (
    <div>
      <h1>Cars</h1>
      <Carlist cars={cars} />
    </div>
  )
}