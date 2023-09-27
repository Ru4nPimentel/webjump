"use client";
import React, { useState } from "react";

type IUiContext = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UiContext = React.createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UiContext);
  if (context === null)
    throw new Error("useContext needs to be inside a provider");
  return context;
};

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <UiContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </UiContext.Provider>
  );
};
