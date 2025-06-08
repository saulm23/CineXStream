'use client';

import SearchComponent, { SearchItem } from '@/components/SearchComponent/SearchComponent';

export default function SearchPage() {
  const handleBack = () => {
    console.log('Volver');
  };

  const handleSearch = (query: string) => {
    console.log('Buscando:', query);
  };

  const handleSelectItem = (item: SearchItem) => {
    console.log('Seleccionado:', item);
  };

  return (
    <SearchComponent
      onBack={handleBack}
      onSearch={handleSearch}
      onSelectItem={handleSelectItem}
      apiUrl="https://tu-api.com/movies"
      popularMovies={[
        { id: '1', title: 'Avatar 2' },
        { id: '2', title: 'Top Gun: Maverick' },
      ]}
    />
  );
}