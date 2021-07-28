import React from 'react';
import Routes from "./Routes.jsx"
import './App.css'
import QuestionsContextProvider from './context/QuestionsContext.jsx';

const App = () => {
  return (
    <div className="w-screen lg:h-screen overflow-x-hidden bg-gray-900 text-white">
      <QuestionsContextProvider>
        <Routes/>
      </QuestionsContextProvider>
    </div>
  )
}

export default App

