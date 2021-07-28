import React from 'react';

const QuestionsContext = React.createContext();

const QuestionsContextProvider = ({ children }) => {

    const [lang, setlang] = React.useState("en");
    const availableLangs = React.useState(["en"])[0];
    const [questions, setquestions] = React.useState([]);
    const [error, seterror] = React.useState(null);

    React.useEffect(() => {
        populateQuestions(lang);

        return () => {
            setquestions([]);
        }
    },[lang])

    const populateQuestions = (lang) => {
        setquestions([]);
    }

    const changeLang = async (newLang) => {
        const langExist = await checkIfLangIsValid(newLang);

        if(!langExist){
            seterror("Sorry, the language is not Available")
            return
        }

        setlang(newLang);
    }

    const checkIfLangIsValid = (parsedLang) => {
        return availableLangs.includes(parsedLang);
    }

    const getQuestions = (index) => {
        return questions[index > (questions.length - 1) ? 0 : index]
    }

    const value = {
        lang,
        changeLang,
        getQuestions,
        error
    }
    return (
        <QuestionsContext.Provider value={value}>
            {children}
        </QuestionsContext.Provider>
    )
}

export default QuestionsContextProvider
