import { Car } from '@/lib/types/types';
import React from 'react'

type Props = {car: Car };

export default function Card({car}: Props) {
  return (
    <div>Card: {car.name}</div>
  )
}