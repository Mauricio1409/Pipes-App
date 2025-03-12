import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'SearchInput',
})
export class SearchInputPipe implements PipeTransform {

  transform(value: Hero[], search: string): Hero[] {
    if(!search) return value;

    search = search.toLowerCase()

    return value.filter(hero => hero.name.toLowerCase().includes(search));
  }

}
