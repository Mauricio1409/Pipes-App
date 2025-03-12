import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({
  name: 'HeroCreator',
})
export class HeroCreatorPipe implements PipeTransform {

  transform(value: Creator): string {
    return Creator[value];
  }

}
