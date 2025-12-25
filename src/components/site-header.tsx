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
        <div className="hidden lg:flex items-center px-4 py-1.5 bg-cyan-50/50 rounded-full border border-cyan-100/50">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-[#005a6e] font-medium text-sm h-8 px-3">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 lg:w-150">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Amdari
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Empowering project management and talent loops.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Our Mission
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our goals and values.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-[#005a6e] font-medium text-sm h-8 px-3">
                  ProjectVault by Amdari
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-50">Content for ProjectVault</div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-[#005a6e] font-medium text-sm h-8 px-3">
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
                      "bg-transparent hover:bg-transparent text-[#005a6e] font-medium text-sm h-8 px-3"
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
                      "bg-transparent hover:bg-transparent text-[#005a6e] font-medium text-sm h-8 px-3"
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
