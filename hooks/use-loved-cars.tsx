import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Car } from "@prisma/client";
import { toast } from "sonner";

interface UseLovedCarsType {
    lovedItems: Car[];
        addLovedItem: (data: Car) => void;
        removeLovedItem: (id: string) => void;
    }

export const useLovedCars = create<UseLovedCarsType>()(
        persist(
            (set, get) => ({
            lovedItems: [],

            addLovedItem: (data: Car) => {
                const current = get().lovedItems;
                const exists = current.some((item) => item.id === data.id);

                if (exists) {
                return toast.success("El coche ya existe en tu lista");
                }

                set({ lovedItems: [...current, data] });
                toast.success("Coche añadido a tu lista");
            },

            removeLovedItem: (id: string) => {
                set({
                lovedItems: get().lovedItems.filter((item) => item.id !== id),
                });
                toast.warning("Coche eliminado de la lista");
            },
            }),

            {
            name: "loved-products-storage",
            storage: createJSONStorage(() => localStorage),
            }
        )
);
