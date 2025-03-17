"use client"
import React, { useEffect, useState } from 'react'
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
    name: "Paserati",
    type: "VW-Passat",
    color: "red",
    motor: {
      serialNumber: 5678,
      hp: 450,
    },
  },
  {
    name: "Kein-Führerschein",
    type: "Nate",
    color: "Nate",
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
  {
    name: "Luxus Liner",
    type: "Mercedes S-Class",
    color: "silver",
    motor: {
      serialNumber: 1617,
      hp: 450,
    },
  },
  {
    name: "Stadt-Flitzer",
    type: "Mini Cooper S",
    color: "blue",
    motor: {
      serialNumber: 1819,
      hp: 178,
    },
  },
  {
    name: "Familien-Kutsche",
    type: "Volvo XC90",
    color: "dark blue",
    motor: {
      serialNumber: 2021,
      hp: 320,
    },
  },
  {
    name: "Sport-Monster",
    type: "Porsche 911",
    color: "yellow",
    motor: {
      serialNumber: 2223,
      hp: 580,
    },
  },
  {
    name: "Elektro-Blitz",
    type: "Audi e-tron GT",
    color: "metallic grey",
    motor: {
      serialNumber: 2425,
      hp: 476,
    },
  }
];


export default function page({}: Props) {
  const [visibleCars, setVisibleCars] = useState<Car[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Zeige entweder alle oder nur die ersten 3 Autos
    setVisibleCars(showAll ? cars : cars.slice(0, 3));
  }, [showAll]);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1>Cars</h1>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {showAll ? 'Zeige weniger' : 'Zeige alle'}
        </button>
      </div>
      <Carlist cars={visibleCars} />
    </div>
  )
}