import { create } from "zustand";

interface SidebarStore {
  isMinimized: boolean;
  toggle: () => void;
}
/**
 * Custom Zustand hook to access and control the sidebar's minimized state.
 *
 * @returns {SidebarStore} The sidebar store object with the current state and toggle function.
 *
 * @example
 * // Usage in a component
 * const { isMinimized, toggle } = useSidebar();
 * <button onClick={toggle}>Toggle Sidebar</button>
 * {isMinimized ? <MinimizedSidebar /> : <FullSidebar />}
 */
export const useSidebar = create<SidebarStore>((set) => ({
  isMinimized: false,
  toggle: () => set((state) => ({ isMinimized: !state.isMinimized })),
}));
