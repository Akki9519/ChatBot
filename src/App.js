
import './App.css';
import React from 'react';
import Header from './component/Header'
import Chatbot from './component/Chatbot';

function App() {
  return (
  <div className='flex flex-col'>
    <Header/>
   <Chatbot/>
   </div>
  );
}

export default App;