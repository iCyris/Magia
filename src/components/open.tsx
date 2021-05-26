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
      <div className="chapter-open__lines">
        <div className="chapter-open__line-top"></div>
        <div className="chapter-open__line-bottom"></div>
      </div>
      <div className="chapter-open__center-ball">
        <span></span>
        <span></span>
      </div>
      <div className="chapter-open__title">
        <div className="chapter-open__title-item-box">
          <div className="chapter-open__title-item">
            <span className="title-mo"></span>
          </div>
          <div className="chapter-open__title-item">
            <span className="title-nv"></span>
            <span className="title-fa"></span>
          </div>
        </div>
        <div className="chapter-open__title-wrap">
          <div className="chapter-open__title-wrap-item"></div>
          <div className="chapter-open__title-wrap-item"></div>
          <div className="chapter-open__title-wrap-item"></div>
          <div className="chapter-open__title-wrap-item"></div>
        </div>
      </div>
      <div className="chapter-open__switch">
        <div className="chapter-open__switch-balls">
          <span></span>
          <span></span>
        </div>
        <div className="chapter-open__switch-balls">
          <span></span>
          <span></span>
        </div>
        <div className="chapter-open__switch-balls">
          <span></span>
          <span></span>
        </div>
        <div className="chapter-open__switch-balls">
          <span></span>
          <span></span>
        </div>
        <div
          className="chapter-open__switch-rotate"
          onAnimationEnd={() => {
            changeChapter();
          }}
        ></div>
      </div>
    </div>
  );
};

export default Open;
