import React from 'react';

interface MovieDetailsCardProps {
  title: string;
  trailerUrl: string;
  description: string;
  year: number | string;
  location: string;
}

const MovieDetailsCard: React.FC<MovieDetailsCardProps> = ({ title, trailerUrl, description, year, location }) => (
  <div className="movie-details-card">
    <h2>{title}</h2>
    <div className="trailer-container">
      <img src={trailerUrl} alt={`${title} Trailer`} /> {/* Reemplazar con componente de video */}
    </div>
    <div className="details-container">
      <p>{description}</p>
      <div className="detail-item">
        <svg width="20" height="20" viewBox="0 0 20 20"><rect width="20" height="20" fill="#00BCD4" rx="5"/><path fill="#fff" d="M9 3v14l7-7z"/></svg>
        <span>{year}</span>
      </div>
      <div className="detail-item">
        <svg width="20" height="20" viewBox="0 0 20 20"><path fill="#00BCD4" d="M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/><circle cx="10" cy="10" r="3" fill="#fff"/></svg>
        <span>{location}</span>
      </div>
    </div>
  </div>
);

export default MovieDetailsCard;