"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { MobileDrawer } from "./mobile-drawer";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full flex items-center bg-white h-26">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1.5">
            <Image src={"/LOGO.svg"} height={40} width={142} alt="Amdari" />
          </Link>
        </div>

        {/* Navigation - Central Capsule (Desktop) */}
        <div className="hidden xl:flex items-center px-4 py-2.5 bg-[#EEF9FC] rounded-2xl ">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-[#005a6e] font-mebdium text-sm h-8 px-3">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-100 grid gap-3 text-sm font-medium p-3">
                    <div className="pt-3">Our Team</div>
                    <div>Our History</div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-[#344054] font-medium text-sm h-8 px-3">
                  ProjectVault by Amdari
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-100 grid gap-3 text-sm font-medium p-3">
                    <div className="">ProjectVault 1</div>
                    <div className="">ProjectVault 2</div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-[#344054] font-medium text-sm h-8 px-3">
                  R.A.V.E by Amdari
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-50">Content for R.A.V.E</div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent text-[#344054] font-medium text-sm h-8 px-3"
                    )}
                  >
                    TalentLoop by Amdari
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent text-[#344054] font-medium text-sm h-8 px-3"
                    )}
                  >
                    Hackathon
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions (Desktop) */}
        <div className="hidden xl:flex items-center gap-6">
          <Link
            href="/signin"
            className="text-[#005a6e] font-bold text-sm hover:opacity-80 transition-opacity"
          >
            Sign in
          </Link>
          <Button className="rounded-xl px-8 h-10 bg-linear-to-r from-[#007b8a] to-[#005a6e] hover:from-[#005a6e] hover:to-[#004a5a] text-white font-bold border-none shadow-lg shadow-teal-900/10">
            Get started
          </Button>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-button inline-flex items-center justify-center xl:hidden p-2 text-[#005a6e] hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Fixed Overlay */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
