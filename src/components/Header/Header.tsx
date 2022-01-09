import { useEffect } from "react";
import { Link } from "react-router-dom";

// Contexts
import { useMenuSidebar } from "../../contexts/OpenSidebarMenu";

// Icons
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

// Components
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
  }, [changeVisibilityNavbar]);

  useEffect(() => {
    isSidebarMenuActive
      ? (window.document.body.style.overflowY = "hidden")
      : (window.document.body.style.overflowY = "auto");
  }, [isSidebarMenuActive]);

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
            <Link to="/">
              <span className={classNameChangingOnScroll}>healthy recipes</span>
            </Link>
            <Link to="/">
              <span className={classNameChangingOnScroll}>blog</span>
            </Link>
            <Link to="/">
              <span className={classNameChangingOnScroll}>join</span>
            </Link>
            <Link to="/register">
              <button type="button">register</button>
            </Link>
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
