"use client";

import { Separator } from "@/components/ui/separator"
import { useAuth } from "@clerk/nextjs"
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
import { isAdministrator } from "@/lib/isAdministrator";

export default function SidebarRoutes() {
    const { userId } = useAuth();
return (
    <div className="flex flex-col justify-between h-full">
        <div>
            <div className="p-2 md:p-6">
                <p className="mb-2 text-slate-500">GENERAL</p>
                {dataGeneralSidebar.map((item) => (
                <SidebarItem key={item.label} item={item} />
            ))}
            </div>

            <Separator/>
            {isAdministrator(userId) &&(
            <div className="p-2 md:p-6">
            <p className="mb-2 text-slate-500">ADMINISTRADOR</p>
            {dataAdminSidebar.map((item) => (
                <SidebarItem key={item.label} item={item} />
            ))}
            </div>
            )}
            </div>
            <Separator/>
    <div className="absolute bottom-4 left-0 w-full flex justify-center">
        <p className="text-xs text-slate-500 text-center">
            copyright 2025 - derechos reservados
        </p>
    </div>
    </div>
);                                   
}