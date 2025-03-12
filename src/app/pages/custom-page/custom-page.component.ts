
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/hero.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { SearchInputPipe } from '../../pipes/search-input.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe,
            CanFlyPipe,
            HeroColorPipe,
            HeroTextColorPipe,
            TitleCasePipe,
            HeroCreatorPipe,
            HeroSortByPipe,
            SearchInputPipe
          ],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent {


  name = signal('mauricio torti')

  upperCase  = signal<boolean>(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('')

  OnUpperCase()
  {
    this.upperCase() ? this.upperCase.set(false) : this.upperCase.set(true);
  }
}
