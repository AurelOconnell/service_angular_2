import { Injectable } from '@angular/core';
import { Cocktail } from './model/Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  public cocktails: Array<Cocktail> = [
    {name: "cocktail1", price: 7, image: "url_image1"},
    {name: "cocktail2", price: 10, image: "url_image2"},
    {name: "cocktail3", price: 8, image: "url_image3"},
  ];

  public getCocktails(): Array<Cocktail> {
    return this.cocktails;
  }
}
