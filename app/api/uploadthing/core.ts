
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    photo: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(async () => {
            // Autenticación con Clerk
            const { userId } = await auth();

            // Si no hay usuario autenticado, lanzar error
            if (!userId) {
                throw new UploadThingError("Unauthorized");
            }

            // Retornar metadata
            return { userId };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("✅ Upload complete!");
            console.log("👤 User ID:", metadata.userId);
            console.log("📁 File URL:", file.url);
            console.log("📝 File name:", file.name);

            // Aquí podrías guardar en tu base de datos
            // await db.insert(...)

            return { success: true, url: file.url };
        }),
    techSheet: f({ pdf: { maxFileSize: "4MB" } })   // <--- NUEVO
        .middleware(async () => {
            const { userId } = await auth();
            if (!userId) throw new UploadThingError("Unauthorized");
            return { userId };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            return { success: true, url: file.url };
        }),

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;