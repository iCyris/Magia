import React, { useState } from 'react'
import './styles/index.scss'

function App() {
  const [current, setCurrent] = useState(0)

  const changeChapter = () => {
    setCurrent(current + 1);
  }

  return (
    <div className="magia">
      
    </div>
  )
}

export default App
