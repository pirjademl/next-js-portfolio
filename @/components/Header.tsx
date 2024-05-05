import { FC } from "react";
import { Button } from "./ui/button";
import { User } from "lucide-react";

export type HeaderProps={}
export const Header:FC<HeaderProps>=()=>{
        return(
        <header className="p-4 sticky top-0 bg-background">
        <nav className="flex justify-end">
            <Button className="flex justify-between gap-2" variant={'default'}><User size={18}/> Contact Me</Button>

        </nav>
        </header>

        )
    }
