export default interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: string;
}



export interface StoreItems {
  id?: number;
  title?:string;
  category: string;
  image: string;
  price: number;
}