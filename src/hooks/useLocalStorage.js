import React, { useState, useMemo } from "react";

export const useLocalStorage = (keyName, initialValue) => {
  initialValue = useMemo(
    () => JSON.parse(localStorage.getItem(keyName)) || initialValue || "",
    [keyName, initialValue]
  );

  const [style, setStateValue] = useState(initialValue);

  const setStyle = (style) => {
    const styleStore = style instanceof Function ? style() : style;
    localStorage.setItem(keyName, JSON.stringify(styleStore));
    setStateValue(styleStore);
    console.log("location", styleStore);
  };

  return [style, setStyle];
};
