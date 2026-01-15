import React from 'react'
import "./App.css";
import Sidebar from './component/Sidebar';

const App = () => {
  return (
    <div className='h-screen bg-black w-screen' >
      <div className='h-[90%] flex'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
