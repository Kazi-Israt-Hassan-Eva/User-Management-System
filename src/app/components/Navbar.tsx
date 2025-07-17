import { Link } from "lucide-react";
import React from "react";

const Navbar = () => {
    return <div className="py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
       <div className="container flex items-center justify-between">
        <Link href="/login">Login</Link>
        <Link href="C:\Users\user\Desktop\nextjs\nextjs-auth\src\app\(auth)\register\page.tsx">Register</Link>
        </div> 

    </div>;
};

export default Navbar;