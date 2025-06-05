import React from 'react'
import Image from 'next/image'

const placeholderCombos = [
  {
    cover: '/comboestudiantil.png',
    title: 'Combo Estudiantil',
    description: 'Palomitas pequeñas y bebdia pequeña',
    price: 'Bs. 15',
  },
  {
    cover: '/comboamigos.png',
    title: 'Combo Amigos',
    description: 'Palomitas medianas dulces o saladas y bebida mediana',
    price: 'Bs. 25',
  },
  {
    cover: '/combosuper.png',
    title: 'Combo Súper',
    description: 'Palomitas grandes y bebida grande',
    price: 'Bs. 45',
  },
]

const CarouselCombos = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      {placeholderCombos.map((combo) => (
        <div>
          <Image
            src={combo.cover}
            alt={combo.title}
            className="object-cover"
            width={130}
            height={72}
          />
          <h3 className='text-white text-lg font-bold'>{combo.title}</h3>
          <p className="text-white text-sm mt-2 text-center">{combo.description}</p>
          <h2 className="text-white text-sm mt-2 text-center">{combo.price}</h2>

        </div>
      ))}
    </div>
  )
}

export default CarouselCombos
