import React from 'react';
import Image from 'next/image';
import QuantityButton from './QuantityButton';
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



const combos = () => {
return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      {placeholderCombos.map((combos) => (
          <div className="display-inline-block mx-2 w-40 flex-shrink-0">
            <div>
                <Image
                  src={combos.cover}
                  alt={combos.title}
                  className="object-cover" 
                  width={130}
                  height={72}
                />
            </div>
            <div>
                <h3 className='text-white text-lg font-bold'>{combos.title}</h3>
                <p className="text-white text-sm mt-2 text-center">{combos.description}</p>
                <h2 className="text-white text-sm mt-2 text-center">{combos.price}</h2>
            </div>
            <QuantityButton/>
          </div>
      ))}
    </div>
  )
}
export default combos;