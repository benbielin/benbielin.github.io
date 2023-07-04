"use client";

import { useState, useEffect } from "react";

export const useScrollLock = () => {
  const curStyle = document.body.style;

  const [locked, setLocked] = useState(false);

  useEffect(() => {
    curStyle.overflowY = locked ? "hidden" : "auto";
  });

  const handleLock = (lock: boolean) => {
    setLocked(lock);
  };

  return handleLock;
};
