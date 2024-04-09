import React from 'react';
import styles from '@/app/globals.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} ArtEclat. Tous droits réservés.</p>
        <p>Réalisé par Amal Hra, Sabrina Aissiou, Ulrich Igor</p>
      </div>
    </footer>
  );
}

export default Footer;
