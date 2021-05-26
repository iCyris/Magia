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
          <span className="title-mo"></span>
        </div>
        <div className="chapter-open__title-group">
          <span className="title-nv"></span>
          <span className="title-fa"></span>
        </div>
      </div>
    </div>
  );
};

export default Open;
