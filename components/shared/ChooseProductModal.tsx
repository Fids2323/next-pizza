import React from 'react';
import { Dialog } from '../ui';
import { DialogContent } from '../ui/dialog';
import { Title } from './Title';
import { Product } from '@prisma/client';
import { cn } from '../../lib/utils';

interface Props {
    className?: string;
    product: Product;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  return (
    <Dialog>
        <DialogContent className={cn(className, 'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden')}>
            <Title text={product.name}></Title>
        </DialogContent>
    </Dialog>
  );
};