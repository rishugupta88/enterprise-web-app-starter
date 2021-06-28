import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NgxsTestService {
  readonly apiServiceUrl = '/api/mock/v1/get';

  constructor(private readonly http: HttpClient) {
  }

  loadInitialConfig(): Observable<any> {
    return this.http.get<any>(this.apiServiceUrl);
  }

}
