import { Link } from "react-router-dom";

// Components
import { useMenuSidebar } from "../../contexts/OpenSidebarMenu";
import { sidebarMenuContent } from "./menuRoutes";

import "./styles.scss";

interface SidebarMenuProps {
  bgSidebarMenu?: string;
}

export const SidebarMenu = ({
  bgSidebarMenu = "dark-bg-sidebar-menu",
}: SidebarMenuProps) => {
  const { isScrollActive, handleOpenSidebarMenu } = useMenuSidebar();

  const handleClickOutside = (e) => {
    if (e.target.className === bgSidebarMenu) handleOpenSidebarMenu(false);
  };

  const styleIsScrollActive = isScrollActive ? "--scrolling" : "";

  return (
    <div className={bgSidebarMenu} onClick={handleClickOutside}>
      <aside className={`sidebar-menu ${isScrollActive ? "--scrolling" : ""}`}>
        <div>
          {sidebarMenuContent.map(({ content, path }) => {
            return (
              <Link to={path} className={styleIsScrollActive}>
                <span>{content}</span>
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
};
