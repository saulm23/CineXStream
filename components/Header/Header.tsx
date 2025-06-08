'use client';

import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './Header.module.css';

interface HeaderProps {
  showSearchButton?: boolean;
  showNotifications?: boolean;
  showProfile?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  showSearchButton = true,
  showNotifications = true,
  showProfile = true
}) => {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push('/search');
  };

  const handleNotificationClick = () => {
    // Lógica para notificaciones
    console.log('Abrir notificaciones');
  };

  const handleProfileClick = () => {
    // Lógica para perfil
    console.log('Abrir perfil');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <h1 className={styles.logoText}>
            <span className={styles.cine}>CINE</span>
            <span className={styles.stream}>STREAM</span>
          </h1>
        </div>

        {/* Botones de acción */}
        <div className={styles.actions}>
          {showSearchButton && (
            <button
              onClick={handleSearchClick}
              className={styles.actionButton}
              aria-label="Buscar películas"
            >
              <Search size={24} />
            </button>
          )}
          
          {showNotifications && (
            <button
              onClick={handleNotificationClick}
              className={styles.actionButton}
              aria-label="Notificaciones"
            >
              <Bell size={24} />
            </button>
          )}
          
          {showProfile && (
            <button
              onClick={handleProfileClick}
              className={styles.profileButton}
              aria-label="Perfil de usuario"
            >
              <User size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;