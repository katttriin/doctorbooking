import React from 'react'
import { useParams } from 'next/navigation';

function Details() {
  const { id } = useParams(); // Отримуємо ID з URL
  return (
    <div>Details</div>
  )
}

export default Details