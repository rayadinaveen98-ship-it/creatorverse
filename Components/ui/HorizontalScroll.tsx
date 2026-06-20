import type { ReactNode } from "react";

export default function HorizontalScroll({ children }: { children: ReactNode }) {
  return (
    <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 no-scrollbar sm:-mx-0 sm:px-0 sm:gap-5">
      {children}
    </div>
  );
}
