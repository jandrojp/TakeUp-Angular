import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TiendaGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const navigation = this.router.getCurrentNavigation();

    const fromAyuda = navigation?.extras.state?.['fromAyuda'] || false;

    if (fromAyuda) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
