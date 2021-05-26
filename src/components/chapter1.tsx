import React, { useState } from "react";

const Chapter1: React.FC<{
  changeChapter: () => void;
}> = ({ changeChapter }) => {
  const [colorIndex, setColorIndex] = useState(0);

  const updateColorIndex = () => {
    setColorIndex(colorIndex + 1);
  };

  const renderSpan = (index: number) => {
    return (
      <div key={`chapter1__word-group-${index}`} className={`chapter1__word-group chapter1__word-group-${index}`}>
        <span /><span /><span /><span />
        <span /><span /><span /><span />
      </div>
    );
  };

  const renderSpans = () => {
    const resultList = [];
    for (let i = 1; i <= 5; i++) {
      resultList.push(renderSpan(i));
    }
    return resultList;
  };

  return (
    <div className={`chapter1 chapter1-color-${colorIndex}`}>
      {renderSpans()}
    </div>
  );
};

export default Chapter1;
