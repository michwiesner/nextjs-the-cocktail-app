export interface IDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface IDrinkCard {
    image: string;
    name: string;
}

export interface ISearch {
  drinks: IDrink[];
}
