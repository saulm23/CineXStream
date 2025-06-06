import React from 'react';
const AsientosCabecera: React.FC = () => {
  return (
    <header className="header">
      <button className="icon-button arrow-left" aria-label="Go back">&#8592;</button>
      <h1 className="title">Selecciona tu asiento</h1>
      <button className="icon-button calendar" aria-label="Select date">&#128197;</button>
    </header>
  );
}
export default AsientosCabecera;