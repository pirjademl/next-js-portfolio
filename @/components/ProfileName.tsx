import Link from 'next/link';
import { FC } from 'react';
import {  Button } from '@components/@/components/ui/button';
import { Instagram } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-3xl flex flex-col font-bold text-highlight">
            Magdum Pirjade
            <div className="text-sm flex justify-between items-center">
                @BeingHonest
                <Link
                    className="block md:hidden"
                    href="https://instagram.com/ezSnippet"
                    target='_blank'
                >
                    <Button variant="secondary" size={'icon'}>
                        <Instagram />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileName;
