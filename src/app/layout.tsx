
import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import  { ThemeProvider } from "@/components/ui/providers/ThemeProvider";
import AppSideBar from "@/components/AppSideBar";
import { SidebarProvider } from "@/components/ui/sidebar"


export const metadata: Metadata = {
  title: "My New Next App",
  description: "Clean layout with NavBar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` antialiased flex `}>
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <SidebarProvider>

        <AppSideBar />
        <main className="w-full">
          <NavBar />
          <div className="px-4" >{children}</div>
        </main>
        </SidebarProvider>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
