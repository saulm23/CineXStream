import React from "react";  
const AsientosMain: React.FC = () => {
  return (
    <main>
    <section className="seat-layout">
     
      <div className="row">
        <button className="seat available" aria-label="Seat 1">1</button>
        <button className="seat unavailable" aria-label="Seat 2" disabled>2</button>
        <button className="seat selected" aria-label="Seat 3">3</button>
        <button className="seat available" aria-label="Seat 1">4</button>
        <button className="seat available" aria-label="Seat 1">5</button>
        <button className="seat available" aria-label="Seat 1">6</button>
        <button className="seat available" aria-label="Seat 1">7</button>
        <button className="seat available" aria-label="Seat 1">8</button>
       
      </div>
      <div className="row">
        <button className="seat available" aria-label="Seat 1">9</button>
        <button className="seat unavailable" aria-label="Seat 2" disabled>10</button>
        <button className="seat selected" aria-label="Seat 3">11</button>
        <button className="seat available" aria-label="Seat 1">12</button>
        <button className="seat available" aria-label="Seat 1">13</button>
        <button className="seat available" aria-label="Seat 1">14</button>
        <button className="seat available" aria-label="Seat 1">15</button>
        <button className="seat available" aria-label="Seat 1">16</button>
       
      </div>
      <div className="row">
        <button className="seat available" aria-label="Seat 1">17</button>
        <button className="seat unavailable" aria-label="Seat 2" disabled>18</button>
        <button className="seat selected" aria-label="Seat 3">19</button>
        <button className="seat available" aria-label="Seat 1">20</button>
        <button className="seat available" aria-label="Seat 1">21</button>
        <button className="seat available" aria-label="Seat 1">22</button>
        <button className="seat available" aria-label="Seat 1">23</button>
        <button className="seat available" aria-label="Seat 1">24</button>
       
      </div>
      <div className="row">
        <button className="seat available" aria-label="Seat 1">25</button>
        <button className="seat unavailable" aria-label="Seat 2" disabled>26</button>
        <button className="seat selected" aria-label="Seat 3">27</button>
        <button className="seat available" aria-label="Seat 1">28</button>
        <button className="seat available" aria-label="Seat 1">29</button>
        <button className="seat available" aria-label="Seat 1">30</button>
        <button className="seat available" aria-label="Seat 1">31</button>
        <button className="seat available" aria-label="Seat 1">32</button>
       
      </div>
      
      
    </section>

    <section className="legend">
      <div><span className="dot available"></span> Disponibles</div>
      <div><span className="dot unavailable"></span> No disponibles</div>
      <div><span className="dot selected"></span> Seleccionados</div>
    </section>

    <section className="booking-summary">
      <div className="info-row">
        <div><small>Fecha:</small> <b>2025-06-06</b></div>
        <div><small>Hora:</small> <b>19:30</b></div>
        <div><small>Sección:</small> <b>VIP</b></div>
        <div><small>Asientos N°:</small> <b>1, 3</b></div>
      </div>
      <hr />
      <div className="total-row">
        <div><span className="cart-icon">🛒</span> <b>Total: Bs.120.00</b></div>
        <button className="btn-buy">Comprar</button>
      </div>
    </section>
  </main>
  );
}
export default AsientosMain;