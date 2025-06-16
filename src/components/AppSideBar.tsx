import { Home, Inbox, Search, Settings, Calendar } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Inbox", url: "/#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

const AppSideBar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
            <div className="flex justify-center items-center ">
            <Link href="/">
                <Image src={Logo} width={150} height={150} alt="Logo" />
            </Link>
            </div>
    </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>          
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url} className="flex items-center gap-2 w-full">
                    <SidebarMenuButton>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <p className="text-center text-sm text-gray-500">
           &copy; 2025 Sabelo&rsquo;s design. All rights reserved.
        </p>
      </SidebarFooter>
    </Sidebar>

    
  );
};

export default AppSideBar;
