import { useState, ReactNode, createContext, useContext } from "react";

interface OpenMenuProviderProps {
  children: ReactNode;
}

interface MenuContextData {
  isScrollActive: boolean;
  isNavbarShowing: boolean;
  isSidebarMenuActive: boolean;
  isScrollToTopActive: boolean;
  handleOpenSidebarMenu: (state: boolean) => void;
  onIsScrollActive: (state: boolean) => void;
  changeVisibilityNavbar: (state: boolean) => void;
  handleClickedMenu: () => void;
  handleClickedScrollToTop: () => void;
  isButtonScrollToTop: (state: boolean) => void;
}

export const OpenMenuContext = createContext({} as MenuContextData);

export const OpenMenuProvider = ({ children }: OpenMenuProviderProps) => {
  const [isScrollActive, setIsScrollActive] = useState(false);
  const [isNavbarShowing, setIsNavbarShowing] = useState(false);
  const [isSidebarMenuActive, setIsSidebarMenuActive] = useState(false);
  const [isScrollToTopActive, setIsScrollToTopActive] = useState(false);

  const handleOpenSidebarMenu = (state: boolean) => {
    setIsSidebarMenuActive(state);
  };

  const onIsScrollActive = (state: boolean) => {
    setIsScrollActive(state);
  };

  const changeVisibilityNavbar = (state: boolean) => {
    setIsNavbarShowing(state);
  };

  const handleClickedMenu = () => {
    window.scrollTo(0, 0);
    setIsSidebarMenuActive(false);
  };

  const isButtonScrollToTop = (state: boolean) => {
    setIsScrollToTopActive(state);
  };

  const handleClickedScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <OpenMenuContext.Provider
      value={{
        isScrollActive,
        isNavbarShowing,
        isSidebarMenuActive,
        isScrollToTopActive,
        handleOpenSidebarMenu,
        onIsScrollActive,
        changeVisibilityNavbar,
        handleClickedMenu,
        isButtonScrollToTop,
        handleClickedScrollToTop,
      }}
    >
      {children}
    </OpenMenuContext.Provider>
  );
};

export function useMenuSidebar() {
  return useContext(OpenMenuContext);
}
