import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Home from './Pages/Home'
import About from './Pages/About'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  return (
    <div className="dark:bg-black relative">
      <Toaster />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
