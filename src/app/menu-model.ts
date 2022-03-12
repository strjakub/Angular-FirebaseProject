export interface Dish {
    id?: any;
    name: string;
    cuisine: string;
    type: string;
    category: string;
    ingredients: string[];
    limit: number;
    price: number;
    description: string;
    link?: string;
    foto: string[];
    rating: number;
    no_ratings: number;
    can_rate: string[];
    rated: string[];
}