import './App.css';
import { Trans, useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const {t} = useTranslation()
  const {line1, line2} = t("description", {channel: "Valorant-Tips"})
  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greetings")}</h1>
      <span>
        <Trans
          i18nKey={line1}
          values={{
            channel: "Roadside Coder"
          }}
          components={{ 1: <b /> }}
        />
      </span>
      <span>{line2}</span>
    </div>
  )
}

export default App
