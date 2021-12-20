import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Comments } from '../classes/comments';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
    lstdata:Comments[];
  constructor(private _CoursesService: CoursesService) { }
        
   ngOnInit(): void {
    this._CoursesService.getCourses()
      .subscribe
      (
        data=>{
          console.warn(data)
          this.lstdata = data
        }
      )
        
  }

}
