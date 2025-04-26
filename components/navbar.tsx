"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <span className="text-xl font-bold">Zypher</span>
        </Link>

        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/generate" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Generate Proof</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/verify" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Verify Proof</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">API Documentation</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Integrate with our API endpoints for proof generation and verification.
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs?tab=circuit" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Circuit Explorer</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore the zero-knowledge circuits that power our verification system.
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs?tab=integration" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Integration Guides</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Step-by-step guides for integrating Zypher with various platforms.
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs?tab=faq" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">FAQ</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Frequently asked questions about zero-knowledge proofs and our protocol.
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-4 md:ml-auto">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
            Connect Wallet
          </Button>
        </div>

        <div className="flex md:hidden ml-auto">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-md ${isActive("/") ? "bg-accent" : "hover:bg-accent"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/generate"
                  className={`px-4 py-2 rounded-md ${isActive("/generate") ? "bg-accent" : "hover:bg-accent"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Generate Proof
                </Link>
                <Link
                  href="/verify"
                  className={`px-4 py-2 rounded-md ${isActive("/verify") ? "bg-accent" : "hover:bg-accent"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Verify Proof
                </Link>
                <Link
                  href="/docs"
                  className={`px-4 py-2 rounded-md ${isActive("/docs") ? "bg-accent" : "hover:bg-accent"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Documentation
                </Link>
                <div className="pt-4 mt-4 border-t border-border">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Connect Wallet</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
