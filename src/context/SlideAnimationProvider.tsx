import React, { useState, useContext } from "react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

type classOptions = "" | "slide-in" | "slide-out";

type SlideContent = {
  slideClass: classOptions;
  toggleSlide: () => void;
};

const SlideContext = React.createContext<SlideContent>({
  //default context value
  slideClass: "",
  toggleSlide: () => "",
});

export function SlideAnimationProvider({ children }: Props) {
  const [slideClass, setSlideClass] = useState<classOptions>("");

  function toggleSlide() {
    setSlideClass((prevClass) =>
      prevClass === "slide-in" ? "slide-out" : "slide-in"
    );
  }

  return (
    <SlideContext.Provider value={{ slideClass, toggleSlide }}>
      {children}
    </SlideContext.Provider>
  );
}

export const useSlideContext = () => useContext(SlideContext);
