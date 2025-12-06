"use client"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem
    } from "@/components/ui/carousel"
    import { dataBrands } from "./SliderBrands.data";
    import { Reveal } from "@/components/Shared/Reveal"

    export function SliderBrands() {
    return (
        <Reveal
        position="bottom"
        className="flex justify-center py-4"   // << SOLO espaciado interno
        >
        <Carousel
            className="w-full max-w-6xl mx-auto"
            plugins={[
            Autoplay({
                delay: 2500,
            }),
            ]}
        >
            <CarouselContent>
            {dataBrands.map(({ url }) => (
                <CarouselItem
                key={url}
                className="flex justify-center items-center basis-full md:basis-1/2 lg:basis-1/6"
                >
                <Image
                    src={`/images/brands/${url}`}
                    alt="Brand"
                    width={90}
                    height={90}
                    className="object-contain aspect-3/2"
                />
                </CarouselItem>
            ))}
            </CarouselContent>
        </Carousel>
        </Reveal>
    );
}
