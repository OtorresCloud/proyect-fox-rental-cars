"use client";

import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
import { isAdministrator } from "@/lib/isAdministrator";

export default function SidebarRoutes() {
    const { userId } = useAuth();

    return (
        <div className="relative flex h-full flex-col justify-between bg-background text-foreground dark:bg-black">
        <div>
            <div className="p-2 md:p-6">
            <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground">
                GENERAL
            </p>

            {dataGeneralSidebar.map((item) => (
                <SidebarItem key={item.label} item={item} />
            ))}
            </div>

            <Separator className="bg-border" />

            {isAdministrator(userId) && (
            <div className="p-2 md:p-6">
                <p className="mb-2 text-xs font-medium tracking-wider text-muted-foreground">
                ADMINISTRADOR
                </p>

                {dataAdminSidebar.map((item) => (
                <SidebarItem key={item.label} item={item} />
                ))}
            </div>
            )}
        </div>

        <Separator className="bg-border" />

        <div className="p-4">
            <p className="text-center text-xs text-muted-foreground">
            copyright 2025 - derechos reservados
            </p>
        </div>
        </div>
    );
    }
