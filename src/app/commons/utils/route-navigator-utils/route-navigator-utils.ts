import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteNavigator {

  constructor(private router: Router) {}

  /**
   * Navigue vers un nouveau chemin
   */
  goTo(path: string): void {
    this.router.navigate([path]);
  }

  /**
   * Navigue avec des paramètres
   */
  goToWithParams(path: string, params: any = {}): void {
    this.router.navigate([path], { queryParams: params });
  }

  /**
   * Navigue en remplaçant l'historique
   */
  replaceWith(path: string): void {
    this.router.navigateByUrl(path, { replaceUrl: true });
  }

  /**
   * Retour en arrière
   */
  goBack(): void {
    window.history.back();
  }
}
