import { useState, ReactNode, createContext, useContext } from "react";

interface OpenMenuProviderProps {
  children: ReactNode;
}

interface MenuContextData {
  isScrollActive: boolean;
  isNavbarShowing: boolean;
  isSidebarMenuActive: boolean;
  handleOpenSidebarMenu: (state: boolean) => void;
  onIsScrollActive: (state: boolean) => void;
  changeVisibilityNavbar: (state: boolean) => void;
}

export const OpenMenuContext = createContext({} as MenuContextData);

export const OpenMenuProvider = ({ children }: OpenMenuProviderProps) => {
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [isNavbarShowing, setIsNavbarShowing] = useState(false);
  const [isSidebarMenuActive, setIsSidebarMenuActive] = useState(false);

  const handleOpenSidebarMenu = (state: boolean) => {
    setIsSidebarMenuActive(state);
  };

  const onIsScrollActive = (state: boolean) => {
    setIsScrollActive(state);
  };

  const changeVisibilityNavbar = (state: boolean) => {
    setIsNavbarShowing(state);
  };

  return (
    <OpenMenuContext.Provider
      value={{
        isScrollActive,
        isNavbarShowing,
        isSidebarMenuActive,
        handleOpenSidebarMenu,
        onIsScrollActive,
        changeVisibilityNavbar,
      }}
    >
      {children}
    </OpenMenuContext.Provider>
  );
};

export function useMenuSidebar() {
  return useContext(OpenMenuContext);
}
