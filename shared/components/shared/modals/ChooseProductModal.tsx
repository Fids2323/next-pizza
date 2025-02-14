'use client'
import { cn } from '../../../lib/utils';
import { Dialog, DialogContent,DialogTitle } from '../../ui/dialog';
import { ProductWithRelations } from '../../../../@types/prisma';
import { useRouter } from 'next/navigation';
import { ProductForm } from '../ProductForm';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';


interface Props {
    className?: string;
    product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
	const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
          <DialogTitle>
            <VisuallyHidden>Заголовок диалога</VisuallyHidden>
          </DialogTitle>
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};