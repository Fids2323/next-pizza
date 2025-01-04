import { cn } from '../../lib/utils'; 
import React, { FC } from 'react'
import Image from 'next/image';
import { Button } from '../ui';
import {  ArrowRight, ShoppingCart, User } from 'lucide-react';
import { Container } from './Container';
import Link from 'next/link';
import { CartButton, SearchInput } from '.';

interface HeaderProps {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('border border-b',className)}>
        <Container className='flex items-center justify-between py-8'>
            {/* {Left} */}
            <Link href='/'>
            <div className='flex items-center gap-4'>
                <Image src='/logo.png' alt='Logo' width={35} height={35}/>
                <div className="">
                    <h1 className="text-2xl uppercase font-black">NEXT PIZZA</h1>
                    <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
                </div>
            </div>
            </Link>

            {/* Search input */}
            <div className="mx-10 flex-1">
              <SearchInput/>
            </div>


            {/* {right} */}
            <div  className='flex gap-3'> 
                <Button variant='outline' className="flex items-center gap-1">
                    <User size={16}/>
                    Войти
					</Button>

					<div>
						<CartButton/>
					</div>
            </div>

        </Container>
    </header>
  )
}
