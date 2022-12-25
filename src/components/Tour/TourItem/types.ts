import {StaticImageData} from "next/image";

export interface TourState {
    id: number;
    name: string;
    location: string;
    price: number,
    rating: string;
    img: StaticImageData;
}