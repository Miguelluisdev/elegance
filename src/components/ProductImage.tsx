
import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/@types/product';

type ProductImageProps = {
  product: Product;
  fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImageProps) {

  return (
    <div className="relative mx-3 mt-3 flex justify-center h-auto w-auto  overflow-hidden rounded-xl">
      <Image
        src={product.image}
        width={ 700}
        height={ 700}
        alt={product.name}
      />
    </div>
  );
}
