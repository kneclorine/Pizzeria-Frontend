export interface IngredientCreateDTO {
    
    name:string;
    price:number;
}

export interface IngredientUpdateDTO {
    id:string;
    name:string;
    price:number;
}

export interface Ingredient {
    id:string;
    name:string;
    price:number;
}