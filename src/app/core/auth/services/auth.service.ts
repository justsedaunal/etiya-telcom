import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserForLogin } from '../models/userForLogin';
import { UserForLoginResponse } from '../models/userForLoginResponse';
import { LocalStorageService } from '../storage/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiControllerUrl: string = `${environment.apiUrl}/auth`;

  constructor(private httpClient: HttpClient,
    private localStorageService: LocalStorageService) { }

    login(userForLoginModel: UserForLogin): Observable<UserForLoginResponse> {
      return this.httpClient.post<UserForLoginResponse>(
        this.apiControllerUrl + '/login',
        userForLoginModel
      );
    }
    saveToken(userLoginResponse: UserForLoginResponse) {
      this.localStorageService.set('token', userLoginResponse.accessToken);
    }
}
