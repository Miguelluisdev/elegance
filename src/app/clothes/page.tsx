import { Product } from "@/@types/product"
import FilterDropdown from "@/components/FilterDropdown"
import SearchInput from "@/components/SearchInput"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import InfiniteScroll from "./components/InfiniteScroll"
import CardProduct from "./components/CardProduct"
import { fecthProducts } from "../actions"

export default async function Clothes() {
  const  {formatedProducts} = await fecthProducts({})

  return (
    <div className="max-w-7xl mx-auto pt-8 px-8 xl:px-0">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold"> Nossos Produtos</h1>
      </div>

      {/* <div className="flex justify-between items-center mb-8">
        <SearchInput />
        <FilterDropdown />
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6 justify-items-center">
        {formatedProducts.map((product: Product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
