export type Product = {
    id: string;
    name: string;
    price: number | null;
    description: string | null;
    image: string;
    quantity?: number | 1;
    currency?:string;
}