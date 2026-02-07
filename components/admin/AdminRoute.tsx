'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowRightIcon } from "@heroicons/react/16/solid";

type AdminRouteProps = {
  link: {
    url: string;
    text: string;
    blank: boolean;
  };
};
export default function AdminRoute({ link }: AdminRouteProps) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(link.url)
  return (
    <Link
      className={`${isActive ? "bg-blue-600 text-white" : "bg-slate-200"} h-20 flex items-center gap-5 w-full p-3 shadow  hover:bg-blue-400 transition-colors font-bold text-lg`}
      href={link.url}
      target={link.blank ? "_blank" : ""}
    >
      {isActive && <ArrowRightIcon className="w-10 text-amber-500"/> }
     
      {link.text}
    </Link>
  );
}
