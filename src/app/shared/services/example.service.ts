import { Injectable } from '@angular/core';
import { ExampleItem } from '../models';

@Injectable({ providedIn: 'root' })
export class ExampleService {
  public getExampleData(): ExampleItem[] {
    return [
      {
        name: 'Alice',
        favoriteFood: 'Pizza',
        favoriteColor: 'Blue',
        numberOfPets: 2,
        dob: new Date('1990-01-01'),
      },
      {
        name: 'Bob',
        favoriteFood: 'Tacos',
        favoriteColor: 'Green',
        numberOfPets: 0,
        dob: new Date('1995-01-01'),
      },
      {
        name: 'Charlie',
        favoriteFood: 'Pasta',
        favoriteColor: 'Red',
        numberOfPets: 1,
        dob: new Date('2000-01-01'),
      },
      {
        name: 'David',
        favoriteFood: 'Sushi',
        favoriteColor: 'Yellow',
        numberOfPets: 3,
        dob: new Date('2005-01-01'),
      },
      {
        name: 'Eve',
        favoriteFood: 'Burgers',
        favoriteColor: 'Purple',
        numberOfPets: 4,
        dob: new Date('2010-01-01'),
      },
      {
        name: 'Frank',
        favoriteFood: 'Salad',
        favoriteColor: 'Orange',
        numberOfPets: 5,
        dob: new Date('2015-01-01'),
      },
      {
        name: 'Grace',
        favoriteFood: 'Ice Cream',
        favoriteColor: 'Pink',
        numberOfPets: 6,
        dob: new Date('2020-01-01'),
      },
      {
        name: 'Heidi',
        favoriteFood: 'Cake',
        favoriteColor: 'Brown',
        numberOfPets: 7,
        dob: new Date('2025-01-01'),
      },
      {
        name: 'Ivan',
        favoriteFood: 'Cookies',
        favoriteColor: 'Black',
        numberOfPets: 8,
        dob: new Date('2030-01-01'),
      },
      {
        name: 'Judy',
        favoriteFood: 'Donuts',
        favoriteColor: 'White',
        numberOfPets: 9,
        dob: new Date('2035-01-01'),
      },
      {
        name: 'Kevin',
        favoriteFood: 'Fruit',
        favoriteColor: 'Gray',
        numberOfPets: 10,
        dob: new Date('2040-01-01'),
      },
      {
        name: 'Lily',
        favoriteFood: 'Vegetables',
        favoriteColor: 'Cyan',
        numberOfPets: 11,
        dob: new Date('2045-01-01'),
      },
      {
        name: 'Molly',
        favoriteFood: 'Nuts',
        favoriteColor: 'Magenta',
        numberOfPets: 12,
        dob: new Date('2050-01-01'),
      },
      {
        name: 'Nancy',
        favoriteFood: 'Seeds',
        favoriteColor: 'Teal',
        numberOfPets: 13,
        dob: new Date('2055-01-01'),
      },
      {
        name: 'Oscar',
        favoriteFood: 'Grains',
        favoriteColor: 'Lime',
        numberOfPets: 14,
        dob: new Date('2060-01-01'),
      },
      {
        name: 'Patty',
        favoriteFood: 'Beans',
        favoriteColor: 'Maroon',
        numberOfPets: 15,
        dob: new Date('2065-01-01'),
      },
      {
        name: 'Quinn',
        favoriteFood: 'Rice',
        favoriteColor: 'Olive',
        numberOfPets: 16,
        dob: new Date('2070-01-01'),
      },
      {
        name: 'Randy',
        favoriteFood: 'Potatoes',
        favoriteColor: 'Navy',
        numberOfPets: 17,
        dob: new Date('2075-01-01'),
      },
      {
        name: 'Sally',
        favoriteFood: 'Tomatoes',
        favoriteColor: 'Aqua',
        numberOfPets: 18,
        dob: new Date('2080-01-01'),
      },
      {
        name: 'Tom',
        favoriteFood: 'Carrots',
        favoriteColor: 'Indigo',
        numberOfPets: 19,
        dob: new Date('2085-01-01'),
      },
    ];
  }
}
