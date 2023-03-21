import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleResolver implements Resolve<boolean> {
  constructor(private titleService: Title, private translate: TranslateService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.titleService.setTitle(this.translate.instant(route.data["title"]));
    return of(true);
  }
}
