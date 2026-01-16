import React from 'react'
import "./App.css";
import Sidebar from './component/Sidebar';
import Plyer from './component/plyer';

const App = () => {
  return (
    <div className='h-screen bg-black' >
      <div className='h-[100%] flex flex-col'>
        <Sidebar/>
        <Plyer/>
      </div>
    </div>
  )
}

export default App
