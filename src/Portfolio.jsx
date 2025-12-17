import React from 'react';
import './Portfolio.css';
import { useTranslation } from 'react-i18next';
import './i18n'; // Importe a configuração

import frontendImg from './assets/frontend-bg.jpg';
import gamesImg from './assets/games-bg.png';
import musicImg from './assets/music-bg.jpg';
import videoImg from './assets/video-bg.jpg';

const sections = [
  {
    titleKey: "frontend",
    link: "/frontend",
    image: frontendImg,
    className: "frontend"
  },
  {
    titleKey: "games",
    link: "/games",
    image: gamesImg,
    className: "gamedev"
  },
  {
    titleKey: "music",
    link: "/music",
    image: musicImg,
    className: "music"
  },
  {
    titleKey: "video",
    link: "/video-editing",
    image: videoImg,
    className: "video"
  }
];

const Portfolio = () => {
  document.title="FLMBorges";

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="portfolio-wrapper">
      <div className="language-selector">
        <button onClick={() => changeLanguage('pt')}>PT</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </div>
      <header className="sleek-header">
        <h1>{t('header_name')}</h1>
      </header>

      <main className="column-container">
        {sections.map((section, index) => (
          <a draggable={false}
            key={index} 
            href={section.link} 
            className={`portfolio-section ${section.className}`}
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="overlay">
              <h2>{t(section.titleKey)}</h2>
            </div>
          </a>
        ))}
      </main>
    </div>
  );
};

export default Portfolio;