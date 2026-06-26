import { useMemo, useState } from "react";

import { SidebarContext } from "./SidebarContext";

type SidebarProviderProps = {
  children: React.ReactNode;
};

export default function SidebarProvider({
  children,
}: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] =
    useState(false);

  const [isMobileOpen, setIsMobileOpen] =
    useState(false);

  function toggleCollapse() {
    setIsCollapsed((previous) => !previous);
  }

  function toggleMobile() {
    setIsMobileOpen((previous) => !previous);
  }

  function closeMobile() {
    setIsMobileOpen(false);
  }

  const value = useMemo(
    () => ({
      isCollapsed,
      isMobileOpen,
      toggleCollapse,
      toggleMobile,
      closeMobile,
    }),
    [isCollapsed, isMobileOpen],
  );

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
}