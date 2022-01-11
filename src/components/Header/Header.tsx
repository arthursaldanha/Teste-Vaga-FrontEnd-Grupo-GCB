import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Contexts
import { useHome } from "../../contexts/OpenSidebarMenu";

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
  } = useHome();
  const location = useLocation();

  const changingOnScroll = isScrollActive ? "--scrolling" : "";
  const changingOnSidebarMenuActive = isSidebarMenuActive
    ? "--sidebar_active"
    : "";
  const classNameLinks = `${changingOnScroll} ${
    onRegister ? "--on-page-register" : ""
  }`;

  const contentMenu = [
    {
      link: "#our-services",
      className: classNameLinks,
      content: "healthy recipes",
    },
    {
      link: "#read-blog",
      className: classNameLinks,
      content: "blog",
    },
    {
      link: "#join",
      className: classNameLinks,
      content: "join",
    },
  ];

  useEffect(() => {
    window.innerWidth > 980
      ? changeVisibilityNavbar(false)
      : changeVisibilityNavbar(true);

    if (window.innerWidth > 980) {
      handleOpenSidebarMenu(false);
    }
  }, [window.innerWidth, changeVisibilityNavbar, handleOpenSidebarMenu]);

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
    if (width > 980) {
      handleOpenSidebarMenu(false);
    }
  };

  return (
    <>
      <header
        className={`header ${changingOnScroll} ${changingOnSidebarMenuActive}`}
      >
        <div className="c-header">
          <h1 className={changingOnScroll}>Healthy Food</h1>
          <nav className={`navbar ${isNavbarShowing ? "--disabled" : ""}`}>
            {contentMenu.map(({ link, className, content }, index) => {
              return (
                <a href={link} className={className} key={content}>
                  {content}
                </a>
              );
            })}
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
