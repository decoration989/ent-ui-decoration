import { Injectable } from '@angular/core';
import { IAppConfig } from '../models/app-config.interface';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  public get appConfig(): IAppConfig {
    return this._appConfig;
  }
  public set appConfig(value: IAppConfig) {
    this._appConfig = value;
  }
  constructor() { }
  private _appConfig!: IAppConfig;
}
