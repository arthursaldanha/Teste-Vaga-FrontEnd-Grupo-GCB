import { Link } from "react-router-dom";

// Components
import { useHome } from "../../contexts/OpenSidebarMenu";
import { sidebarMenuContent } from "./menuRoutes";

import "./styles.scss";

interface SidebarMenuProps {
  bgSidebarMenu?: string;
}

export const SidebarMenu = ({
  bgSidebarMenu = "dark-bg-sidebar-menu",
}: SidebarMenuProps) => {
  const { isScrollActive, handleOpenSidebarMenu, handleClickedMenu } =
    useHome();

  const handleClickOutside = (e) => {
    if (e.target.className === bgSidebarMenu) handleOpenSidebarMenu(false);
  };

  const styleIsScrollActive = isScrollActive ? "--scrolling" : "";

  return (
    <div className={bgSidebarMenu} onClick={handleClickOutside}>
      <aside className={`sidebar-menu ${isScrollActive ? "--scrolling" : ""}`}>
        <div>
          {sidebarMenuContent.map(({ content, link }, index) => {
            return (
              <a
                href={link}
                className={styleIsScrollActive}
                onClick={handleClickedMenu}
                key={index}
              >
                <span>{content}</span>
              </a>
            );
          })}
          <Link
            to="/register"
            className={styleIsScrollActive}
            onClick={handleClickedMenu}
          >
            <span>Register</span>
          </Link>
        </div>
      </aside>
    </div>
  );
};
