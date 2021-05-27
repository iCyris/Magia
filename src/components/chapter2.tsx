import React from "react";

const Chapter2: React.FC<{
  changeChapter: () => void;
}> = ({ changeChapter }) => {
  return (
    <div className="chapter2">
      <div className="chapter2__open-mask">
        <span></span>
        <span></span>
      </div>
      <div className="chapter2__word-box">
        <div className="chapter2__open-word-bg"></div>
        <div className="chapter2__open_word">
          {/* あなたの願いは何ですか？ */}
        </div>
      </div>
    </div>
  );
};

export default Chapter2;
