import MovieSection from '../organismos/MovieSection';

export default function HomeTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white pb-24">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <button><img src="/icons/search.svg" alt="Search" className="w-6" /></button>
        <h1 className="text-xl font-bold">CINE<span className="text-pink-500">X</span>STREAM</h1>
        <button><img src="/icons/bell.svg" alt="Notifications" className="w-6" /></button>
      </header>

      {/* Hero Banner */}
      <section className="px-4">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/images/spiderman.jpg"
            alt="Marvel Banner"
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 left-2 bg-blue-600 px-2 py-1 text-xs rounded">NEW</span>
        </div>
        <p className="mt-2 font-bold text-sm">
          Pre-<span className="text-pink-400">venta ahora</span>: <span className="font-normal">adquiere tu boleto aquí</span>
        </p>
      </section>

      {/* Tabs */}
      <nav className="flex justify-around mt-4 text-sm">
        <span className="border-b-2 border-white pb-1">En Cartelera</span>
        <span className="text-gray-400">Pre-ventas</span>
        <span className="text-gray-400">Muy pronto</span>
      </nav>

      {/* Movie Section */}
      <MovieSection />

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-purple-900 px-6 py-3 flex justify-between items-center rounded-t-xl">
        <img src="/icons/home.svg" className="w-6" alt="Home" />
        <img src="/icons/cart.svg" className="w-6" alt="Cart" />
        <div className="bg-purple-700 p-3 rounded-full">
          <img src="/icons/tickets.svg" className="w-6" alt="Tickets" />
        </div>
        <img src="/icons/messages.svg" className="w-6" alt="Messages" />
        <img src="/icons/user.svg" className="w-6" alt="Profile" />
      </footer>
    </div>
  );
}
