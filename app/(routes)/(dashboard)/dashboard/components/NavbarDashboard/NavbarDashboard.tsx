"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes"
import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

export function NavbarDashboard() {
    return (
        <nav className="sticky top-0 z-40 flex items-center justify-between w-full h-20 px-4 border-b gap-x-4 bg-background">
            {/* IZQUIERDA: solo el menú (mobile) */}
            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        <Menu size={22} />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SidebarRoutes />
                    </SheetContent>
                </Sheet>
            </div>
            {/* DERECHA: Inicio + UserButton */}
            <div className="flex items-center gap-6 ml-auto">
                <Link
                    href="/"
                    className="text-sm font-medium hover:opacity-80 transition"
                >
                    Inicio
                </Link>
                <UserButton />
            </div>

        </nav>
    )
};
