'use client'

import { usePathname } from 'next/navigation';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {isHome && (
        <div className="flex items-center justify-center bg-[#D52052] w-full">
          <div className=" text-white text-sm px-4 py-3">
            Machyna Media Coverage<span className="inline-block ml-1">↗</span>
          </div>
        </div>
      )}
      {children}
    </>
  );
}