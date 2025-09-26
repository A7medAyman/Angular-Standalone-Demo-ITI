export interface IproductsApi {
  id: number;
  title: string;
  price: number;
  description: string,
  categoryId: number;
  image: string;
  rating : {rate:number,count:number}
  
}
