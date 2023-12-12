import { Component, OnInit } from '@angular/core';
//formatação de icones
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  //atributos curso e professores
  courseLabel: Array <{ value: String, label: String}> = [];
  teachers: any[] = [];

  //adicionar construtor antes de OnInit
  constructor(
    private teacherService: TeacherService,
    private sharedService: SharedService
    ){}

    async ngOnInit(): Promise<void>
    {
      //adicionar conversores
      this.courseLabel = await this.sharedService.convertCourseToOption();
      
    }

    getLabelCourse (value: String) : String | undefined {
      let course = this.courseLabel.find((course) => course.value == value);
      return course?.label;
    }
}
