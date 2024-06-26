import { FC } from "react";
import { Button } from "./ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";
import ProfilePic from "./ProfilePic";
import ProfileName from "./ProfileName";

interface CoverProps {}

export const Cover: FC<CoverProps> = ({}) => {
  return (
    <div className="flex  w-full  bg-[url('/sidebar.jpg')] bg-no-repeat bg-center">
      <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-xs w-full gap-2 md:gap-10">
        <ProfilePic />
        <div className="flex md:flex-1 flex-col justify-center gap-4">
          <div className="flex justify-between items-center gap-5 ">
            <ProfileName name={"Magdum Pirjade  "} nickname={"@Beinghonest"} />
            <Link
              className="hidden md:block"
              target="_blank"
              href="https://instagram.com/magdum._pirjade"
            >
              <Button variant="outline">
                <Instagram color="purple" size={15} />
                <span className="hidden md:block">Follow me on Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
