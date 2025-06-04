import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="relative h-[200px] rounded-xl overflow-hidden mx-4 mt-2">
      <Image
        src="/spiderman.jpg" // Add this banner image to /public
        alt="Marvel Banner"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
        <h2 className="text-white text-sm uppercase font-bold">Marvel</h2>
        <p className="text-white text-xs">Pre-venta ahora: adquiere tu boleto aquí</p>
      </div>
    </section>
  )
}
