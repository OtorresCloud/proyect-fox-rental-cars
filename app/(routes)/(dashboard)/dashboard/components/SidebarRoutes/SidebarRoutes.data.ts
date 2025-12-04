import { Calendar, Car, Heart, List } from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon: Car,
        label: "Carros",
        href: "/dashboard"
    },

    {
        icon: Calendar,
        label: "Carros Reservados",
        href: "/reservers"
    },

    {
        icon: Heart,
        label: "Carros favoritos",
        href: "/loved-cars"
    }
]
export const dataAdminSidebar = [
    {
        icon: List,
        label: "Gestionar coches",
        href: "dashboard/admin/cars-manager"
    },

    {
        icon: Calendar,
        label: "Todas las Reservas",
        href: "dashboard/admin/reservers"
    },

]

