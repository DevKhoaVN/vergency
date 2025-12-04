export interface IProduct {
    name: string,
    slug: string,
    price: number,
    description:string,
    rating:number,
    thumb: string
    end_price: number
}

export interface IProductContext {
    selectedCategory: string,
    setSelectedCategory: (category: string) => void; // hàm set
}

export interface IProductDetail {
   name: string,
   description: string,
   rating: number,
   thumb: Array<string>,
   end_price: string,
   size: Array<string>,
   brand: string,
   selled: number
}