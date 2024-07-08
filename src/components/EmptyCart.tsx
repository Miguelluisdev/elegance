import Image from 'next/image'

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center mt-48  justify-center">
      <Image src="/file.png" alt="Empty Cart" width={150} height={150} />
      <p className="mt-4 text-xl text-red-500 font-bold">Carrinho Vazio!!</p>
    </div>
  )
}

export default EmptyCart
