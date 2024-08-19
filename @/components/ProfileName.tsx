import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui";
import { Instagram } from "lucide-react";

interface ProfileNameProps {
  name: string;
  nickname: string;
}

const ProfileName: FC<ProfileNameProps> = ({ name, nickname }) => {
  return (
    <div className="text-3xl flex flex-col font-bold text-highlight">
      {name}
      <div className="text-sm flex justify-between items-center">
        {nickname}
        <Link
          className="block md:hidden"
          href="https://instagram.com/magdum._pirjade"
          target="_blank"
        >
          <Button variant="secondary" size={"icon"}>
            <Instagram />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileName;
