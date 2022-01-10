import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Contexts
import { useMenuSidebar } from "../../contexts/OpenSidebarMenu";

// Icons
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

// Components
import { SidebarMenu } from "../Index";

import "./styles.scss";

interface HeaderProps {
  onRegister: boolean;
}

export const Header = ({ onRegister }: HeaderProps) => {
  const {
    isSidebarMenuActive,
    isNavbarShowing,
    isScrollActive,
    handleOpenSidebarMenu,
    onIsScrollActive,
    changeVisibilityNavbar,
    isButtonScrollToTop,
  } = useMenuSidebar();

  const location = useLocation();

  useEffect(() => {
    window.innerWidth > 980
      ? changeVisibilityNavbar(false)
      : changeVisibilityNavbar(true);
  }, [changeVisibilityNavbar]);

  window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    top > 50 ? onIsScrollActive(true) : onIsScrollActive(false);
    top > 300 ? isButtonScrollToTop(true) : isButtonScrollToTop(false);
  };

  window.onresize = function () {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    width > 980 ? changeVisibilityNavbar(false) : changeVisibilityNavbar(true);
  };

  const changingOnScroll = isScrollActive ? "--scrolling" : "";
  const changingOnSidebarMenuActive = isSidebarMenuActive
    ? "--sidebar_active"
    : "";
  return (
    <>
      <header
        className={`header ${changingOnScroll} ${changingOnSidebarMenuActive}`}
      >
        <div className="c-header">
          <h1 className={changingOnScroll}>Healthy Food</h1>
          <nav className={`navbar ${isNavbarShowing ? "--disabled" : ""}`}>
            <Link
              to="/"
              className={`${changingOnScroll} ${
                onRegister ? "--on-page-register" : ""
              }`}
            >
              healthy recipes
            </Link>
            <Link
              to="/"
              className={`${changingOnScroll} ${
                onRegister ? "--on-page-register" : ""
              }`}
            >
              blog
            </Link>
            <Link
              to="/"
              className={`${changingOnScroll} ${
                onRegister ? "--on-page-register" : ""
              }`}
            >
              join
            </Link>
            {location.pathname !== "/register" && (
              <Link to="/register">
                <button type="button" className={changingOnScroll}>
                  register
                </button>
              </Link>
            )}
          </nav>

          {isNavbarShowing &&
            (isSidebarMenuActive ? (
              <div onClick={() => handleOpenSidebarMenu(false)}>
                <IoMdClose
                  color={isScrollActive ? "#1d164d" : "#badc58"}
                  className="button-sidebar-menu"
                />
              </div>
            ) : (
              <div onClick={() => handleOpenSidebarMenu(true)}>
                <FiMenu
                  color={isScrollActive ? "#1d164d" : "#badc58"}
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
