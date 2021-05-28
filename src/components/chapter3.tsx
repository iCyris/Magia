import React from 'react';

const Chapter3: React.FC<{
  changeChapter: () => void;
}> = ({
  changeChapter
}) => {
  return (
    <div className="chapter3">
      {/* part1 */}
      <div className="chapter3-open1">
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>
      <div className="chapter3-character-box chapter3-character-box1">
        <div className="chapter3-character chapter3-character1"></div>
        <div className="chapter3-character-mask chapter3-character-mask1"></div>
        <div className="chapter3-character-mask chapter3-character-mask2"></div>
      </div>

      {/* part2 */}
      <div className="chapter3-open2">
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>
      <div className="chapter3-character-box chapter3-character-box2">
        <div className="chapter3-character chapter3-character2"></div>
        <div className="chapter3-character-mask chapter3-character-mask1"></div>
        <div className="chapter3-character-mask chapter3-character-mask2"></div>
      </div>

      {/* part3 */}
      <div className="chapter3-open3">
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>
      <div className="chapter3-character-box chapter3-character-box2">
        
      </div>

      {/* part2 */}
      {/* <div className="chapter3-open2">
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>
      <div className="chapter3-character-box chapter3-character-box2">
        
      </div> */}

      {/* part2 */}
      {/* <div className="chapter3-open2">
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>
      <div className="chapter3-character-box chapter3-character-box2">
        
      </div> */}


    </div>
  )
}

export default Chapter3;