import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, publish, Subject, takeUntil, tap } from 'rxjs'; 
import { CoursesService } from '../courses.service';
import { Comments } from '../classes/comments';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

closeActive= new Subject<void>();

  
  constructor(private _CoursesService: CoursesService) { }
  courses: any;

 async  ngOnInit():Promise<void> {
    (await this._CoursesService.getCourses()).subscribe
      ({
          next: (result:any) =>{
            this.courses =  result;
            //console.log(result);
            return result;
          }
      })
    }


ngOnDestroy(){
  this.closeActive.next();
  this.closeActive.complete();
}

}
