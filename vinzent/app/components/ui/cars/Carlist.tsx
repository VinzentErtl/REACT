import { Car } from '@/lib/types/types'
import React from 'react'
import Card from './Card'

type Props = {cars: Car[]}

export default function Carlist({cars}: Props) {
  return (
    <div>
        <h1>Cars</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {cars.map((car: Car)=> (
        <Card car={car}/>))}
        </div>
        
    </div>
  )
}