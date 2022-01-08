import { useMenuSidebar } from "../../contexts/OpenSidebarMenu";
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

  return (
    <div className={bgSidebarMenu} onClick={handleClickOutside}>
      <aside className={`sidebar-menu ${isScrollActive ? "--scrolling" : ""}`}>
        <div>
          <h1>Arthur Saldanha</h1>
        </div>
      </aside>
    </div>
  );
};
