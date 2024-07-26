import { cn } from '@/lib/utils';
import React, { FC } from 'react'
import Container from './Container';
import Image from 'next/image';
import { Button } from '../ui';
import { User } from 'lucide-react';

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('border border-b',className)}>
        <Container className='flex items-center justify-between py-8'>
            {/* {Left} */}
            <div className='flex items-center gap-4'>
                <Image src='/logo.png' alt='Logo' width={35} height={35}/>
                <div className="">
                    <h1 className="text-2xl uppercase font-black">NEXT PIZZA</h1>
                    <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
                </div>
            </div>


            {/* {right} */}
            <div > 
                <Button className=" flex items-center gap-2">
                    <User size={16}/>
                    Войти
                </Button>
            </div>

        </Container>
    </header>
  )
}

export default Header;