import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
    { code: "hi", lang: "Hindi" },
    { code: "ar", lang: "Arabic" },

  ];



  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(()=>{

    // this is direction of body ltr(left-to-right) by default
    // for arabic it will change to rtl(right-to-left)
    // i18n.dir() detects if language support rtl then it automatically change the alignment from right
    // to left
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language])
  return (
    <div className="btn-container">
      {languages.map((lng) => (
        // i18n.language will give currently selected language
        <button
          className={lng.code === i18n.language ? "selected" : ""}
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;
