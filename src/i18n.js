import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

/**
 *  -> LanguageDetector is the middleware which help us to detect the current language and change it 
 *      accordingly
 */

// initializing the i18n instance
i18n
.use(LanguageDetector)
.use(initReactI18next)
.use(Backend)
.init({
    debug: true, // in dev env it will all the errors in console
    lng: "hi", // default language english
    returnObjects: true
})
