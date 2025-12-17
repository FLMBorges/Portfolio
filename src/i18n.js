import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header_name: "Felipe Lépore de Macedo Borges",
          frontend: "Front-end Development",
          games: "Game Development",
          music: "Music and SFX",
          video: "Video Editing"
        }
      },
      pt: {
        translation: {
          header_name: "Felipe Lépore de Macedo Borges",
          frontend: "Desenvolvimento Front-end",
          games: "Desenvolvimento de Jogos",
          music: "Música e SFX",
          video: "Edição de vídeo"
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;