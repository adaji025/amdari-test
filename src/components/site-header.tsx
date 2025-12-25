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

export function SiteHeader() {
  return (
    <header className="w-full  bg-white">
      <div className="app-width py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1.5">
            <Image src={"/LOGO.svg"} height={40} width={142} alt="Amdari" />
          </Link>
        </div>

        {/* Navigation - Central Capsule */}
        <div className="hidden lg:flex items-center px-4 py-1.5 bg-[#EEF9FC] rounded-full border border-cyan-100/50">
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
                  <div className="p-4 w-100">Content for ProjectVault</div>
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

        {/* Actions */}
        <div className="flex items-center gap-6">
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
      </div>
    </header>
  );
}
