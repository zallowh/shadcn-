"use client";
import Link from "next/link";
import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";
import * as React from "react"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "./ui/sidebar";

export default function NavBar() {
    const { setTheme } = useTheme()
  return (
    <nav className="p-4 flex justify-between items-center border-b">
        {/* LEFT */}
        <SidebarTrigger />
        <h1 className="text-xl font-bold">welcome to Sabelo&rsquo;s design</h1>

        <h2 className="text-sm font-segoe text-gray-500">Your cutting-edge application</h2>
        {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">dashboard</Link>
        {    /* theme menu */}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  
        {   /* user menu */}
        <DropdownMenu>
            <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10}>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User className="h-[1.2rem] w-[1.2rem] mr-2" /> profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Settings className="h-[1.2rem] w-[1.2rem] mr-2" /> settings
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                    <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" /> logout
                </DropdownMenuItem>                
            </DropdownMenuContent>
            </DropdownMenu>

      </div>
    </nav>
  );
}
