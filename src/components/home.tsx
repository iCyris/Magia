import React, { useState } from "react";

export enum Etheme {
  yellow = "yellow",
  red = "red",
  blue = "blue",
  pink = "pink",
  purple = "purple",
}
const ChapterHome: React.FC<{}> = ({}) => {
  const [currentTheme, setCurrentTheme] = useState<Etheme>(Etheme.purple);

  const renderBackgroundColorClassName = (
    theme: Etheme,
    type: "bg" | "border"
  ) => {
    return `chapter-home-${type}-color-${theme}`;
  };

  const renderLineSpans = () => {
    return (
      <>
        <span
          className={`chapter-home__frame-line1 ${renderBackgroundColorClassName(
            currentTheme,
            "bg"
          )}`}
        />
        <span
          className={`chapter-home__frame-line2 ${renderBackgroundColorClassName(
            currentTheme,
            "bg"
          )}`}
        />
        <span
          className={`chapter-home__frame-line3 ${renderBackgroundColorClassName(
            currentTheme,
            "bg"
          )}`}
        />
        <span
          className={`chapter-home__frame-line4 ${renderBackgroundColorClassName(
            currentTheme,
            "bg"
          )}`}
        />
      </>
    );
  };

  return (
    <div className={`chapter-home chaper-home-${currentTheme}`}>
      <div className="chapter-home__wrap">
        <div className="chapter-home__frame">
          <div className="chapter-home__frame-group chapter-home__frame-group1">
            {renderLineSpans()}
          </div>
          <div className="chapter-home__frame-group chapter-home__frame-group2">
            <div className="chapter-home__rings">
              <div
                className={`chapter-home__rings-decoration ${renderBackgroundColorClassName(
                  currentTheme,
                  "border"
                )}`}
              ></div>
              <div
                className={`chapter-home__rings-main ${renderBackgroundColorClassName(
                  currentTheme,
                  "border"
                )}`}
              ></div>
            </div>
            {renderLineSpans()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterHome;
