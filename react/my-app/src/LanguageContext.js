import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({
    language: 'pl',
    setLanguage: () => { }
});

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    return <LanguageContext.Provider value={
        {
            language,
            setLanguage
        }
    }>
        {children}
    </LanguageContext.Provider>
}

export const useLanguageContext = () => useContext(LanguageContext);