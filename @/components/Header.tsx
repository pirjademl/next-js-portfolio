"use client";
import { FC, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
} from "./ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerFooter,
  DrawerHeader,
  DrawerClose,
} from "./ui/drawer";
import { useMediaQuery } from "../hooks";
import { ContactForm } from "./form";

export type HeaderProps = {};
export const Header: FC<HeaderProps> = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <header className="p-4 sticky top-0 bg-background">
        <nav className="flex justify-end">
          <Dialog>
            <DialogTrigger>
              <Button>
                <User size={15} />
                contact me
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Me</DialogTitle>
                <DialogDescription>
                  Contact me and I will try to get to you asap!!!
                </DialogDescription>
                <ContactForm />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </nav>
      </header>
    );
  }

  return (
    <header className="p-4 sticky top-0 bg-background">
      <nav className="flex justify-end">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button>
              <User size={15} />
              contact me
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DialogTitle>Contact Me</DialogTitle>
              <DialogDescription>
                Contact me and I will try to get to you asap!!!
              </DialogDescription>
            </DrawerHeader>
            <ContactForm />
            <DrawerFooter>
              <DrawerClose>
                <Button variant={"secondary"}>cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
};
