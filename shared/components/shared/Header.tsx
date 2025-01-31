'use client'

import { cn } from '../../lib/utils'; 
import React, { FC } from 'react'
import Image from 'next/image';
import { AuthModal } from './modals';
import { Container } from './Container';
import Link from 'next/link';
import { CartButton, ProfileButton, SearchInput } from '.';
import toast from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSession, signIn} from 'next-auth/react';

interface HeaderProps {
	className?: string
	hasSearch?: boolean
	hasCart?: boolean
}

export const Header: FC<HeaderProps> = ({ className,hasSearch = true,hasCart }) => {
  const router = useRouter();
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const { data: session } = useSession()

  const searchParams = useSearchParams();

  React.useEffect(() => {
    let toastMessage = '';

    if (searchParams.has('paid')) {
      toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
    }

    if (searchParams.has('verified')) {
      toastMessage = 'Почта успешно подтверждена!';
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace('/');
        toast.success(toastMessage, {
          duration: 3000,
        });
      }, 1000);
    }
  }, []);
  
  return (
    <header className={cn('border-b',className)}>
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
				{hasSearch && (
					<div className="mx-10 flex-1">
						<SearchInput/>
					</div>
				)}

            {/* {right} */}
            <div  className='flex gap-3'> 
              <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

              <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
					    {hasCart && (<CartButton />)}
          </div>
        </Container>
    </header>
  )
}
