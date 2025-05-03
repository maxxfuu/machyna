'use client'

import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {isHome && (
        <div className="flex items-center justify-center bg-[#B51A39] w-full cursor-pointer">
          <div className="flex text-white text-sm px-4 py-3">
            Machyna Media Coverage <ArrowUpRight size={20} />
          </div>
        </div>
      )}
      {children}
    </>
  );
}