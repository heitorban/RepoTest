import { Injectable } from '@angular/core';
import { CourseService } from '../pages/course/course.service';
import { UserService } from '../pages/user/user.service';

export interface Params {
  [key: string]: any;
}



@Injectable({
  providedIn: 'root'
})
export class SharedService {

    users: Array<{ id: String; first_name: String; }> = [];
    courses: Array<{ id: String; name: String; }> = [];

    userLabel: Array <{value: String, label: String}> = [];
    courseLabel: Array <{value: String, label: String}> = [];

    //acresentar conversores
    async convertUserToOption(): Promise<any[]> {
      this.users.forEach((user: { id: String, first_name: String;}) => {
        let u = {
          value: user.toString(),
          label: user.first_name
        }
        this.userLabel.push(u);
    });
      return this.userLabel;
      }

      async convertCourseToOption(): Promise<any[]> {
        this.courses.forEach((course: { id: String, name: String;}) => {
          let c = {
            value: course.toString(),
            label: course.name
          }
          this.courseLabel.push(c);
      });
        return this.courseLabel;
        }


  constructor(
    private userService: UserService,
    private courseService: CourseService
  ) { 
    
  }

}