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
import { Input, Label, Textarea } from "./ui";
import { Form } from "./ui/form";

export type HeaderProps = {};
export const Header: FC<HeaderProps> = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

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
              </DialogHeader>

              <Form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <Input placeholder="John" />
                  <Input placeholder="Doe" />
                </div>
                <Input placeholder="Domain@mail.com" />
                <Textarea placeholder="Enter your query Here" />
                <Button variant={"outline"}> Submit</Button>
              </Form>
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

            <Form className="px-3" onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <Input placeholder="John" />
                <Input placeholder="Doe" />
              </div>
              <Input placeholder="Domain@mail.com" />
              <Textarea placeholder="Enter your query Here" />
              <Button variant={"outline"}> Submit</Button>
            </Form>
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
