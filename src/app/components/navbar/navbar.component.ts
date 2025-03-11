import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from './../../app.routes';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  routes = routes.map((routes) => ({
    title : routes.title ?? '',
    path : routes.path ?? '',
  }));
}
