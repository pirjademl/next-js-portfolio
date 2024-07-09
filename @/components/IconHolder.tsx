import { FC } from "react";
export type IconHolderProps = {
  link: string;
  children: React.ReactNode;
};
export const IconHolder: FC<IconHolderProps> = ({ link, children }) => {
  return (
    <a href={link} className="flex items-center gap-3 text-sm">
      {children}
    </a>
  );
};
