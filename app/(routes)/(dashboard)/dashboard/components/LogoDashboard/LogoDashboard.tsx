import Image from "next/image";
import Link from "next/link";

export default function LogoDashboard() {
    return (
        <Link 
            href="/" 
            className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6 bg-white dark:bg-black transition-colors"
        >
            <Image 
                src="/logo.svg" 
                alt="logo" 
                width={80} 
                height={50} 
                priority
                className="dark:invert transition-all"
            />
            <h1 className="text-lg font-bold leading-none translate-y-[15px] text-gray-900 dark:text-white transition-colors">
                Fox Rental Cars
            </h1>
        </Link>
    )
}
