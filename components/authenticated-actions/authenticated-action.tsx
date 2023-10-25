"use client"
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

export default function AuthenticatedActions() {
  const pathname = usePathname();
  return <div style={{ display: "flex", justifyContent: 'center', marginTop: "60px", }}>
    <Link href="/dashboard"
      style={{ marginRight: '8px' }}
      className={buttonVariants({ variant: pathname === "/dashboard" ? "default" : "secondary" })}
    > Profile </Link>

    <Link href="/memetemplates" style={{ marginRight: '8px' }}
      className={buttonVariants({ variant: pathname === "/memetemplates" ? "default" : "secondary" })} > Meme Templates </Link>

    <Link href="/mymemes" style={{ marginRight: '8px' }}
      className={buttonVariants({ variant: pathname === "/mymemes" ? "default" : "secondary" })}
    > My Memes </Link>

    <Link href="/generatememe" style={{ marginRight: '8px' }}
      className={buttonVariants({ variant: pathname === "/generatememe" ? "default" : "secondary" })}
    > Generate Meme </Link>
  </div>
}
