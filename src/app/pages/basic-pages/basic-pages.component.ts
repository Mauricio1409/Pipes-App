import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-pages',
  imports:
  [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe

  ],
  templateUrl: './basic-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent {
  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));

  nameLower = signal('fernando');
  nameUpper = signal('FERNANDO');
  fullName = signal('feRnaNdo HeRRerA');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup(() => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: AvailableLocale) {
    console.log({ locale });
    this.localeService.changeLocale(locale);
  }
}

