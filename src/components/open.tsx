import React from "react";

const Open: React.FC<{
  changeChapter: () => void;
}> = ({ changeChapter }) => {
  return (
    <div className="chapter-open">
      <div className="chapter-open__bg">
        <div className="chapter-open__bg-group1">
          <span></span>
          <span></span>
        </div>
        <div className="chapter-open__bg-group2">
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="chapter-open__title">
        <div className="chapter-open__title-group">
          <span>魔</span>
        </div>
        <div className="chapter-open__title-group">
          <span>女</span>
          <span>法</span>
        </div>
      </div>
    </div>
  );
};

export default Open;
