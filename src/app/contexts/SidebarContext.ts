import { createContext } from "react";

export type SidebarContextValue = {
  isCollapsed: boolean;
  isMobileOpen: boolean;

  toggleCollapse: () => void;
  toggleMobile: () => void;
  closeMobile: () => void;
};

export const SidebarContext = createContext<
  SidebarContextValue | undefined
>(undefined);