import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useMenuSidebar } from "../../contexts/OpenSidebarMenu";
import { SidebarMenu } from "../SidebarMenu/SidebarMenu";

import "./styles.scss";
export const Header = () => {
  const {
    isSidebarMenuActive,
    isNavbarShowing,
    isScrollActive,
    handleOpenSidebarMenu,
    onIsScrollActive,
    changeVisibilityNavbar,
  } = useMenuSidebar();

  useEffect(() => {
    window.innerWidth > 980
      ? changeVisibilityNavbar(false)
      : changeVisibilityNavbar(true);
  }, []);

  window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    top > 50 ? onIsScrollActive(true) : onIsScrollActive(false);
  };

  window.onresize = function () {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    width > 980 ? changeVisibilityNavbar(false) : changeVisibilityNavbar(true);
  };

  const classNameChangingOnScroll = isScrollActive ? "--scrolling" : "";
  return (
    <>
      <header className={`header ${classNameChangingOnScroll}`}>
        <div className="c-header">
          <h1 className={classNameChangingOnScroll}>Healthy Food</h1>
          <nav className={`navbar ${isNavbarShowing ? "--disabled" : ""}`}>
            <span className={classNameChangingOnScroll}>healthy recipes</span>
            <span className={classNameChangingOnScroll}>blog</span>
            <span className={classNameChangingOnScroll}>join</span>
            <button type="button">register</button>
          </nav>

          {isNavbarShowing &&
            (isSidebarMenuActive ? (
              <div onClick={() => handleOpenSidebarMenu(false)}>
                <IoMdClose
                  color={isScrollActive ? "#fff" : "#badc58"}
                  className="button-sidebar-menu"
                />
              </div>
            ) : (
              <div onClick={() => handleOpenSidebarMenu(true)}>
                <FiMenu
                  color={isScrollActive ? "#fff" : "#badc58"}
                  className="button-sidebar-menu"
                />
              </div>
            ))}
        </div>
      </header>
      {isSidebarMenuActive && <SidebarMenu />}
    </>
  );
};