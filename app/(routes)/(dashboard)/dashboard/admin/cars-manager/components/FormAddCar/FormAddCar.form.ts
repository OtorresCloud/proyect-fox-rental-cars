import { z } from "zod"

export const formSchema = z.object({
    name: z.string().min(2, "Mínimo 2 caracteres").max(50),
    cv: z.string().min(2).max(50),
    transmission: z.string().min(2).max(50),
    people: z.string().min(1),
    photo: z.string().min(1, "Debes subir una imagen"), // ← Cambiado: min 1 y sin max
    engine: z.string().min(2).max(50),
    type: z.string().min(2).max(50),
    priceDay: z.string().min(2).max(50),
    isPublish: z.boolean(),
})

