"use client"

import { Product } from "@/@types/product"
import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import CardProduct from "./CardProduct"
import { fecthProducts } from "@/app/actions"

function InfiniteScroll({ initialProducts }: { initialProducts: Product[] }) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [hasMore , setHasMore] = useState<boolean>(true)
  const [isLoading , setLoading] = useState<boolean>(false)
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  })

  const lastProductId = products[products.length - 1]?.id;

  const loadMoreProducts = useCallback(async () => {
    setLoading(true);
    const { formatedProducts, has_more } = await fecthProducts({lastProductId});

    if (formatedProducts) {
      setProducts((prevProducts) => [...prevProducts, ...formatedProducts]);
      setHasMore(has_more);
    }

    setLoading(false);
  }, [lastProductId]);

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      loadMoreProducts();
    }
  }, [hasMore, inView, isLoading, loadMoreProducts]);

  if (!products) return <div className="flex items-center justify-center" >carregando...</div>;

  return (
    <>
      {products.map((product: Product) => (
        <CardProduct key={product.id} product={product} />
      ))}
      {hasMore && (
        <div ref={ref} >
            carregando mais produtos
        </div>
      )}
    </>
  )
}

export default InfiniteScroll
