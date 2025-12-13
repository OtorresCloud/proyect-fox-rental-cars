"use client";

import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SidebarItem(props: SidebarItemProps) {
    const { item } = props;
    const { href, icon: Icon, label } = item;

    const pathname = usePathname();
    const activePath = pathname === href;

    return (
        <Link
        href={href}
        className={cn(
            "mt-2 flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm transition-colors",
            "text-muted-foreground hover:bg-accent hover:text-foreground",
            activePath && "bg-accent text-foreground"
        )}
        >
        <Icon
            className={cn(
            "h-5 w-5 transition-colors",
            activePath ? "text-foreground" : "text-muted-foreground"
            )}
            strokeWidth={1}
        />
        <span className="truncate">{label}</span>
        </Link>
    );
    }
