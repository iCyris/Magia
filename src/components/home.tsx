import React, { useState } from "react";

export enum Etheme {
  yellow = "yellow",
  red = "red",
  blue = "blue",
  pink = "pink",
  purple = "purple",
}
const ChapterHome: React.FC<{}> = ({}) => {
  const [currentTheme, setCurrentTheme] = useState<Etheme>(Etheme.yellow);
  const [init, setInit] = useState<boolean>(true);

  const changeTheme = () => {
    if (currentTheme === Etheme.yellow) {
      setCurrentTheme(Etheme.red);
      setInit(false);
    } else if (currentTheme === Etheme.red) {
      setCurrentTheme(Etheme.blue);
    } else if (currentTheme === Etheme.blue) {
      setCurrentTheme(Etheme.pink);
    } else if (currentTheme === Etheme.pink) {
      setCurrentTheme(Etheme.purple);
    } else if (currentTheme === Etheme.purple) {
      setCurrentTheme(Etheme.yellow);
    } else {
      setCurrentTheme(Etheme.yellow);
    }
  };

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

  const renderDecorationRing = (theme: Etheme) => {
    return (
      <div
        className={`chapter-home__rings-decoration ${renderBackgroundColorClassName(
          theme,
          "border"
        )}`}
      ></div>
    );
  };

  const renderMainRing = (theme: Etheme) => {
    return (
      <div
        className={`chapter-home__rings-main chapter-home__rings-main-${theme} ${renderBackgroundColorClassName(
          theme,
          "border"
        )}`}
        onAnimationEnd={(e) => {
          if (e?.animationName === "chapter-home-character-hide") {
            changeTheme();
          }
        }}
      ></div>
    );
  };

  return (
    <div className={`chapter-home chaper-home-${currentTheme} chapter-home-init-${init}`}>
      <div className="chapter-home__wrap">
        <div className="chapter-home__frame">
          <div className="chapter-home__frame-group chapter-home__frame-group1">
            {currentTheme === Etheme.yellow && renderLineSpans()}
            {currentTheme === Etheme.red && renderLineSpans()}
            {currentTheme === Etheme.blue && renderLineSpans()}
            {currentTheme === Etheme.pink && renderLineSpans()}
            {currentTheme === Etheme.purple && renderLineSpans()}
          </div>
          <div className="chapter-home__frame-group chapter-home__frame-group2">
            <div className="chapter-home__rings">
              {/* <div
                className={`chapter-home__rings-decoration ${renderBackgroundColorClassName(
                  currentTheme,
                  "border"
                )}`}
              ></div> */}
              {currentTheme === Etheme.yellow && renderDecorationRing(Etheme.yellow)}
              {currentTheme === Etheme.red && renderDecorationRing(Etheme.red)}
              {currentTheme === Etheme.blue && renderDecorationRing(Etheme.blue)}
              {currentTheme === Etheme.pink && renderDecorationRing(Etheme.pink)}
              {currentTheme === Etheme.purple && renderDecorationRing(Etheme.purple)}

              {currentTheme === Etheme.yellow && renderMainRing(Etheme.yellow)}
              {currentTheme === Etheme.red && renderMainRing(Etheme.red)}
              {currentTheme === Etheme.blue && renderMainRing(Etheme.blue)}
              {currentTheme === Etheme.pink && renderMainRing(Etheme.pink)}
              {currentTheme === Etheme.purple && renderMainRing(Etheme.purple)}
            </div>
            {renderLineSpans()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterHome;
