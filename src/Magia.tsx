import React, { useState } from 'react'
import ChapterOpen from './components/open';
import Chapter1 from './components/chapter1';
import './styles/index.scss'

function App() {
  const [current, setCurrent] = useState(0)

  const changeChapter = () => {
    setCurrent(current + 1);
  }

  const renderChapter = (currentIndex: number) => {
    if (currentIndex === 0) {
      return ChapterOpen;
    } else if (currentIndex === 1) {
      return Chapter1;
    } else {
      return ChapterOpen;
    }
  }

  return (
    <div className="magia">
      {
        current === 0 && <ChapterOpen />
      }
      {
        current === 1 && <Chapter1 />
      }
    </div>
  )
}

export default App
