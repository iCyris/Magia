import React, { useState } from 'react'
import ChapterOpen from './components/open';
import Chapter1 from './components/chapter1';
import Chapter2 from './components/chapter2';
import Chapter3 from './components/chapter3';
import ChapterHome from './components/home';
import './styles/index.scss'

function App() {
  const [current, setCurrent] = useState<number>(0);
  const [isMusicPlay, setIsMusicPlay] = useState<boolean | 'init'>('init');

  const maxCurrent = 4;

  const changeChapter = () => {
    if (current + 1 <= maxCurrent) {
      setCurrent(current + 1);
    } else {
      setCurrent(4);
    }
  }

  const mp3url = 'https://cdn.jsdelivr.net/npm/cyris-music-cdn/Kalafina_Magia.mp3';
  const playMusic = () => {
    (document?.querySelector('.music-audio') as HTMLAudioElement)?.play();
  }
  const pauseMusic = () => {
    (document?.querySelector('.music-audio') as HTMLAudioElement)?.pause();
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
      <div className="music">
        <span className="music-button" data-state={isMusicPlay} onClick={() => {
          if (isMusicPlay === true) {
            pauseMusic();
            setIsMusicPlay(false);
          } else {
            playMusic();
            setIsMusicPlay(true);
          }
        }}>
          <i className="czs-music-note"></i>
        </span>
        <audio className="music-audio">
          <source src={mp3url} type="audio/mpeg" />
          <source src={mp3url} type="audio/ogg" />
          <embed height="50" width="100" src={mp3url} />
        </audio>
      </div>
    </div>
  )
}

export default App
