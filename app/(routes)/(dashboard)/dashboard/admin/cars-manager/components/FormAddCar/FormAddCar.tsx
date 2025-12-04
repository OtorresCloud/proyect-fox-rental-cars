"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { formSchema } from "./FormAddCar.form"
import { Select, SelectContent, SelectItem, SelectValue,} from "@/components/ui/select"
import { log } from "console"
import { SelectTrigger } from "@/components/ui/select"
import { useState } from "react"
import { UploadButton } from "@/utils/uploadthing";
import { Button } from "@/components/ui/button"
import { FormAddCarProps } from "./FormAddCar.types"
import { useRouter } from "next/navigation";



export default function FormAddCar(props: FormAddCarProps) {
        const{ setOpenDialog} = props;
        const[photoUploaded, setPhotoUploaded]= useState (false)
        const router = useRouter();


        const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
                name:"",
                cv:"",
                transmission:"",
                people:"",
                photo:"",
                engine:"",
                type:"",
                priceDay:"",
                isPublish:false,
            },
        })
    
    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
    setOpenDialog(false);
    try {
        await  axios.post("/api/car", values);
        toast.success("Coche agregado");
        router.refresh();  
    } catch (error) {
        toast.error("Algo salió mal", {
        description: "Please try again later.",
        })
    }
        
    };

    const { isValid } = form.formState;

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div  className="grid gap-2 lg:grid-cols-2"   >
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel> Modelo de coche </FormLabel>
                <FormControl>
                    <Input placeholder="Ejemplo: Tesla model s Plaid" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
                <FormItem>
                <FormLabel> Caballos de fuerza </FormLabel>
                <FormControl>
                    <Input placeholder="Ejemplo: 150 CV" type="number" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
                <FormItem>
                <FormLabel> Transmisión </FormLabel>
                <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                >
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecciona la transmisión" />
                    </SelectTrigger>  
                </FormControl>
                <SelectContent>
                    <SelectItem value="manual" > Manual </SelectItem>
                    <SelectItem value="automatic" > Automatico </SelectItem>
                </SelectContent>  
                </Select>  
                <FormMessage />
                </FormItem>
            )}
            />
                        <FormField
            control={form.control}
            name="people"
            render={({ field }) => (
                <FormItem>
                <FormLabel> Personas</FormLabel>
                <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                >
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecciona el  total de asientos" />
                    </SelectTrigger>  
                </FormControl>
                <SelectContent>
                    <SelectItem value="2" > 2 </SelectItem>
                    <SelectItem value="4" > 4 </SelectItem>
                    <SelectItem value="5" > 5 </SelectItem>
                    <SelectItem value="7" > 7 </SelectItem>
                </SelectContent>  
                </Select>  
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="engine"
            render={({ field }) => (
                <FormItem>
                <FormLabel> Tipo de Motor </FormLabel>
                <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                >
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de motor" />
                    </SelectTrigger>  
                </FormControl>
                <SelectContent>
                    <SelectItem value="gasoil" > Gasolina</SelectItem>
                    <SelectItem value="electric" > Electrico</SelectItem>
                    <SelectItem value="diesel" > Dièsel</SelectItem>
                    <SelectItem value="hybrid" > Hibrido</SelectItem>
                </SelectContent>  
                </Select>  
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
                <FormItem>
                <FormLabel> Tipo de coche </FormLabel>
                <Select 
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                >
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de coche" />
                    </SelectTrigger>  
                </FormControl>
                <SelectContent>
                    <SelectItem value="sedan" > Sedàn</SelectItem>
                    <SelectItem value="suv" > Suv</SelectItem>
                    <SelectItem value="coupe" > Cupè</SelectItem>
                    <SelectItem value="familiar" > Familiar</SelectItem>
                    <SelectItem value="luxe" > Lujo </SelectItem>
                </SelectContent>  
                </Select>  
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                <FormItem>
                <FormLabel>Imagen del coche</FormLabel>
                <FormControl>
                        {photoUploaded ?
                        <p className="text -sm">imagen cargada</p>
                        :(                    <UploadButton
                        className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
                        {...field}
                        endpoint="photo"
                        onClientUploadComplete={(res) => {
                            form.setValue("photo", res?.[0].url);
                            setPhotoUploaded(true);
                        }}
                        onUploadError={(error: Error) => {
                            console.log(error);
                        }}
                    />
                        )}
                </FormControl>
                <FormMessage />
                </FormItem>
                )}
                />
            <FormField
                control={form.control}
                name="priceDay"
                render={({ field }) => (
                <FormItem>
                <FormLabel>Precio por dia</FormLabel>
                <FormControl>
                    <Input placeholder="S/. 2000" type="number" {... field} />
                </FormControl>
                <FormMessage />
                </FormItem>
                )}
                />
            </div>
            <Button type="submit" className="w-full mt-5" disabled={!isValid}>
                Agregar Coche
            </Button>
        </form>
    </Form>
    );
} 