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
    import { ThemeToggle } from "@/components/providers/theme-toogle";


    export function NavbarDashboard() {
        return (
            <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-20 px-4 gap-x-4
  bg-white dark:bg-black
  border-b border-gray-200 dark:border-white/10">
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
                {/* DERECHA: toggle + inicio + user */}
        <div className="flex items-center gap-6 ml-auto">
            <ThemeToggle />   {/* 👈 AQUÍ */}

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
    }