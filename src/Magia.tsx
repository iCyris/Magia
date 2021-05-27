import React, { useState } from 'react'
import ChapterOpen from './components/open';
import Chapter1 from './components/chapter1';
import Chapter2 from './components/chapter2';
import Chapter3 from './components/chapter3';
import ChapterHome from './components/home';
import './styles/index.scss'

function App() {
  const [current, setCurrent] = useState(2);
  const maxCurrent = 4;

  const changeChapter = () => {
    if (current + 1 <= maxCurrent) {
      setCurrent(current + 1);
    } else {
      setCurrent(4);
    }
  }

  return (
    <div className="magia">
      {
        current === 0 && <ChapterOpen changeChapter={changeChapter} />
      }
      {
        current === 1 && <Chapter1 changeChapter={changeChapter} />
      }
      {
        current === 2 && <Chapter2 changeChapter={changeChapter} />
      }
      {
        current === 3 && <Chapter3 changeChapter={changeChapter} />
      }
      {
        current === 4 && <ChapterHome />
      }
    </div>
  )
}

export default App
