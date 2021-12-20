import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}
)


export class CoursesService {
  headers ={
    headers:new HttpHeaders({
      Accept: "application/json, text/plain, */*",
      Authorization: 
      "Basic NXlEMVBFZ05raFRrakpKV2t3VDlSNzRPTmY5clZTeFoyWWpuamQ1czo1YzF0bnRNV1h4enB1ZDVvb2NPWTZuMEwxNWRiclpSQlNLaUkxNHhMN0FwMklqYWdRTXJ1amdkSnA5MWRTaE5PWHp2Z0tPWUVTWU1OT21YWExjalFTZlVBeGdaNHZUYTVsMmNyM0dmemJ2YVRrQ0FSMlJDUFNtcThFazY0dTkxVg==",
      "Content-Type": "application/json;charset=utf-8",
      client_id: "5yD1PEgNkhTkjJJWkwT9R74ONf9rVSxZ2Yjnjd5s",
      client_secret:"5c1tntMWXxzpud5oocOY6n0L15dbrZRBSKiI14xL7Ap2IjagQMrujgdJp91dShNOXzvgKOYESYMNOmXXLcjQSfUAxgZ4vTa5l2cr3GfzbvaTkCAR2RCPSmq8Ek64u91V",
    }).set( 'Access-Control-Allow-Origin', "*")

        }
    public baseurl ='https://www.udemy.com/api-2.0/courses/';

  constructor( private httpclient: HttpClient) { }

 getCourses(): Observable<any>{
    return this.httpclient.get(this.baseurl, this.headers);
  }

}
