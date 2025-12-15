

import { Header } from "@/components/common/Header";
import { Sidebar } from "@/components/common/SideBar";
import { Footer } from "@/components/common/Footer";

import { Outlet } from "react-router";


export default function MainLayout() {
    return (
        <div className="flex min-h-screen  bg-gray-800 text-white">
            <div className="flex-none md:flex md:w-50 "> 
            <Sidebar/>
            </div>
            <div className="flex-1 pr-50 text-white">
                <Header />
                <main className="relative">
                  <Outlet/>
                </main>
                <Footer />
            </div>
        </div>
    );
}