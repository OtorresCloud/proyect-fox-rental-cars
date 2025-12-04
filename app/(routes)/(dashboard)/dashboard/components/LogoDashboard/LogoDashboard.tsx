import Image from "next/image";
import Link from "next/link";

export default function LogoDashboard() {
    return (
        <Link href= "/" 
        className="flex items-center h-20 gap-2 bo0rder-b cursor-pointer min-h-20 px-6">
        <Image src ="/logo.svg" alt = "logo" width={80} height ={50} priority/>
        <h1 className = "text-lg font-bold leading-none translate-y-[15px]">Fox Rental Cars</h1>
        </Link>
    )
}
