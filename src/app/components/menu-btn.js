"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const MenuBtn = () => {
    const pathname = usePathname()

    if (pathname === "/translations") {
        return (
            <Link className="me-2 border rounded-md p-2" href="/">New Translation</Link>
        )
    };
    return (
        <Link className="me-2 border rounded-md p-2" href="/translations">My Translation</Link>
    )
}
